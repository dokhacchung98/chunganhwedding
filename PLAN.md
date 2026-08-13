# Kế hoạch dự án thiệp cưới online

## 1. Mục tiêu

Xây dựng một website thiệp cưới online mang tinh thần Việt Nam, trang trọng nhưng hiện đại, tối ưu trải nghiệm trên điện thoại và có thể chia sẻ bằng một đường dẫn duy nhất.

Phiên bản đầu tập trung vào một mẫu thiệp hoàn chỉnh với các mục tiêu:

- Truyền tải rõ tên cô dâu, chú rể, gia đình hai bên, thời gian và địa điểm.
- Tôn trọng ngữ cảnh lễ cưới Việt Nam và cho phép tùy biến theo vùng miền.
- Tạo cảm giác “mở thiệp” bằng intro toàn màn hình, chuyển cảnh nhẹ và nhạc nền.
- Cho phép khách xác nhận tham dự (RSVP), mở bản đồ và thêm lịch.
- Dùng placeholder thay cho toàn bộ ảnh trong giai đoạn mockup.
- Dữ liệu nội dung tách khỏi giao diện để dễ đổi tên, lịch, màu sắc và câu chữ.

## 2. Phạm vi phiên bản đầu (MVP)

### Có trong MVP

- Một trang cuộn dọc (single-page wedding invitation).
- Màn hình phong thư/nút “Mở thiệp”.
- Nhạc nền có nút bật/tắt rõ ràng.
- Hero, lời mời, giới thiệu cặp đôi, lịch sự kiện, đếm ngược, câu chuyện, album, RSVP, bản đồ và lời cảm ơn.
- Hai sự kiện độc lập: lễ tại nhà gái và lễ tại nhà trai/tiệc chung.
- Link cá nhân hóa tên khách qua query string, ví dụ `?guest=Gia%20đình%20Anh%20Minh`.
- Responsive cho mobile, tablet và desktop.
- Metadata cơ bản khi chia sẻ link lên mạng xã hội.

### Chưa làm trong MVP

- Trang quản trị nội dung.
- Đăng nhập tài khoản.
- Upload ảnh trực tiếp.
- Thanh toán/mừng cưới trực tuyến.
- Livestream.
- Backend RSVP thật; giai đoạn đầu có thể mock submission hoặc nối dịch vụ lưu dữ liệu ở bước triển khai sau.

## 3. Định hướng văn hóa Việt Nam

Website lấy bối cảnh đám cưới người Kinh hiện đại, có thể cấu hình theo Bắc/Trung/Nam thay vì coi một cách tổ chức là chuẩn duy nhất.

- **Vu Quy**: dùng cho nghi lễ/tiệc phía nhà gái, nhấn mạnh việc gia đình đưa cô dâu về nhà chồng.
- **Thành Hôn**: tên gọi trung tính, phổ biến trên thiệp hoặc sự kiện chung; thường phù hợp phía nhà trai tại miền Bắc.
- **Tân Hôn**: có thể dùng cho lễ đón cô dâu tại nhà trai, phổ biến hơn ở miền Trung và miền Nam.
- **Lễ gia tiên**: có thể xuất hiện trong timeline nếu gia đình muốn công khai lịch; đây là nghi thức cô dâu chú rể trình diện, thắp hương trước bàn thờ gia tiên.
- **Lễ ăn hỏi/đính hôn**: chỉ hiển thị khi gia đình muốn mời khách tham dự; không mặc định đưa mọi nghi lễ nội bộ lên thiệp.
- Thông tin cha mẹ hai bên là tùy chọn và phải cho phép ẩn, thay cách xưng hô hoặc xử lý hoàn cảnh gia đình đặc biệt.
- Trầu cau, song hỷ, hoa sen, chim hạc, áo dài hoặc hoa văn Đông Sơn chỉ nên dùng như họa tiết điểm xuyết, tránh trộn quá nhiều biểu tượng.

Nội dung mẫu cần được gia đình duyệt lần cuối vì cách gọi lễ, thứ tự tên, giờ đón khách và nghi thức khác nhau theo vùng miền, tôn giáo và từng gia đình.

