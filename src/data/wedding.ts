import type {
  Family,
  GalleryItem,
  Person,
  SiteContent,
  StoryMilestone,
  WeddingEvent,
} from "@/types/wedding";

export const siteContent: SiteContent = {
  bride: "Ngọc Ánh",
  groom: "Khắc Chung",
  weddingDate: "20 · 09 · 2026",
  weddingDateIso: "2026-09-20T11:00:00+07:00",
  invitation:
    "Tình yêu của chúng mình sẽ trọn vẹn hơn khi có bạn hiện diện và cùng sẻ chia khoảnh khắc đặc biệt này.",
  quote: "Và từ đây, chúng ta gọi nhau là gia đình.",
  audio: {
    src: "/audio/bainayhayhonbaikiafinal.mp3",
    title: "Bài này hay hơn mà",
  },
  heroImage: {
    width: 1440,
    height: 960,
    label: "Ảnh bìa chính (Hero)",
    suggestedFileName: "public/images/herro.jpg",
  },
  thankYouImage: {
    width: 1440,
    height: 900,
    label: "Ảnh kết trang (Cảm ơn)",
    suggestedFileName: "public/images/thank2.jpg",
  },
};

export const people: Person[] = [
  {
    name: siteContent.bride,
    role: "Cô dâu",
    bio: "Một cô gái yêu hoa, mê những buổi sáng thật chậm và luôn tin rằng điều đẹp nhất là được cùng nhau trưởng thành.",
    image: {
      width: 900,
      height: 1200,
      suggestedFileName: "public/images/co-dau.jpg",
    },
  },
  {
    name: siteContent.groom,
    role: "Chú rể",
    bio: "Một chàng trai điềm tĩnh, thích những chuyến đi xa và may mắn tìm được người muốn cùng mình đi hết mọi hành trình.",
    image: {
      width: 900,
      height: 1200,
      suggestedFileName: "public/images/chu-re.jpg",
    },
  },
];

const brideAddress = "Số 78 thôn Thượng Khê, Kiều Phú, Hà Nội";
const groomAddress = "Số 152 thôn Hương Hạ, Hát Môn, Hà Nội";

export const families: Family[] = [
  {
    label: "Nhà gái",
    parents: ["Ông Nguyễn Văn Thành", "Bà Nguyễn Hồng Đại"],
    hometown: "Hà Nội",
    address: brideAddress,
    mapUrl: "https://maps.app.goo.gl/dmzpcVJyaUhZEWpK7",
    carRegisterUrl:
      "https://docs.google.com/spreadsheets/d/1_6Td2v4XzlSK1tVL4I0YNTIhUnDqYs0oWi_hWAsaWGA/edit?usp=sharing",
  },
  {
    label: "Nhà trai",
    parents: ["Ông Đỗ Khắc Chúc", "Bà Phí Thị Nghị"],
    hometown: "Hà Nội",
    address: groomAddress,
    mapUrl: "https://maps.app.goo.gl/U74jLgQZJPqyZgKq8",
    carRegisterUrl:
      "https://docs.google.com/spreadsheets/d/1dHBJbSlxejyS1Oalr_M2GsUYI_S2Ilj053VdPeACsic/edit?usp=sharing",
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
    time: "13:00",
    guestArrival: "Đón khách từ 08:30",
    intimateMeal: {
      title: "Bữa cơm thân mật",
      time: "16:00",
      date: "Thứ Bảy, 19/09/2026",
    },
    venue: "Tư gia nhà gái",
    address: brideAddress,
    mapUrl: "https://maps.app.goo.gl/dmzpcVJyaUhZEWpK7",
    calendarUrl: vuQuyCalendar,
    calendarFile: "/calendar/le-vu-quy.ics",
    carRegisterUrl:
      "https://docs.google.com/spreadsheets/d/1_6Td2v4XzlSK1tVL4I0YNTIhUnDqYs0oWi_hWAsaWGA/edit?usp=sharing",
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
    time: "14:30",
    guestArrival: "Đón khách từ 10:30",
    intimateMeal: {
      title: "Bữa cơm thân mật",
      time: "16:00",
      date: "Thứ Bảy, 19/09/2026",
    },
    venue: "Tư gia nhà trai",
    address: groomAddress,
    mapUrl: "https://maps.app.goo.gl/U74jLgQZJPqyZgKq8",
    calendarUrl: thanhHonCalendar,
    calendarFile: "/calendar/le-thanh-hon.ics",
    carRegisterUrl:
      "https://docs.google.com/spreadsheets/d/1dHBJbSlxejyS1Oalr_M2GsUYI_S2Ilj053VdPeACsic/edit?usp=sharing",
    tone: "red",
  },
];

