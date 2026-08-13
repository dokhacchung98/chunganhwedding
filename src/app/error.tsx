"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="not-found" role="alert">
      <span aria-hidden="true">囍</span>
      <h1>Thiệp đang tạm gián đoạn</h1>
      <p>Vui lòng thử tải lại nội dung.</p>
      <button className="button button--primary" type="button" onClick={reset}>Thử lại</button>
    </main>
  );
}
