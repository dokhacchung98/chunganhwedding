import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { gallery } from "@/data/wedding";

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
          {gallery.map((item, index) => (
            <div
              className={`gallery-grid__item gallery-grid__item--${item.variant}`}
              key={item.id}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <ImagePlaceholder
                width={item.width}
                height={item.height}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
