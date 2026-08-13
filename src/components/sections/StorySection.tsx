import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionHeading } from "@/components/common/SectionHeading";
import { story } from "@/data/wedding";

export function StorySection() {
  return (
    <section className="section story-section" id="story">
      <div className="shell">
        <div className="story-layout">
          <div className="story-layout__intro">
            <SectionHeading eyebrow="Chuyện chúng mình" title="Từ một lời chào đến lời hẹn trăm năm" align="left" />
            <ImagePlaceholder width={1200} height={800} label="Ảnh câu chuyện" />
          </div>

          <div className="timeline">
            {story.map((item, index) => (
              <article className="timeline-item" key={`${item.year}-${item.title}`}>
                <div className="timeline-item__marker" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <div className="timeline-item__copy">
                  <time>{item.year}</time>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
