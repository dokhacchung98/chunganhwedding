import type {
  Family,
  GalleryItem,
  Person,
  StoryMilestone,
  WeddingEvent,
} from "@/types/wedding";

export const siteContent = {
  bride: "Ngọc Ánh",
  groom: "Khắc Chung",
  weddingDate: "20 · 09 · 2026",
  weddingDateIso: "2026-09-20T11:00:00+07:00",
  invitation:
    "Tình yêu của chúng mình sẽ trọn vẹn hơn khi có bạn hiện diện và cùng sẻ chia khoảnh khắc đặc biệt này.",
  quote: "Và từ đây, chúng ta gọi nhau là gia đình.",
  audio: {
    src: "/audio/hanh-phuc-diu-em.mp3",
    title: "Hạnh phúc dịu êm — nhạc nền không bản quyền",
  },
};

export const people: Person[] = [
  {
    name: siteContent.bride,
    role: "Cô dâu",
    bio: "Một cô gái yêu hoa, mê những buổi sáng thật chậm và luôn tin rằng điều đẹp nhất là được cùng nhau trưởng thành.",
    image: { width: 900, height: 1200 },
  },
  {
    name: siteContent.groom,
    role: "Chú rể",
    bio: "Một chàng trai điềm tĩnh, thích những chuyến đi xa và may mắn tìm được người muốn cùng mình đi hết mọi hành trình.",
    image: { width: 900, height: 1200 },
  },
];

export const families: Family[] = [
  {
    label: "Nhà gái",
    parents: ["Ông Nguyễn Văn Thành", "Bà Nguyễn Hồng Đại"],
    hometown: "Hà Nội",
  },
  {
    label: "Nhà trai",
    parents: ["Ông Đỗ Khắc Chúc", "Bà Phí Thị Nghị"],
    hometown: "Hà Nội",
  },
];

function createGoogleCalendarUrl(
  title: string,
  dates: string,
  location: string,
) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates,
    details: "Trân trọng kính mời bạn đến chung vui cùng hai gia đình.",
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const brideAddress = "Số 78 thôn Thượng Khê, Kiều Phú, Hà Nội";
const groomAddress = "Số 152 thôn Hương Hạ, Hát Môn, Hà Nội";

const vuQuyCalendar = createGoogleCalendarUrl(
  "Lễ Vu Quy - Ngọc Ánh & Khắc Chung",
  "20260920T020000Z/20260920T040000Z",
  brideAddress,
);

const thanhHonCalendar = createGoogleCalendarUrl(
  "Lễ Thành Hôn - Ngọc Ánh & Khắc Chung",
  "20260920T040000Z/20260920T070000Z",
  groomAddress,
);

export const events: WeddingEvent[] = [
  {
    id: "vu-quy",
    eyebrow: "Tại tư gia nhà gái",
    title: "Lễ Vu Quy",
    dateLabel: "Chủ Nhật, ngày 20 tháng 09 năm 2026",
    day: "20",
    month: "Tháng 09",
    year: "2026",
    time: "09:00",
    guestArrival: "Đón khách từ 08:30",
    venue: "Tư gia nhà gái",
    address: brideAddress,
    mapUrl: "https://maps.app.goo.gl/dmzpcVJyaUhZEWpK7",
    calendarUrl: vuQuyCalendar,
    calendarFile: "/calendar/le-vu-quy.ics",
    tone: "gold",
  },
  {
    id: "thanh-hon",
    eyebrow: "Tiệc cưới thân mật",
    title: "Lễ Thành Hôn",
    dateLabel: "Chủ Nhật, ngày 20 tháng 09 năm 2026",
    day: "20",
    month: "Tháng 09",
    year: "2026",
    time: "11:00",
    guestArrival: "Đón khách từ 10:30",
    venue: "Tư gia nhà trai",
    address: groomAddress,
    mapUrl: "https://maps.app.goo.gl/U74jLgQZJPqyZgKq8",
    calendarUrl: thanhHonCalendar,
    calendarFile: "/calendar/le-thanh-hon.ics",
    tone: "red",
  },
];

export const story: StoryMilestone[] = [
  {
    id: "first-hello",
    year: "2021",
    title: "Lần đầu gặp gỡ",
    description:
      "Một cuộc gặp rất tình cờ, một lời chào còn ngại ngùng, và một câu chuyện dài bắt đầu từ đó.",
    image: {
      alt: "Ngọc Ánh và Khắc Chung trong những ngày đầu gặp gỡ",
      label: "Ảnh lần đầu gặp gỡ",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "growing-together",
    year: "2022",
    title: "Cùng nhau trưởng thành",
    description:
      "Những chuyến đi, những ngày bận rộn và cả những phút yếu lòng đã dạy chúng mình cách luôn chọn nhau.",
    image: {
      alt: "Ngọc Ánh và Khắc Chung cùng nhau trên một chuyến đi",
      label: "Ảnh cùng nhau trưởng thành",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "the-proposal",
    year: "2026",
    title: "Lời hẹn trăm năm",
    description:
      "Giữa một chiều đầy nắng, câu trả lời “Em đồng ý” đã mở ra chương mới đẹp nhất của hai đứa.",
    image: {
      alt: "Khoảnh khắc Ngọc Ánh và Khắc Chung trao lời hẹn trăm năm",
      label: "Ảnh lời hẹn trăm năm",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "our-wedding",
    year: "2026",
    title: "Về chung một nhà",
    description:
      "Chúng mình mong bạn sẽ ở đó, chứng kiến và sẻ chia niềm vui trong ngày đặc biệt này.",
    image: {
      alt: "Ngọc Ánh và Khắc Chung trong bộ ảnh cưới",
      label: "Ảnh về chung một nhà",
      width: 1200,
      height: 1500,
    },
  },
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    label: "Ảnh album dọc",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 2,
    label: "Ảnh album ngang",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 3,
    label: "Ảnh album vuông",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 4,
    label: "Ảnh album dọc",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 5,
    label: "Ảnh album ngang",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 6,
    label: "Ảnh album dọc",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
];
