export type Person = {
  name: string;
  role: "Cô dâu" | "Chú rể";
  bio: string;
  image: {
    width: number;
    height: number;
  };
};

export type Family = {
  label: string;
  parents: string[];
  hometown: string;
};

export type WeddingEvent = {
  id: string;
  eyebrow: string;
  title: string;
  dateLabel: string;
  day: string;
  month: string;
  year: string;
  time: string;
  guestArrival: string;
  venue: string;
  address: string;
  mapUrl: string;
  calendarUrl: string;
  calendarFile: string;
  tone: "red" | "gold";
};

export type StoryMilestone = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: {
    src?: string;
    alt: string;
    label: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
};

export type GalleryItem = {
  id: number;
  label: string;
  width: number;
  height: number;
  variant: "portrait" | "landscape" | "square";
};