## 4. Concept hình ảnh

### Phong cách đề xuất

**“Hỷ Việt đương đại”**: nền kem ấm, đỏ son làm màu chủ đạo, vàng champagne làm điểm nhấn, chữ nâu đậm. Họa tiết truyền thống được vẽ nét mảnh và dùng tiết chế.

| Token | Giá trị gợi ý | Mục đích |
|---|---:|---|
| `background` | `#FFF9F2` | Nền kem |
| `surface` | `#FFFFFF` | Card và placeholder ảnh |
| `primary` | `#9E2430` | Đỏ hỷ |
| `accent` | `#C69B55` | Vàng champagne |
| `text` | `#332722` | Chữ chính |
| `muted` | `#786A63` | Chữ phụ |
| `border` | `#D8CBC1` | Viền mảnh |

### Chữ

- Tiêu đề/tên cặp đôi: serif thanh lịch, phải hỗ trợ đầy đủ dấu tiếng Việt.
- Nội dung, ngày giờ, nút: sans-serif rõ ràng và dễ đọc trên màn hình nhỏ.
- Chữ viết tay chỉ dùng tối đa ở một câu ngắn; không dùng cho thông tin quan trọng.
- Kích thước chữ nội dung tối thiểu 16px trên mobile.

## 5. Cấu trúc trang và component

| Thứ tự | Khu vực | Nội dung chính | Component dự kiến |
|---:|---|---|---|
| 0 | Mở thiệp | Phong thư, tên khách mời, nút “Mở thiệp” | `InvitationGate` |
| 1 | Điều khiển cố định | Bật/tắt nhạc, trạng thái âm thanh | `MusicControl` |
| 2 | Hero | Tên cô dâu & chú rể, ngày cưới, ảnh bìa | `HeroSection`, `ImagePlaceholder` |
| 3 | Lời ngỏ | Lời mời cá nhân hóa, tên cha mẹ hai bên (tùy chọn) | `InvitationSection`, `FamilyNames` |
| 4 | Cặp đôi | Ảnh và giới thiệu ngắn của mỗi người | `CoupleSection`, `PersonCard` |
| 5 | Sự kiện | Vu Quy, Thành Hôn/Tân Hôn, tiệc cưới | `EventsSection`, `EventCard` |
| 6 | Đếm ngược | Ngày, giờ, phút, giây đến sự kiện chính | `CountdownSection` |
| 7 | Chuyện chúng mình | Các cột mốc quen nhau, cầu hôn, ngày cưới | `LoveStorySection`, `TimelineItem` |
| 8 | Album | Lưới ảnh cưới có lightbox ở bản hoàn thiện | `GallerySection`, `GalleryGrid` |
| 9 | RSVP | Xác nhận tham dự và số người đi cùng | `RsvpSection`, `RsvpForm` |
| 10 | Bản đồ | Địa chỉ từng sự kiện, nút mở Google Maps | `LocationSection`, `LocationCard` |
| 11 | Lịch | Thêm sự kiện vào Google Calendar/tải `.ics` | `CalendarActions` |
| 12 | Mừng cưới | QR/tài khoản, mặc định ẩn và chỉ mở khi người dùng chủ động bấm | `GiftSection` |
| 13 | Kết | Ảnh cuối, lời cảm ơn, tên cặp đôi | `ThankYouSection`, `Footer` |

### Chi tiết nội dung từng khu vực

#### 0. Mở thiệp

- Chiếm toàn màn hình, khóa cuộn trong lúc chưa mở.
- Hiển thị “Trân trọng kính mời” và tên khách nếu URL có `guest`.
- Nút “Mở thiệp” là tương tác đầu tiên để kích hoạt nhạc hợp lệ trên mobile/browser.
- Sau khi mở: hiệu ứng phong thư ngắn 600–900ms, không bắt khách chờ lâu.

#### 1. Hero

