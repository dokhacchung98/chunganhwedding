import { WeddingExperience } from "@/components/client/WeddingExperience";
import { ScrollReveal } from "@/components/client/ScrollReveal";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { CoupleSection } from "@/components/sections/CoupleSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { GiftSection } from "@/components/sections/GiftSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InvitationGate } from "@/components/sections/InvitationGate";
import { InvitationSection } from "@/components/sections/InvitationSection";
import { RsvpSection } from "@/components/sections/RsvpSection";
import { StorySection } from "@/components/sections/StorySection";
import { ThankYouSection } from "@/components/sections/ThankYouSection";
import { siteContent } from "@/data/wedding";

export default function HomePage() {
  return (
    <>
      <InvitationGate />
      <WeddingExperience audioSrc={siteContent.audio.src} audioTitle={siteContent.audio.title} />
      <ScrollReveal />
      <main>
        <HeroSection />
        <InvitationSection />
        <CoupleSection />
        <EventsSection />
        <CountdownSection />
        <StorySection />
        <GallerySection />
        <RsvpSection />
        <GiftSection />
      </main>
      <ThankYouSection />
    </>
  );
}
