import { ArrowIcon, CalendarIcon, PinIcon } from "@/components/common/Icons";
import { SectionDecorations } from "@/components/common/SectionDecorations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { events } from "@/data/wedding";
import type { WeddingEvent } from "@/types/wedding";

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  return (
    <article
      className={`event-card event-card--${event.tone}`}
      data-reveal="up"
      style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
    >
      <div className="event-card__head">
        <span>{event.eyebrow}</span>
        <h3>{event.title}</h3>
      </div>

      <div className="event-card__calendar" aria-label={event.dateLabel}>
        <span>{event.month}</span>
        <strong>{event.day}</strong>
        <span>{event.year}</span>
      </div>

      <time className="event-card__time">{event.time}</time>
      <p className="event-card__arrival">{event.guestArrival}</p>
      <div className="event-card__rule" aria-hidden="true"><span>✦</span></div>
      <strong className="event-card__venue">{event.venue}</strong>
      <p className="event-card__address">{event.address}</p>

      <div className="event-card__actions">
        <a className="button button--outline" href={event.mapUrl} target="_blank" rel="noreferrer">
          <PinIcon />
          <span>Xem bản đồ</span>
        </a>
        <a className="button button--soft" href={event.calendarUrl} target="_blank" rel="noreferrer">
          <CalendarIcon />
          <span>Thêm vào lịch</span>
        </a>
      </div>
      <a className="event-card__ics" href={event.calendarFile} download>
        Tải lịch cho iPhone / Outlook <ArrowIcon />
      </a>
    </article>
  );
}

export function EventsSection() {
  return (
    <section className="section events-section" id="events">
      <SectionDecorations variant="petals" />
      <div className="shell">
        <SectionHeading
          eyebrow="Ngày chung đôi"
          title="Lịch trình hôn lễ"
          description="Sự hiện diện của bạn là món quà quý giá nhất đối với hai gia đình."
        />
        <div className="events-grid">
          {events.map((event, index) => <EventCard event={event} index={index} key={event.id} />)}
        </div>
      </div>
    </section>
  );
}
