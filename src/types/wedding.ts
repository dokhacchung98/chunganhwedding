export type SiteImage = {
  src?: string;
  width: number;
  height: number;
  label: string;
  suggestedFileName: string;
};

export type SiteContent = {
  bride: string;
  groom: string;
  weddingDate: string;
  weddingDateIso: string;
  invitation: string;
  quote: string;
  audio: {
    src: string;
    title: string;
  };
  heroImage: SiteImage;
  thankYouImage: SiteImage;
};

export type Person = {
  name: string;
  role: "Cô dâu" | "Chú rể";
  bio: string;
  image: {
    src?: string;
    suggestedFileName?: string;
    width: number;
    height: number;
  };
};

export type Family = {
  label: string;
  parents: string[];
  hometown: string;
  address?: string;
  mapUrl?: string;
  carRegisterUrl?: string;
};

export type IntimateMeal = {
  title?: string;
  time: string;
  date: string;
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
  intimateMeal?: IntimateMeal | string;
  venue: string;
  address: string;
  mapUrl: string;
  calendarUrl?: string;
  calendarFile?: string;
  carRegisterUrl?: string;
  tone: "red" | "gold";
};

export type StoryMilestone = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: {
    src?: string;
    suggestedFileName?: string;
    alt: string;
    label: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
};

export type GalleryItem = {
  id: number;
  src?: string;
  suggestedFileName?: string;
  label: string;
  width: number;
  height: number;
  variant: "portrait" | "landscape" | "square";
  objectPosition?: string;
};