export const story: StoryMilestone[] = [
  {
    id: "first-hello",
    year: "2022",
    title: "Lần đầu gặp gỡ",
    description:
      "Một cuộc gặp rất tình cờ, một lời chào còn ngại ngùng, và một câu chuyện dài bắt đầu từ đó.",
    image: {
      alt: "Ngọc Ánh và Khắc Chung trong những ngày đầu gặp gỡ",
      label: "Kỷ niệm lần đầu gặp gỡ",
      suggestedFileName: "public/images/story-01.jpg",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "first-date",
    year: "2023",
    title: "Lần đầu hẹn hò",
    description: "Lần đầu hẹn hò, và mình đã tìm thấy một nửa còn lại của đời mình",
    image: {
      alt: "Ngọc Ánh và Khắc Chung cùng nhau trên một chuyến đi",
      label: "Kỷ niệm cùng nhau trưởng thành",
      suggestedFileName: "public/images/story003.png",
      width: 1200,
      height: 1500,
    },
  },
  {
    id: "growing-together",
    year: "2024",
    title: "Cùng nhau trưởng thành",
    description:
      "Những chuyến đi, những ngày bận rộn và cả những phút yếu lòng đã dạy chúng mình cách luôn chọn nhau.",
    image: {
      alt: "Ngọc Ánh và Khắc Chung cùng nhau trên một chuyến đi",
      label: "Kỷ niệm cùng nhau trưởng thành",
      suggestedFileName: "public/images/story-02.jpg",
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
      label: "Kỷ niệm lời hẹn trăm năm",
      suggestedFileName: "public/images/story-032.jpg",
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
      label: "Kỷ niệm về chung một nhà",
      suggestedFileName: "public/images/story-04.jpg",
      width: 1200,
      height: 1500,
    },
  },
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    label: "Album #01 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-01.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 2,
    label: "Album #02 · Ảnh ngang lớn",
    suggestedFileName: "public/images/gallery-02.jpg",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 3,
    label: "Album #03 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-03.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 4,
    label: "Album #04 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-04.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 5,
    label: "Album #05 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-05.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 6,
    label: "Album #06 · Ảnh ngang lớn",
    suggestedFileName: "public/images/gallery-06.jpg",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 7,
    label: "Album #07 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-07.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 8,
    label: "Album #08 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-08.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 9,
    label: "Album #09 · Ảnh ngang lớn",
    suggestedFileName: "public/images/gallery-09.jpg",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 10,
    label: "Album #10 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-10.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 11,
    label: "Album #11 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-11.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 12,
    label: "Album #12 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-12.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 13,
    label: "Album #13 · Ảnh ngang lớn",
    suggestedFileName: "public/images/gallery-13.jpg",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 14,
    label: "Album #14 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-14.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 15,
    label: "Album #15 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-15.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 16,
    label: "Album #16 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-16.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 17,
    label: "Album #17 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-17.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 18,
    label: "Album #18 · Ảnh ngang lớn",
    suggestedFileName: "public/images/gallery-18.jpg",
    width: 1200,
    height: 800,
    variant: "landscape",
  },
  {
    id: 19,
    label: "Album #19 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-19.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 20,
    label: "Album #20 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-20.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 21,
    label: "Album #21 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-21.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 22,
    label: "Album #22 · Ảnh vuông",
    suggestedFileName: "public/images/gallery-22.jpg",
    width: 900,
    height: 900,
    variant: "square",
  },
  {
    id: 23,
    label: "Album #23 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-23.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 24,
    label: "Album #24 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-24.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
  {
    id: 25,
    label: "Album #25 · Ảnh dọc",
    suggestedFileName: "public/images/gallery-25.jpg",
    width: 800,
    height: 1000,
    variant: "portrait",
  },
];
