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
      <span className="section-heading__ornament" aria-hidden="true">
        <i />
        <b>✦</b>
        <i />
      </span>
    </header>
  );
}
