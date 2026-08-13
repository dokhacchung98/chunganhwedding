import { FloatingPetals } from "@/components/client/FloatingPetals";
import { WeddingExperience } from "@/components/client/WeddingExperience";
import { ScrollReveal } from "@/components/client/ScrollReveal";
import { FloralDivider } from "@/components/common/FloralDivider";
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
      <FloatingPetals />
      <main>
        <HeroSection />
        <InvitationSection />
        <FloralDivider variant="ornate" />
        <CoupleSection />
        <FloralDivider variant="simple" />
        <EventsSection />
        <CountdownSection />
        <FloralDivider variant="ornate" />
        <StorySection />
        <FloralDivider variant="simple" />
        <GallerySection />
        <RsvpSection />
        <FloralDivider variant="simple" />
        <GiftSection />
      </main>
      <ThankYouSection />
    </>
  );
}
