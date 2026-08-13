import { GuestGreeting } from "@/components/client/GuestGreeting";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { families, siteContent } from "@/data/wedding";

export function InvitationSection() {
  return (
    <section className="section invitation" id="invitation">
      <SectionDecorations variant="lotus" />
      <div className="shell shell--narrow">
        <div className="invitation__mark" data-reveal="scale" aria-hidden="true">囍</div>
        <SectionHeading eyebrow="Trân trọng báo tin" title="Lời mời từ hai gia đình" />

        <div className="families" data-reveal="up">
          {families.map((family) => (
            <div className="family" key={family.label}>
              <span>{family.label}</span>
              {family.parents.map((parent) => <strong key={parent}>{parent}</strong>)}
              <small>{family.hometown}</small>
            </div>
          ))}
        </div>

        <div className="invitation__message" data-reveal="up">
          <p>Trân trọng kính mời</p>
          <GuestGreeting />
          <p>{siteContent.invitation}</p>
        </div>

        <div className="invitation__couple" data-reveal="scale">
          <span className="golden-glow">{siteContent.bride}</span>
          <b>&amp;</b>
          <span className="golden-glow">{siteContent.groom}</span>
        </div>
      </div>
    </section>
  );
}
