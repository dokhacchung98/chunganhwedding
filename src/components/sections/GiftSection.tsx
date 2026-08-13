import { CopyButton } from "@/components/client/CopyButton";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";

export function GiftSection() {
  const giftAccounts = [
    {
      label: "Mừng cưới cô dâu",
      bank: "Ngân hàng Á Châu · ACB",
      owner: "NGỌC ÁNH",
      account: "1234 5678 9999",
      copyValue: "123456789999",
    },
    {
      label: "Mừng cưới chú rể",
      bank: "Ngân hàng Ngoại thương · Vietcombank",
      owner: "KHẮC CHUNG",
      account: "0987 6543 2222",
      copyValue: "098765432222",
    },
  ];

  return (
    <section className="section gift-section" id="gift">
      <SectionDecorations variant="botanical" />
      <div className="shell shell--narrow">
        <SectionHeading
          eyebrow="Gửi lời chúc"
          title="Hộp mừng cưới"
          description="Tình cảm và sự hiện diện của bạn đã là món quà trọn vẹn. Nếu ở xa, bạn có thể gửi lời chúc tại đây."
        />

        <details className="gift-details" data-reveal="up">
          <summary>
            <span aria-hidden="true">♡</span>
            Xem thông tin mừng cưới
          </summary>
          <div className="gift-list">
            {giftAccounts.map((gift) => (
              <article className="gift-card" key={gift.owner}>
                <ImagePlaceholder
                  width={600}
                  height={600}
                  label={`QR ${gift.label.toLowerCase()}`}
                  className="gift-card__qr"
                />
                <div className="gift-card__info">
                  <p className="gift-card__label">{gift.label}</p>
                  <span>{gift.bank}</span>
                  <strong>{gift.owner}</strong>
                  <div className="gift-card__account">
                    <code>{gift.account}</code>
                    <CopyButton value={gift.copyValue} />
                  </div>
                  <small>Thông tin đang là dữ liệu mẫu và sẽ được thay trước khi phát hành.</small>
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
