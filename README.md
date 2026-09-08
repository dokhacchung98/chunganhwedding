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

Ứng dụng hỗ trợ hai cơ chế lưu trữ RSVP & lời chúc:
- **Mặc định / Cục bộ**: Lưu tại `data/rsvp.json` (hoặc `/tmp/rsvp.json` khi chạy trên Vercel/serverless).
- **Đồng bộ Google Sheets (Khuyên dùng khi deploy Vercel)**: Cấu hình biến môi trường `RSVP_WEBHOOK_URL` trên Vercel trỏ tới Web App của Google Apps Script (xem file `scripts/google-sheets-rsvp.js`). Toàn bộ lời chúc và danh sách tham dự sẽ tự động được ghi vào Google Sheet của bạn trong thời gian thực.

Danh sách phản hồi có tại [http://localhost:3000/kq](http://localhost:3000/kq). Route này được đặt `noindex` nhưng chưa có xác thực, vì vậy nên bổ sung mật khẩu hoặc đăng nhập trước khi công khai website.

## Thay nội dung

- Nội dung, ngày giờ, địa điểm: `src/data/wedding.ts`.
- Ảnh theo từng mốc trong carousel câu chuyện: thêm `src`, `alt` và `objectPosition` (nếu cần) vào `story[].image` trong `src/data/wedding.ts`; đặt ảnh tại `public/images/story/` và dùng đường dẫn dạng `/images/story/ten-anh.jpg`.
- Màu sắc và layout: `src/app/globals.css`.
- Nhạc nền: `public/audio/hanh-phuc-diu-em.mp3`.
- File lịch: `public/calendar/`.
- Metadata: `src/app/layout.tsx`.
- Dữ liệu RSVP: `data/rsvp.json` hoặc cấu hình Google Sheets webhook.

## Tối ưu hiệu năng đã áp dụng

- Server Components làm mặc định; chỉ Route Handler và trang kết quả chạy động.
- Không dùng thư viện UI, animation, icon hoặc font từ bên thứ ba.
- Chỉ hydrate các component cần tương tác.
- CSS dùng `content-visibility` cho các section bên dưới màn hình đầu.
- Nhạc nền mono bitrate thấp, chỉ bắt đầu tải sau khi khách mở thiệp.
- Map dùng link ngoài, không tải iframe khi mở trang.
- Ảnh thật sau này nên dùng `next/image`, AVIF/WebP và kích thước đúng như placeholder.