- Ảnh bìa tỉ lệ ngang trên desktop và crop dọc trên mobile.
- Tên hai nhân vật là nội dung nổi bật nhất.
- Ngày cưới hiển thị cả dạng dễ đọc và thứ/ngày/tháng/năm.
- Có gợi ý cuộn xuống, nhưng không cần menu điều hướng phức tạp.

#### 2. Lời mời và gia đình hai bên

- Lời mời được cá nhân hóa nếu có tên khách; nếu không có thì dùng “Bạn và gia đình”.
- Hỗ trợ ba cấu hình: hiện đầy đủ cha mẹ, chỉ hiện đại diện gia đình, hoặc ẩn hoàn toàn.
- Không hard-code thứ tự “nhà trai trước/nhà gái trước”; thứ tự lấy từ cấu hình.

#### 3. Sự kiện cưới

Mỗi `EventCard` gồm:

- Tên lễ đúng ngữ cảnh: Vu Quy / Thành Hôn / Tân Hôn / Tiệc Cưới.
- Ngày dương lịch, âm lịch (tùy chọn), giờ làm lễ và giờ đón khách.
- Địa điểm, địa chỉ đầy đủ.
- Dress code (tùy chọn).
- Nút “Xem bản đồ” và “Thêm vào lịch”.

Nếu hai bên tổ chức khác ngày hoặc khác địa điểm, hiển thị hai card độc lập. Khách được dẫn trực tiếp đến sự kiện phù hợp thông qua tham số URL nếu cần.

#### 4. RSVP

Trường dữ liệu đề xuất:

- Tên khách mời.
- Tham dự: Có / Không / Chưa chắc.
- Chọn sự kiện sẽ tham dự.
- Số người đi cùng.
- Yêu cầu ăn uống (tùy chọn).
- Lời nhắn cho cô dâu chú rể.

Sau khi gửi, hiển thị xác nhận ngay trên trang. Form phải có trạng thái loading, thành công và lỗi; chống gửi lặp.

#### 5. Mừng cưới

- Đây là mục tùy chọn, đặt gần cuối trang và không tạo cảm giác bắt buộc.
- Nội dung tài khoản/QR được che mặc định sau nút “Xem thông tin mừng cưới”.
- Có nút sao chép số tài khoản và thông báo đã sao chép.
- Khi dùng dữ liệu thật, không để QR/tài khoản trong repository công khai nếu chủ nhân không đồng ý.

## 6. Quy chuẩn mockup hình ảnh

Trong giai đoạn đầu, **không dùng ảnh thật**. Mọi vị trí ảnh dùng chung component `ImagePlaceholder`:

- Nền trắng `#FFFFFF`.
- Viền 1px solid `#CFCFCF`.
- Không đổ bóng hoặc chỉ dùng bóng rất nhẹ cho card tổng thể.
- Ở giữa ghi rõ kích thước đề xuất, ví dụ `Ảnh bìa · 1440 × 960 px`.
- Text màu xám, căn giữa cả hai chiều.
- Giữ đúng `aspect-ratio` để thay ảnh thật không làm nhảy layout.
- Có thể thêm nhãn nhỏ về crop: `desktop 3:2 · mobile 4:5`.

| Vị trí | Kích thước nguồn đề xuất | Tỉ lệ hiển thị |
|---|---:|---:|
| Hero | 1440 × 960 px | 3:2 desktop, 4:5 mobile |
| Chân dung cô dâu | 900 × 1200 px | 3:4 |
| Chân dung chú rể | 900 × 1200 px | 3:4 |
| Love story | 1200 × 800 px | 3:2 |
| Album dọc | 800 × 1000 px | 4:5 |
| Album ngang | 1200 × 800 px | 3:2 |
| Ảnh kết trang | 1440 × 900 px | 8:5 |
| QR mừng cưới | 600 × 600 px | 1:1 |

API component dự kiến:

```ts
type ImagePlaceholderProps = {
  width: number;
  height: number;
  label: string;
  mobileRatio?: string;
  className?: string;
};
```

## 7. Âm thanh nền

