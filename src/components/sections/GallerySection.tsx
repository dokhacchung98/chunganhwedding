import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionHeading } from "@/components/common/SectionHeading";
import { gallery } from "@/data/wedding";

export function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="shell">
        <SectionHeading
          eyebrow="Khoảnh khắc"
          title="Album của chúng mình"
          description="Mỗi khung hình là một mảnh nhỏ trong câu chuyện mà chúng mình luôn muốn nhớ."
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
            <ImagePlaceholder
              key={item.id}
              width={item.width}
              height={item.height}
              label={item.label}
              className={`gallery-grid__item gallery-grid__item--${item.variant}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
