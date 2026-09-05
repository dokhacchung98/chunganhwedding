import Image from "next/image";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { gallery } from "@/data/wedding";
import { getExistingImagePath, isRealImagePortrait } from "@/lib/images";

export function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <SectionDecorations variant="petals" />
      <div className="shell">
        <SectionHeading
          eyebrow="Khoảnh khắc"
          title="Album của chúng mình"
          description="Mỗi khung hình là một mảnh nhỏ trong câu chuyện mà chúng mình luôn muốn nhớ."
        />
        <div className="gallery-grid">
          {gallery.map((item, index) => {
            const imageSrc =
              item.src ||
              (item.suggestedFileName
                ? getExistingImagePath(item.suggestedFileName)
                : null);

            // Nếu khung ảnh là dạng ngang (landscape) mà ảnh thật là ảnh dọc,
            // đẩy phần view lên trên thêm 1 nửa (object-position: center 25%)
            const isRealPortrait = item.suggestedFileName
              ? isRealImagePortrait(item.suggestedFileName)
              : false;
            const isLandscapeSlot = item.variant === "landscape";
            const shouldShiftUp = isLandscapeSlot && isRealPortrait;
            const objectPosition =
              item.objectPosition || (shouldShiftUp ? "center 25%" : undefined);

            return (
              <div
                className={`gallery-grid__item gallery-grid__item--${item.variant}`}
                key={item.id}
                data-reveal="up"
                style={
                  {
                    "--reveal-delay": `${Math.min(index * 50, 500)}ms`,
                  } as React.CSSProperties
                }
              >
                {imageSrc ? (
                  <div
                    className="gallery-grid__image-wrap"
                    style={{ aspectRatio: `${item.width} / ${item.height}` }}
                  >
                    <Image
                      src={imageSrc}
                      alt={item.label}
                      width={item.width}
                      height={item.height}
                      className={`gallery-grid__image ${shouldShiftUp ? "gallery-grid__image--shift-up" : ""}`}
                      style={objectPosition ? { objectPosition } : undefined}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    width={item.width}
                    height={item.height}
                    label={item.label}
                    suggestedFileName={item.suggestedFileName}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
