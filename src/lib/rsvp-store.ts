import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export type Attendance = "yes" | "no";
export type WeddingEventChoice = "vu-quy" | "thanh-hon" | "both" | null;

export type RsvpRecord = {
  id: string;
  name: string;
  attendance: Attendance;
  event: WeddingEventChoice;
  companions: number;
  message: string;
  createdAt: string;
};

export type RsvpInput = {
  name: string;
  attendance: Attendance;
  event: WeddingEventChoice;
  companions: number;
  message: string;
};

const defaultDataFile = path.join(process.cwd(), "data", "rsvp.json");
const tmpDataFile = path.join("/tmp", "rsvp.json");

function getPrimaryDataFile(): string {
  if (process.env.RSVP_DATA_FILE) {
    return path.resolve(process.env.RSVP_DATA_FILE);
  }
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return tmpDataFile;
  }
  return defaultDataFile;
}

let activeDataFile = getPrimaryDataFile();
let writeQueue: Promise<void> = Promise.resolve();

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";
}

export function parseRsvpInput(payload: unknown):
  | { success: true; data: RsvpInput }
  | { success: false; message: string } {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { success: false, message: "Dữ liệu gửi lên không hợp lệ." };
  }

  const input = payload as Record<string, unknown>;
  const name = cleanText(input.name, 120);
  const message = cleanText(input.message, 400);

  if (!name) {
    return { success: false, message: "Vui lòng nhập tên của bạn." };
  }

  if (input.attendance !== "yes" && input.attendance !== "no") {
    return { success: false, message: "Trạng thái tham dự không hợp lệ." };
  }

  if (input.attendance === "no") {
    return {
      success: true,
      data: { name, attendance: "no", event: null, companions: 0, message },
    };
  }

  const allowedEvents = ["vu-quy", "thanh-hon", "both"];
  const event = typeof input.event === "string" && allowedEvents.includes(input.event)
    ? (input.event as Exclude<WeddingEventChoice, null>)
    : null;
  const companions = Number(input.companions);

  if (!event) {
    return { success: false, message: "Vui lòng chọn sự kiện tham dự." };
  }

  if (!Number.isInteger(companions) || companions < 1 || companions > 4) {
    return { success: false, message: "Số người tham dự phải từ 1 đến 4." };
  }

  return {
    success: true,
    data: { name, attendance: "yes", event, companions, message },
  };
}

async function readFileSafely(filePath: string): Promise<RsvpRecord[]> {
  try {
    const content = await readFile(filePath, "utf8");
    const parsed: unknown = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];
    return parsed as RsvpRecord[];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return [];
    console.warn(`Không thể đọc file ${filePath}:`, error);
    return [];
  }
}

async function writeRecordsToFile(targetFile: string, records: RsvpRecord[]): Promise<void> {
  await mkdir(path.dirname(targetFile), { recursive: true });
  const temporaryFile = `${targetFile}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(records, null, 2)}\n`, "utf8");
  await rename(temporaryFile, targetFile);
}

function getWebhookUrl(): string | null {
  return process.env.RSVP_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL || null;
}

async function sendToWebhook(url: string, record: RsvpRecord): Promise<void> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const eventTextMap: Record<string, string> = {
      "vu-quy": "Lễ Vu Quy",
      "thanh-hon": "Lễ Thành Hôn",
      both: "Cả hai sự kiện",
    };

    const formattedTime = new Intl.DateTimeFormat("vi-VN", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "Asia/Ho_Chi_Minh",
    }).format(new Date(record.createdAt));

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...record,
        eventLabel: record.event ? eventTextMap[record.event] ?? record.event : "—",
        attendanceLabel: record.attendance === "yes" ? "Tham dự" : "Bận, không tham dự",
        timeFormatted: formattedTime,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
  } catch (error) {
    console.warn("Lỗi gửi webhook RSVP (không ảnh hưởng đến lưu trữ):", error);
  }
}

export async function readRsvps(): Promise<RsvpRecord[]> {
  const recordMap = new Map<string, RsvpRecord>();

  // Đọc từ file cấu hình chính (ví dụ data/rsvp.json hoặc biến môi trường)
  const primaryFile = getPrimaryDataFile();
  const primaryRecords = await readFileSafely(primaryFile);
  for (const item of primaryRecords) {
    if (item?.id) recordMap.set(item.id, item);
  }

  // Nếu file chính khác /tmp/rsvp.json, kiểm tra xem có bản ghi nào trong /tmp không
  if (primaryFile !== tmpDataFile) {
    const tmpRecords = await readFileSafely(tmpDataFile);
    for (const item of tmpRecords) {
      if (item?.id) recordMap.set(item.id, item);
    }
  }

  // Đọc thêm từ file default nếu đang ở Vercel (chứa dữ liệu build-time ban đầu)
  if (primaryFile !== defaultDataFile) {
    const defaultRecords = await readFileSafely(defaultDataFile);
    for (const item of defaultRecords) {
      if (item?.id && !recordMap.has(item.id)) {
        recordMap.set(item.id, item);
      }
    }
  }

  const allRecords = Array.from(recordMap.values());
  return allRecords.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function appendRsvp(input: RsvpInput): Promise<RsvpRecord> {
  const operation = writeQueue.then(async () => {
    const record: RsvpRecord = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };

    // Đọc tất cả các bản ghi hiện tại
    const records = await readRsvps();
    records.push(record);

    // Cố gắng ghi vào activeDataFile, nếu gặp lỗi EROFS / EACCES thì fallback sang /tmp
    try {
      await writeRecordsToFile(activeDataFile, records);
    } catch (writeError) {
      const code = (writeError as NodeJS.ErrnoException).code;
      if ((code === "EROFS" || code === "EACCES") && activeDataFile !== tmpDataFile) {
        console.warn(`Hệ thống tệp chỉ đọc tại ${activeDataFile}, chuyển hướng lưu sang ${tmpDataFile}`);
        activeDataFile = tmpDataFile;
        await writeRecordsToFile(activeDataFile, records);
      } else {
        throw writeError;
      }
    }

    // Gửi webhook song song nếu có cấu hình (ví dụ Google Sheets)
    const webhookUrl = getWebhookUrl();
    if (webhookUrl) {
      void sendToWebhook(webhookUrl, record);
    }

    return record;
  });

  writeQueue = operation.then(
    () => undefined,
    () => undefined,
  );
  return operation;
}
