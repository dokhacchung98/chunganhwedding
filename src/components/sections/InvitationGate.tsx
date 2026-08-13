import { GuestGreeting } from "@/components/client/GuestGreeting";
import { siteContent } from "@/data/wedding";

export function InvitationGate() {
  return (
    <div className="invitation-gate" id="invitation-gate">
      <div className="gate-pattern" aria-hidden="true" />
      <div className="gate-card">
        <span className="gate-card__top">Trân trọng kính mời</span>
        <GuestGreeting className="gate-card__guest" />
        <span className="gate-card__line" aria-hidden="true" />
        <span className="gate-card__mark" aria-hidden="true">
          囍
        </span>
        <p>đến chung vui trong ngày thành hôn của</p>
        <h1>
          {siteContent.bride} &amp; {siteContent.groom}
        </h1>
        <time>{siteContent.weddingDate}</time>
        <button
          className="button button--primary gate-card__button"
          id="open-invitation"
          type="button"
        >
          <span>Mở thiệp</span>
          <span className="gate-card__button-arrow" aria-hidden="true">
            →
          </span>
        </button>
        <small>Chạm để mở thiệp</small>
      </div>
    </div>
  );
}
