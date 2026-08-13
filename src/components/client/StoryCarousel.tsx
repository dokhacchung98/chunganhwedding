"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import type { StoryMilestone } from "@/types/wedding";

type StoryCarouselProps = {
  milestones: StoryMilestone[];
};

export function StoryCarousel({ milestones }: StoryCarouselProps) {
  const [requestedIndex, setActiveIndex] = useState(0);
  const activeIndex = Math.min(
    requestedIndex,
    Math.max(milestones.length - 1, 0),
  );
  const viewportRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const timelineButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const programmaticTargetRef = useRef<number | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let animationFrame = 0;
    let scrollEndTimer = 0;

    function updateActiveSlide() {
      const currentViewport = viewportRef.current;
      if (!currentViewport) return;

      const nextIndex = slideRefs.current.reduce((closestIndex, slide, index) => {
        const closestSlide = slideRefs.current[closestIndex];
        if (!slide || !closestSlide) return closestIndex;

        const distance = Math.abs(slide.offsetLeft - currentViewport.scrollLeft);
        const closestDistance = Math.abs(
          closestSlide.offsetLeft - currentViewport.scrollLeft,
        );

        return distance < closestDistance ? index : closestIndex;
      }, 0);

      setActiveIndex(nextIndex);
    }

    function handleScroll() {
      if (programmaticTargetRef.current !== null) {
        window.clearTimeout(scrollEndTimer);
        scrollEndTimer = window.setTimeout(() => {
          programmaticTargetRef.current = null;
          updateActiveSlide();
        }, 140);
        return;
      }

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSlide);
    }

    viewport.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(scrollEndTimer);
    };
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;
    const activeButton = timelineButtonRefs.current[activeIndex];
    if (!timeline || !activeButton || timeline.scrollWidth <= timeline.clientWidth) {
      return;
    }

    const timelineBox = timeline.getBoundingClientRect();
    const buttonBox = activeButton.getBoundingClientRect();
    const left =
      timeline.scrollLeft +
      buttonBox.left -
      timelineBox.left -
      timeline.clientWidth / 2 +
      buttonBox.width / 2;
    timeline.scrollTo({ left });
  }, [activeIndex]);

  function goToSlide(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), milestones.length - 1);
    const viewport = viewportRef.current;
    const slide = slideRefs.current[nextIndex];

    setActiveIndex(nextIndex);
    if (viewport && slide) {
      if (Math.abs(viewport.scrollLeft - slide.offsetLeft) < 1) return;
      programmaticTargetRef.current = nextIndex;
      viewport.scrollTo({ left: slide.offsetLeft });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSlide(milestones.length - 1);
    }
  }

  if (milestones.length === 0) return null;

  const activeMilestone = milestones[activeIndex];
  const progress = `${((activeIndex + 1) / milestones.length) * 100}%`;

  return (
    <div
      className="story-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hành trình tình yêu"
      onKeyDown={handleKeyDown}
      style={{ "--story-progress": progress } as CSSProperties}
    >
      <div className="story-carousel__visual" data-reveal="left">
        <span className="story-carousel__chapter" aria-hidden="true">
          Chương {String(activeIndex + 1).padStart(2, "0")}
        </span>

        <div
          className="story-carousel__viewport"
          id="story-carousel-viewport"
          ref={viewportRef}
          tabIndex={0}
          aria-label="Các ảnh trong câu chuyện. Vuốt hoặc dùng phím mũi tên để chuyển ảnh."
        >
          <div className="story-carousel__rail">
            {milestones.map((item, index) => (
              <article
                className={`story-slide ${index === activeIndex ? "is-active" : ""}`}
                id={`story-slide-${item.id}`}
                key={item.id}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${milestones.length} — ${item.title}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="story-slide__frame">
                  <div className="story-slide__media">
                    {item.image.src ? (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 780px) calc(100vw - 54px), 520px"
                        style={{ objectPosition: item.image.objectPosition ?? "center" }}
                      />
                    ) : (
                      <ImagePlaceholder
                        width={item.image.width}
                        height={item.image.height}
                        label={item.image.label}
                      />
                    )}
                    <span className="story-slide__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="story-slide__caption">
                    <time>{item.year}</time>
                    <span aria-hidden="true">✦</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="story-carousel__controls">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-controls="story-carousel-viewport"
            aria-label="Xem ảnh câu chuyện trước"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="story-carousel__progress" aria-hidden="true">
            <i />
          </div>

          <span className="story-carousel__count" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")}
            <i>/</i>
            {String(milestones.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === milestones.length - 1}
            aria-controls="story-carousel-viewport"
            aria-label="Xem ảnh câu chuyện tiếp theo"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="story-carousel__narrative" data-reveal="right">
        <p className="story-carousel__hint">Chọn một dấu mốc</p>
        <ol className="timeline" ref={timelineRef}>
          {milestones.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li className={`timeline-item ${isActive ? "is-active" : ""}`} key={item.id}>
                <button
                  type="button"
                  onClick={() => goToSlide(index)}
                  ref={(element) => {
                    timelineButtonRefs.current[index] = element;
                  }}
                  aria-controls={`story-slide-${item.id}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span className="timeline-item__marker" aria-hidden="true">
                    <i>{String(index + 1).padStart(2, "0")}</i>
                  </span>
                  <span className="timeline-item__copy">
                    <time>{item.year}</time>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Ảnh {activeIndex + 1} trên {milestones.length}: {activeMilestone.title}
      </p>
    </div>
  );
}
