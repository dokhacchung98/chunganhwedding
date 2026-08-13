import { Countdown } from "@/components/client/Countdown";
import { siteContent } from "@/data/wedding";

export function CountdownSection() {
  return (
    <section className="countdown-section" aria-labelledby="countdown-title">
      <div className="countdown-section__pattern" aria-hidden="true" />
      <div className="shell shell--narrow countdown-section__content">
        <span className="eyebrow eyebrow--light">Cùng đếm ngược</span>
        <h2 id="countdown-title">Chờ ngày mình về chung một nhà</h2>
        <Countdown target={siteContent.weddingDateIso} />
        <p>{siteContent.weddingDate} · Hà Nội</p>
      </div>
    </section>
  );
}
