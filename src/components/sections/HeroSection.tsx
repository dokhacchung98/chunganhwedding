import Image from "next/image";
import { GoldSparkles } from "@/components/client/GoldSparkles";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { siteContent } from "@/data/wedding";
import { getExistingImagePath } from "@/lib/images";

export function HeroSection() {
  const heroImageSrc =
    siteContent.heroImage.src ||
    getExistingImagePath(siteContent.heroImage.suggestedFileName);

  return (
    <header className="hero" id="top">
      <div className="hero__pattern hero__pattern--left" aria-hidden="true" />
      <div className="hero__pattern hero__pattern--right" aria-hidden="true" />
      <SectionDecorations variant="petals" className="hero__decorations" />
      <GoldSparkles />
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
            {heroImageSrc ? (
              <div className="hero__image-wrap">
                <Image
                  src={heroImageSrc}
                  alt={`Ảnh cưới ${siteContent.bride} & ${siteContent.groom}`}
                  width={siteContent.heroImage.width}
                  height={siteContent.heroImage.height}
                  className="hero__image"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder
                width={siteContent.heroImage.width}
                height={siteContent.heroImage.height}
                label={siteContent.heroImage.label}
                suggestedFileName={siteContent.heroImage.suggestedFileName}
                className="hero__placeholder"
                priority
              />
            )}
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
