import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { people } from "@/data/wedding";

export function CoupleSection() {
  return (
    <section className="section couple-section" id="couple">
      <SectionDecorations variant="botanical" />
      <div className="shell">
        <SectionHeading
          eyebrow="Chúng mình"
          title="Hai người, một hành trình"
          description="Từ hai câu chuyện riêng, chúng mình đã tìm thấy một mái nhà chung."
        />

        <div className="couple-grid">
          {people.map((person, index) => (
            <article
              className={`person-card person-card--${index === 0 ? "bride" : "groom"}`}
              key={person.name}
              data-reveal={index === 0 ? "left" : "right"}
            >
              <div className="person-card__visual">
                <span className="person-card__number" aria-hidden="true">0{index + 1}</span>
                <ImagePlaceholder
                  width={person.image.width}
                  height={person.image.height}
                  label={`Chân dung ${person.role.toLowerCase()}`}
                />
              </div>
              <div className="person-card__copy">
                <span>{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
