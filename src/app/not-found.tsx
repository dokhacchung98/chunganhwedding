import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span aria-hidden="true">囍</span>
      <h1>Không tìm thấy trang</h1>
      <p>Đường dẫn thiệp có thể chưa chính xác.</p>
      <Link className="button button--primary" href="/">Về trang thiệp cưới</Link>
    </main>
  );
}
