type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`} data-reveal="up">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      <div className="section-heading__ornament" aria-hidden="true">
        <svg
          viewBox="0 0 180 24"
          className="section-heading__flourish"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nhánh uốn mềm mại bên trái */}
          <path
            d="M72 12 C58 12 50 6 36 6 C22 6 15 12 2 12"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M50 6 C47 2 40 1 36 6 C32 11 39 14 43 10"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <circle cx="2" cy="12" r="1.8" fill="currentColor" />

          {/* Biểu tượng trung tâm: Ngôi sao hoa hoàng gia 8 cánh & hạt ngọc */}
          <circle
            cx="90"
            cy="12"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <circle cx="90" cy="12" r="2.2" fill="currentColor" />
          <path
            d="M90 3 L91.8 9.2 L98 12 L91.8 14.8 L90 21 L88.2 14.8 L82 12 L88.2 9.2 Z"
            fill="currentColor"
            fillOpacity="0.75"
          />

          {/* Nhánh uốn mềm mại bên phải */}
          <path
            d="M108 12 C122 12 130 6 144 6 C158 6 165 12 178 12"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M130 6 C133 2 140 1 144 6 C148 11 141 14 137 10"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <circle cx="178" cy="12" r="1.8" fill="currentColor" />
        </svg>
      </div>
    </header>
  );
}
