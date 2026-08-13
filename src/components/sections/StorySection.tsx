import { StoryCarousel } from "@/components/client/StoryCarousel";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { story } from "@/data/wedding";

export function StorySection() {
  return (
    <section className="section story-section" id="story">
      <SectionDecorations variant="botanical" />
      <div className="shell">
        <SectionHeading
          eyebrow="Chuyện chúng mình"
          title="Từ một lời chào đến lời hẹn trăm năm"
          description="Mỗi dấu mốc là một khung hình, cùng ghép nên hành trình chúng mình đã đi qua."
        />
        <StoryCarousel milestones={story} />
      </div>
    </section>
  );
}
