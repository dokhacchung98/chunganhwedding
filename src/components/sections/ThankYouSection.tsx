import Image from "next/image";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { siteContent } from "@/data/wedding";
import { getExistingImagePath, getImageRealDimensions, isRealImagePortrait } from "@/lib/images";

export function ThankYouSection() {
  const thankYouSrc =
    siteContent.thankYouImage.src ||
    getExistingImagePath(siteContent.thankYouImage.suggestedFileName);

  const realDims = getImageRealDimensions(siteContent.thankYouImage.suggestedFileName);
  const isPortrait = isRealImagePortrait(siteContent.thankYouImage.suggestedFileName);
  const imgWidth = realDims?.width || siteContent.thankYouImage.width || 1440;
  const imgHeight = realDims?.height || siteContent.thankYouImage.height || 900;

  return (
    <footer className="thank-you" id="thank-you">
      <div className="thank-you__inner shell">
        <SectionDecorations variant="petals" className="thank-you__decorations" />

        <div className="thank-you__header" data-reveal="scale">
          <span className="thank-you__eyebrow">Cảm ơn bạn</span>
          <h2 className="thank-you__title">Hẹn gặp nhau trong ngày hạnh phúc</h2>
          <div className="thank-you__names">
            {siteContent.bride} <b>&amp;</b> {siteContent.groom}
          </div>
          <div className="thank-you__bubu-hug" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gifs/bubu-dudu-sseeyall.gif"
              alt="Bubu & Dudu ôm nhau"
              className="bubu-sticker"
              width={76}
              height={76}
            />
          </div>
        </div>

        <div className="thank-you__visual" data-reveal="up">
          {thankYouSrc ? (
            <div
              className={`thank-you__frame ${isPortrait ? "thank-you__frame--portrait" : ""}`}
            >
              <Image
                src={thankYouSrc}
                alt="Hẹn gặp nhau trong ngày hạnh phúc"
                width={imgWidth}
                height={imgHeight}
                className="thank-you__image"
                sizes="(max-width: 768px) 94vw, min(1000px, 90vw)"
              />
            </div>
          ) : (
            <div className="thank-you__placeholder-wrap">
              <ImagePlaceholder
                width={siteContent.thankYouImage.width}
                height={siteContent.thankYouImage.height}
                label={siteContent.thankYouImage.label}
                suggestedFileName={siteContent.thankYouImage.suggestedFileName}
              />
            </div>
          )}
        </div>
      </div>

      <div className="thank-you__bottom">
        <p>Made with love · {siteContent.weddingDate}</p>
        <a href="#top">Về đầu trang ↑</a>
      </div>
    </footer>
  );
}
