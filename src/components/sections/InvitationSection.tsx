import { GuestGreeting } from "@/components/client/GuestGreeting";
import { SectionHeading } from "@/components/common/SectionHeading";
import { families, siteContent } from "@/data/wedding";

export function InvitationSection() {
  return (
    <section className="section invitation" id="invitation">
      <div className="shell shell--narrow">
        <div className="invitation__mark" aria-hidden="true">囍</div>
        <SectionHeading eyebrow="Trân trọng báo tin" title="Lời mời từ hai gia đình" />

        <div className="families">
          {families.map((family) => (
            <div className="family" key={family.label}>
              <span>{family.label}</span>
              {family.parents.map((parent) => <strong key={parent}>{parent}</strong>)}
              <small>{family.hometown}</small>
            </div>
          ))}
        </div>

        <div className="invitation__message">
          <p>Trân trọng kính mời</p>
          <GuestGreeting />
          <p>{siteContent.invitation}</p>
        </div>

        <div className="invitation__couple">
          <span>{siteContent.bride}</span>
          <b>&amp;</b>
          <span>{siteContent.groom}</span>
        </div>
      </div>
    </section>
  );
}