Trình duyệt, đặc biệt trên iOS và Android, thường chặn âm thanh autoplay khi người dùng chưa tương tác. Vì vậy luồng chuẩn là:

1. Website tải ở trạng thái tắt tiếng.
2. Khách bấm “Mở thiệp”.
3. Trong cùng thao tác đó, ứng dụng gọi `audio.play()`.
4. Nút nhạc cố định luôn cho phép pause/play; lưu lựa chọn trong phiên hiện tại.
5. Nếu phát thất bại, trang vẫn mở bình thường và nút nhạc chuyển về trạng thái tắt.

Yêu cầu kỹ thuật:

- Một file nhạc được gia đình có quyền sử dụng; không nhúng nhạc thương mại khi chưa có quyền.
- Nén hợp lý, ưu tiên file khoảng 2–4 MB hoặc stream có kiểm soát.
- `preload="metadata"`, bật lặp (`loop`), âm lượng mặc định khoảng 30–40%.
- Không tự phát lại nếu khách đã chủ động tắt.
- Nút nhạc có nhãn cho screen reader và vùng bấm tối thiểu 44 × 44px.

## 8. Kiến trúc frontend đề xuất

### Công nghệ

- **Next.js + TypeScript**: phù hợp triển khai trang tĩnh, metadata chia sẻ và tối ưu ảnh khi chuyển sang ảnh thật.
- **Tailwind CSS** hoặc CSS Modules: chọn một, không trộn hai hệ thống tùy tiện. Đề xuất Tailwind CSS để dựng nhanh và quản lý responsive nhất quán.
- **Framer Motion**: chỉ dùng cho intro và reveal nhẹ; có thể thay bằng CSS nếu muốn giảm bundle.
- **React Hook Form + Zod**: quản lý và kiểm tra dữ liệu RSVP.
- **Lucide React**: icon điều khiển; họa tiết cưới đặc thù nên là SVG riêng.
- Deploy dự kiến: Vercel hoặc nền tảng hỗ trợ Next.js tương đương.

### Cấu trúc thư mục

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/rsvp/route.ts        # Chỉ thêm khi nối backend
├── components/
│   ├── common/
│   │   ├── ImagePlaceholder.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Ornament.tsx
│   ├── invitation/
│   │   ├── InvitationGate.tsx
│   │   ├── MusicControl.tsx
│   │   └── GuestGreeting.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── InvitationSection.tsx
│   │   ├── CoupleSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── LoveStorySection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── RsvpSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── GiftSection.tsx
│   │   └── ThankYouSection.tsx
│   └── ui/
├── content/
│   └── wedding.ts
├── hooks/
│   ├── useBackgroundMusic.ts
│   └── useCountdown.ts
├── lib/
│   ├── calendar.ts
│   ├── guest.ts
│   └── validation.ts
├── types/
│   └── wedding.ts
└── public/
    ├── audio/
    ├── images/
    └── ornaments/
```

### Nguyên tắc dữ liệu

Toàn bộ nội dung thay đổi thường xuyên đặt trong `content/wedding.ts`, không rải chuỗi text trong component.

```ts
type WeddingEvent = {
  id: string;
  ceremony: "vu-quy" | "thanh-hon" | "tan-hon" | "reception";
  title: string;
  dateTime: string;
  lunarDate?: string;
  guestArrivalTime?: string;
  venue: string;
  address: string;
  mapUrl: string;
  dressCode?: string[];
};

