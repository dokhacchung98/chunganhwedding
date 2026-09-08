import { CopyButton } from "@/components/client/CopyButton";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import Image from "next/image";

export function GiftSection() {
  const giftAccounts = [
    {
      label: "Mừng cưới cô dâu",
      bank: "Ngân hàng Quân đội · MB Bank",
      owner: "NGUYEN NGOC ANH",
      account: "0964 164 513",
      copyValue: "0964164513",
      pathQR: "/qr_ngoc_anh.png",
    },
    {
      label: "Mừng cưới chú rể",
      bank: "Ngân hàng Quân đội · MB Bank",
      owner: "DO KHAC CHUNG",
      account: "0333 866 555",
      copyValue: "0333866555",
      pathQR: "/qr_khac_chung.png",
    },
  ];

  return (
    <section className="section gift-section" id="gift">
      <SectionDecorations variant="botanical" />
      <div className="shell shell--narrow">
        <SectionHeading
          eyebrow="Gửi lời chúc"
          title="Hộp mừng cưới"
          description="Tình cảm và lời chúc phúc của bạn là món quà trọn vẹn nhất. Bạn có thể gửi lời chúc hoặc gửi quà mừng từ xa tại đây."
        />

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }} data-reveal="up">
          <a href="#rsvp" className="button button--outline button--sm">
            ✉️ Gửi thư chúc mừng đến cô dâu & chú rể
          </a>
        </div>

        <div className="gift-bubu-sticker" data-reveal="up">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gifs/sseeyall-bubu-dudu2.gif"
            alt="Bubu & Dudu cảm ơn"
            className="bubu-sticker"
            width={84}
            height={84}
          />
          <p className="gift-bubu-text">Gửi ngàn trái tim và lời cảm ơn chân thành! ♡</p>
        </div>

        <details className="gift-details" data-reveal="up">
          <summary>
            <span aria-hidden="true">♡</span>
            Xem thông tin mừng cưới
          </summary>
          <div className="gift-list">
            {giftAccounts.map((gift) => (
              <article className="gift-card" key={gift.owner}>
                <Image
                  className="gift-card__qr"
                  src={gift.pathQR}
                  width={600}
                  height={600}
                  alt={`QR ${gift.label.toLowerCase()}`}
                />
                <div className="gift-card__info">
                  <p className="gift-card__label">{gift.label}</p>
                  <span>{gift.bank}</span>
                  <strong>{gift.owner}</strong>
                  <div className="gift-card__account">
                    <code>{gift.account}</code>
                    <CopyButton value={gift.copyValue} />
                  </div>
                  <small>
                    Thông tin đang là dữ liệu mẫu và sẽ được thay trước khi phát
                    hành.
                  </small>
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
