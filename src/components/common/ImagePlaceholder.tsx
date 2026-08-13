type ImagePlaceholderProps = {
  width: number;
  height: number;
  label: string;
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  width,
  height,
  label,
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
      aria-label={`${label}, kích thước đề xuất ${width} nhân ${height} pixel`}
      data-priority={priority ? "true" : undefined}
    >
      <span className="image-placeholder__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path d="M5 7.5h22v17H5zM8.5 20l4.5-5 3.2 3.3 2.8-2.8 4.5 4.5M21.5 12a1.5 1.5 0 1 0 0 .01" />
        </svg>
      </span>
      <strong>{label}</strong>
      <span>
        {width} × {height} px
      </span>
    </div>
  );
}