type WeddingContent = {
  couple: { bride: Person; groom: Person };
  families?: { brideSide?: Family; groomSide?: Family };
  mainEventId: string;
  events: WeddingEvent[];
  story: StoryMilestone[];
  gallery: GalleryItem[];
  gift?: GiftInfo;
  audio?: { src: string; title: string };
};
```

## 9. Responsive và chuyển động

- Thiết kế mobile-first với chiều rộng nội dung chính khoảng 360–430px làm mốc kiểm tra đầu tiên.
- Desktop mở rộng khoảng trắng và bố cục hai cột, không phóng chữ/ảnh quá lớn.
- Hero và intro dùng `100svh` để ổn định trên trình duyệt mobile.
- Các card sự kiện xếp một cột trên mobile, hai cột khi đủ rộng.
- Album dùng grid 2 cột trên mobile và 3–4 cột trên desktop.
- Animation chủ yếu là fade/translate 12–24px, thời lượng 300–600ms.
- Tôn trọng `prefers-reduced-motion`: tắt hiệu ứng phong thư phức tạp, parallax và auto-scroll.

## 10. Accessibility, hiệu năng và SEO

### Accessibility

- Độ tương phản chữ đạt WCAG AA.
- Điều hướng được bằng bàn phím; focus ring luôn nhìn thấy.
- Không đưa thông tin quan trọng chỉ bằng màu sắc hoặc icon.
- Form có `label`, mô tả lỗi và thông báo thành công rõ ràng.
- Placeholder dùng `aria-hidden` nếu chỉ mang tính trang trí; ảnh thật phải có `alt` phù hợp.
- Lightbox phải giữ focus, hỗ trợ phím Escape và trả focus về ảnh ban đầu.

### Hiệu năng

- Mục tiêu Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95.
- Ảnh thật về sau dùng WebP/AVIF, khai báo kích thước để tránh layout shift.
- Hero được ưu tiên tải; gallery lazy-load.
- Font tự host hoặc tải tối thiểu số weight cần thiết.
- Không tải map iframe ngay từ đầu; ưu tiên card địa chỉ và nút mở bản đồ.

### SEO và chia sẻ

- Title, description và canonical URL.
- Open Graph image riêng 1200 × 630px.
- Favicon/biểu tượng song hỷ tối giản.
- Nội dung riêng tư: có tùy chọn `noindex`, không hiển thị số điện thoại hoặc tài khoản ngân hàng trong metadata.

## 11. Luồng người dùng chính

```text
Mở link
  → Thấy phong thư + tên khách
  → Bấm “Mở thiệp”
  → Nhạc bắt đầu (nếu trình duyệt cho phép)
  → Xem lời mời và ngày cưới
  → Chọn sự kiện phù hợp
  → Mở bản đồ / thêm lịch
  → Gửi RSVP
  → Xem album và lời cảm ơn
