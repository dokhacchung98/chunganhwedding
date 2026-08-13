import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { siteContent } from "@/data/wedding";

export function ThankYouSection() {
  return (
    <footer className="thank-you">
      <div className="thank-you__visual">
        <ImagePlaceholder width={1440} height={900} label="Ảnh kết trang" />
        <div className="thank-you__overlay">
          <span>Cảm ơn bạn</span>
          <h2>Hẹn gặp nhau trong ngày hạnh phúc</h2>
          <div className="thank-you__names">
            {siteContent.bride} <b>&amp;</b> {siteContent.groom}
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
