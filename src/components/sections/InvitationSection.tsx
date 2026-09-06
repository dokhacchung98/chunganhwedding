import { GuestGreeting } from "@/components/client/GuestGreeting";
import { CarIcon, PinIcon } from "@/components/common/Icons";
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
              <small>{family.address || family.hometown}</small>

              <div className="family__actions">
                {family.mapUrl && (
                  <a
                    className="button button--outline button--sm"
                    href={family.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Chỉ đường ${family.label.toLowerCase()}`}
                  >
                    <PinIcon size={16} />
                    <span>Chỉ đường {family.label.toLowerCase()}</span>
                  </a>
                )}
                {family.carRegisterUrl && family.carRegisterUrl !== "#" && (
                  <a
                    className="button button--soft button--sm"
                    href={family.carRegisterUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Đăng ký xe ${family.label.toLowerCase()}`}
                  >
                    <CarIcon size={16} />
                    <span>Đăng ký xe</span>
                  </a>
                )}
              </div>
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
