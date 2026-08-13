import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { siteContent } from "@/data/wedding";

export function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="hero__pattern hero__pattern--left" aria-hidden="true" />
      <div className="hero__pattern hero__pattern--right" aria-hidden="true" />
      <SectionDecorations variant="petals" className="hero__decorations" />
      <div className="hero__content shell">
        <div className="hero__copy">
          <p className="eyebrow">Save the date</p>
          <div className="hero__names" aria-label={`${siteContent.bride} và ${siteContent.groom}`}>
            <span>{siteContent.bride}</span>
            <b aria-hidden="true">&amp;</b>
            <span>{siteContent.groom}</span>
          </div>
          <div className="hero__date">
            <span>Chủ nhật</span>
            <strong>{siteContent.weddingDate}</strong>
            <span>Hà Nội</span>
          </div>
          <p className="hero__intro">We are getting married</p>
        </div>

        <div className="hero__visual">
          <span className="hero__seal" aria-hidden="true">囍</span>
          <div className="hero__frame">
            <ImagePlaceholder
              width={1440}
              height={960}
              label="Ảnh bìa"
              className="hero__placeholder"
              priority
            />
          </div>
          <span className="hero__caption">Two hearts · One home</span>
        </div>
      </div>
      <a className="scroll-cue" href="#invitation" aria-label="Cuộn đến lời mời">
        <span />
      </a>
    </header>
  );
}
