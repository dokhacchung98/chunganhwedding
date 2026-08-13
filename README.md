# Thiệp cưới online — Ngọc Ánh & Khắc Chung

Website thiệp cưới mobile-first, được xây dựng bằng Next.js, React và TypeScript. Toàn bộ ảnh đang là placeholder trắng có viền và ghi kích thước đề xuất. RSVP được lưu phía server vào một file JSON tổng hợp.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Để thử cá nhân hóa khách mời:

```text
http://localhost:3000/?guest=Gia%20đình%20Anh%20Minh
```

## Kiểm tra và chạy production

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Ứng dụng cần chạy bằng Node.js để API có thể ghi RSVP. Mặc định dữ liệu được lưu tại `data/rsvp.json`; có thể đổi sang một đường dẫn tuyệt đối bằng biến môi trường `RSVP_DATA_FILE`.

Danh sách phản hồi có tại [http://localhost:3000/kq](http://localhost:3000/kq). Route này được đặt `noindex` nhưng chưa có xác thực, vì vậy nên bổ sung mật khẩu hoặc đăng nhập trước khi công khai website.

## Thay nội dung

- Nội dung, ngày giờ, địa điểm: `src/data/wedding.ts`.
- Màu sắc và layout: `src/app/globals.css`.
- Nhạc nền: `public/audio/hanh-phuc-diu-em.mp3`.
- File lịch: `public/calendar/`.
- Metadata: `src/app/layout.tsx`.
- Dữ liệu RSVP: `data/rsvp.json`.

Trước khi đưa lên production, thay toàn bộ dữ liệu mẫu, QR và số tài khoản; cập nhật `NEXT_PUBLIC_SITE_URL`; cân nhắc đổi `robots` sang cho phép index nếu muốn website xuất hiện trên công cụ tìm kiếm.

Máy chủ production phải có ổ đĩa ghi được và lưu bền vững. Cách lưu file JSON phù hợp với một tiến trình Node.js; nếu triển khai nhiều máy chủ hoặc trên môi trường serverless có filesystem tạm thời, hãy chuyển phần lưu RSVP sang cơ sở dữ liệu.

## Tối ưu hiệu năng đã áp dụng

- Server Components làm mặc định; chỉ Route Handler và trang kết quả chạy động.
- Không dùng thư viện UI, animation, icon hoặc font từ bên thứ ba.
- Chỉ hydrate các component cần tương tác.
- CSS dùng `content-visibility` cho các section bên dưới màn hình đầu.
- Nhạc nền mono bitrate thấp, chỉ bắt đầu tải sau khi khách mở thiệp.
- Map dùng link ngoài, không tải iframe khi mở trang.
- Ảnh thật sau này nên dùng `next/image`, AVIF/WebP và kích thước đúng như placeholder.
