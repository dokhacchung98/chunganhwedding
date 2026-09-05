import Image from "next/image";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { siteContent } from "@/data/wedding";
import { getExistingImagePath } from "@/lib/images";

export function ThankYouSection() {
  const thankYouSrc =
    siteContent.thankYouImage.src ||
    getExistingImagePath(siteContent.thankYouImage.suggestedFileName);

  return (
    <footer className="thank-you">
      <div className="thank-you__visual">
        {thankYouSrc ? (
          <div className="thank-you__image-wrap">
            <Image
              src={thankYouSrc}
              alt="Hẹn gặp nhau trong ngày hạnh phúc"
              fill
              className="thank-you__image"
              sizes="100vw"
            />
          </div>
        ) : (
          <ImagePlaceholder
            width={siteContent.thankYouImage.width}
            height={siteContent.thankYouImage.height}
            label={siteContent.thankYouImage.label}
            suggestedFileName={siteContent.thankYouImage.suggestedFileName}
          />
        )}
        <SectionDecorations variant="petals" />
        <div className="thank-you__overlay" data-reveal="scale">
          <span>Cảm ơn bạn</span>
          <h2>Hẹn gặp nhau trong ngày hạnh phúc</h2>
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
      </div>
      <div className="thank-you__bottom">
        <p>Made with love · {siteContent.weddingDate}</p>
        <a href="#top">Về đầu trang ↑</a>
      </div>
    </footer>
  );
}
