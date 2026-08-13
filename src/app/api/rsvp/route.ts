import { appendRsvp, parseRsvpInput } from "@/lib/rsvp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_SIZE = 20_000;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_SIZE) {
    return Response.json({ message: "Nội dung phản hồi quá dài." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Không thể đọc dữ liệu phản hồi." }, { status: 400 });
  }

  const parsed = parseRsvpInput(payload);
  if (!parsed.success) {
    return Response.json({ message: parsed.message }, { status: 400 });
  }

  try {
    const record = await appendRsvp(parsed.data);
    return Response.json({ ok: true, id: record.id }, { status: 201 });
  } catch {
    return Response.json(
      { message: "Không thể lưu phản hồi lúc này. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