```

## 12. Kế hoạch triển khai

### Giai đoạn 1 — Khởi tạo và nền tảng

- Khởi tạo Next.js, TypeScript, lint/format và hệ thống màu/chữ.
- Tạo `wedding.ts`, type dữ liệu và các component dùng chung.
- Tạo `ImagePlaceholder` đúng quy chuẩn.

**Kết quả:** dự án chạy được, có layout và dữ liệu mẫu tập trung.

### Giai đoạn 2 — Dựng giao diện đầy đủ

- Dựng intro, hero, lời mời, cặp đôi, sự kiện, countdown, story, gallery và footer.
- Hoàn thiện responsive mobile/desktop.
- Thêm chuyển động nhẹ và chế độ reduced motion.

**Kết quả:** toàn bộ website nhìn được bằng placeholder, chưa cần backend.

### Giai đoạn 3 — Tương tác

- Hoàn thiện nhạc nền và nút điều khiển.
- Thêm cá nhân hóa tên khách.
- Tạo Google Maps link, file `.ics` và Google Calendar link.
- Dựng form RSVP với validation và mock submit.

**Kết quả:** mọi luồng chính hoạt động ở frontend.

### Giai đoạn 4 — Dữ liệu thật và tích hợp

- Thay placeholder bằng ảnh đã tối ưu.
- Chọn nơi lưu RSVP (ví dụ Supabase/Google Sheets/API riêng) và nối backend.
- Thêm QR mừng cưới nếu được yêu cầu.
- Hoàn thiện metadata và ảnh chia sẻ.

**Kết quả:** bản có thể gửi cho khách mời.

### Giai đoạn 5 — Kiểm thử và phát hành

- Kiểm thử Chrome, Safari iOS, Chrome Android và desktop.
- Kiểm thử link cá nhân hóa, timezone, đếm ngược, calendar, form và audio.
- Chạy Lighthouse, kiểm tra bàn phím và reduced motion.
- Deploy bản production, cấu hình domain và analytics tối thiểu nếu gia đình đồng ý.

**Kết quả:** website ổn định, có checklist bàn giao.

## 13. Tiêu chí nghiệm thu MVP

- Trang hiển thị tốt từ 320px đến màn hình desktop lớn, không tràn ngang.
- Mọi ảnh đều là placeholder trắng, có border và ghi đúng kích thước ở giữa.
- Nút “Mở thiệp” mở trang và thử phát nhạc; khi autoplay thất bại không gây lỗi trải nghiệm.
- Nút pause/play hoạt động và có nhãn hỗ trợ tiếp cận.
- Tên khách từ URL được decode và hiển thị an toàn, không render HTML tùy ý.
- Hai sự kiện nhà gái/nhà trai hiển thị độc lập, đúng ngày giờ và địa chỉ.
- Countdown dùng đúng múi giờ `Asia/Ho_Chi_Minh`.
- Link bản đồ, Google Calendar và file `.ics` hoạt động.
- RSVP kiểm tra dữ liệu, có trạng thái thành công/lỗi và không gửi lặp.
- `prefers-reduced-motion` được tôn trọng.
- Không có lỗi console nghiêm trọng; Lighthouse đạt mục tiêu đã đặt.

## 14. Nội dung cần chốt trước khi code bản thật

- Tên đầy đủ và cách sắp thứ tự tên cô dâu/chú rể.
- Khu vực/phong tục gia đình chọn: Bắc, Trung, Nam hoặc cấu hình riêng.
- Tên lễ dùng cho từng địa điểm: Vu Quy, Thành Hôn hay Tân Hôn.
- Có hiển thị tên cha mẹ hai bên không.
- Ngày giờ, giờ đón khách, ngày âm lịch, địa chỉ và map link.
- Sự kiện nào là sự kiện chính để đếm ngược.
- Nội dung câu chuyện và lời mời.
- Danh sách kích thước/số lượng ảnh thật.
- Bài nhạc và xác nhận quyền sử dụng.
- Có RSVP thật, mừng cưới/QR và cá nhân hóa tên khách hay không.
- Website công khai hay bật `noindex`/mã truy cập đơn giản.

## 15. Nguồn tham khảo văn hóa

- [VOV5 — Đám cưới của người Kinh](https://vovworld.vn/vi-VN/sac-mau-cac-dan-toc-viet-nam/dam-cuoi-cua-nguoi-kinh-1117115.vov5): dạm ngõ, ăn hỏi, lễ vật, rước dâu và thắp hương gia tiên.
- [VOV5 — Lễ Công Cô, nét văn hóa của đám cưới người Việt xưa](https://vovworld.vn/vi-VN/sac-mau-cac-dan-toc-viet-nam/le-cong-co-net-van-hoa-cua-dam-cuoi-nguoi-viet-xua-2078403.vov5): vai trò của lễ gia tiên tại hai bên gia đình.
- [Vietnam Tourism — Áo dài](https://vietnam.travel/node/1216): áo dài trong nghi lễ cưới truyền thống và ý nghĩa màu đỏ gắn với may mắn, thịnh vượng.
- [Ngôi Sao/VnExpress — Cách sử dụng đúng từ “vu quy”, “thành hôn”](https://ngoisao.vnexpress.net/cach-su-dung-dung-tu-vu-quy-thanh-hon-2979530.html): ngữ cảnh dùng tên lễ ở nhà gái và nhà trai.
- [Thanh Niên — Hôn nhân và những từ liên quan](https://thanhnien.vn/hon-nhan-va-nhung-tu-lien-quan-185240712211403695.htm): nguồn gốc và cách dùng “tân hôn”, “vu quy” trong ngữ cảnh miền Nam.

> Ghi chú: nguồn tham khảo dùng để định hướng nội dung, không thay thế việc xác nhận phong tục cụ thể với hai gia đình.
