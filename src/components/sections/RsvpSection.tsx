import { RsvpForm } from "@/components/client/RsvpForm";
import { SectionHeading } from "@/components/common/SectionHeading";

export function RsvpSection() {
  return (
    <section className="section rsvp-section" id="rsvp">
      <div className="rsvp-section__ornament rsvp-section__ornament--left" aria-hidden="true" />
      <div className="rsvp-section__ornament rsvp-section__ornament--right" aria-hidden="true" />
      <div className="shell shell--form">
        <SectionHeading
          eyebrow="Hồi âm"
          title="Bạn sẽ đến chung vui chứ?"
          description="Vui lòng xác nhận trước ngày 10.09.2026 để chúng mình có thể đón tiếp bạn thật chu đáo."
        />
        <RsvpForm />
      </div>
    </section>
  );
}
