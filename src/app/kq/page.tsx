import type { Metadata } from "next";
import Link from "next/link";
import { readRsvps, type RsvpRecord } from "@/lib/rsvp-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Kết quả RSVP | Ngọc Ánh & Khắc Chung",
  description: "Danh sách phản hồi tham dự lễ cưới.",
  robots: { index: false, follow: false },
};

const eventLabels: Record<NonNullable<RsvpRecord["event"]>, string> = {
  "vu-quy": "Lễ Vu Quy",
  "thanh-hon": "Lễ Thành Hôn",
  both: "Cả hai sự kiện",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(value));
}

export default async function ResultsPage() {
  const records = await readRsvps();
  const attending = records.filter((record) => record.attendance === "yes");
  const declined = records.length - attending.length;
  const totalGuests = attending.reduce((sum, record) => sum + record.companions, 0);

  return (
    <main className="results-page">
      <div className="results-shell">
        <header className="results-header">
          <div>
            <span className="eyebrow">Ngọc Ánh &amp; Khắc Chung</span>
            <h1>Kết quả xác nhận tham dự</h1>
            <p>Dữ liệu được đọc trực tiếp từ file JSON tổng hợp.</p>
          </div>
          <Link className="button button--outline" href="/">← Về trang thiệp</Link>
        </header>

        <section className="results-stats" aria-label="Tổng quan RSVP">
          <article><span>Phản hồi</span><strong>{records.length}</strong></article>
          <article><span>Sẽ tham dự</span><strong>{attending.length}</strong></article>
          <article><span>Tổng số khách</span><strong>{totalGuests}</strong></article>
          <article><span>Không tham dự</span><strong>{declined}</strong></article>
        </section>

        <section className="results-card" aria-labelledby="results-list-title">
          <div className="results-card__head">
            <h2 id="results-list-title">Danh sách phản hồi</h2>
            <span>{records.length} bản ghi</span>
          </div>

          {records.length === 0 ? (
            <div className="results-empty">
              <span aria-hidden="true">♡</span>
              <h3>Chưa có phản hồi nào</h3>
              <p>Các phản hồi gửi từ form RSVP sẽ xuất hiện tại đây.</p>
            </div>
          ) : (
            <div className="results-table-wrap">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Khách mời</th>
                    <th>Tham dự</th>
                    <th>Sự kiện</th>
                    <th>Số người</th>
                    <th>Lời nhắn</th>
                    <th>Thời gian gửi</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.id}>
                      <td><strong>{record.name}</strong></td>
                      <td>
                        <span className={`status status--${record.attendance}`}>
                          {record.attendance === "yes" ? "Có" : "Không"}
                        </span>
                      </td>
                      <td>{record.event ? eventLabels[record.event] : "—"}</td>
                      <td>{record.companions || "—"}</td>
                      <td className="results-table__message">{record.message || "—"}</td>
                      <td><time dateTime={record.createdAt}>{formatDate(record.createdAt)}</time></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
