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
const dataFile = process.env.RSVP_DATA_FILE
  ? path.resolve(process.env.RSVP_DATA_FILE)
  : defaultDataFile;

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
    return { success: false, message: "Vui lòng nhập tên khách mời." };
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
    ? input.event as Exclude<WeddingEventChoice, null>
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

async function readDataFile(): Promise<RsvpRecord[]> {
  try {
    const content = await readFile(dataFile, "utf8");
    const parsed: unknown = JSON.parse(content);

    if (!Array.isArray(parsed)) {
      throw new Error("RSVP data file must contain a JSON array.");
    }

    return parsed as RsvpRecord[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export async function readRsvps() {
  const records = await readDataFile();
  return records.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function appendRsvp(input: RsvpInput): Promise<RsvpRecord> {
  const operation = writeQueue.then(async () => {
    const records = await readDataFile();
    const record: RsvpRecord = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };

    records.push(record);
    await mkdir(path.dirname(dataFile), { recursive: true });

    const temporaryFile = `${dataFile}.${process.pid}.${Date.now()}.tmp`;
    await writeFile(temporaryFile, `${JSON.stringify(records, null, 2)}\n`, "utf8");
    await rename(temporaryFile, dataFile);

    return record;
  });

  writeQueue = operation.then(() => undefined, () => undefined);
  return operation;
}
