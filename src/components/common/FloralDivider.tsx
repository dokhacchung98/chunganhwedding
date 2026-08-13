type FloralDividerProps = {
  variant?: "simple" | "ornate";
  className?: string;
};

function SimpleDivider({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Center horizontal line */}
      <line x1="120" y1="30" x2="480" y2="30" className="floral-divider__line" />

      {/* Left branch with leaves */}
      <path d="M280 30 C260 30 240 28 220 30" fill="none" className="floral-divider__line" />
      <path d="M250 30 C242 22 232 18 220 18 C228 24 236 28 250 30Z" className="floral-divider__leaf" />
      <path d="M250 30 C242 38 232 42 220 42 C228 36 236 32 250 30Z" className="floral-divider__leaf" />
      <path d="M220 30 C212 24 202 22 190 22 C198 28 206 30 220 30Z" className="floral-divider__leaf" />
      <path d="M220 30 C212 36 202 38 190 38 C198 32 206 30 220 30Z" className="floral-divider__leaf" />

      {/* Right branch with leaves (mirrored) */}
      <path d="M320 30 C340 30 360 28 380 30" fill="none" className="floral-divider__line" />
      <path d="M350 30 C358 22 368 18 380 18 C372 24 364 28 350 30Z" className="floral-divider__leaf" />
      <path d="M350 30 C358 38 368 42 380 42 C372 36 364 32 350 30Z" className="floral-divider__leaf" />
      <path d="M380 30 C388 24 398 22 410 22 C402 28 394 30 380 30Z" className="floral-divider__leaf" />
      <path d="M380 30 C388 36 398 38 410 38 C402 32 394 30 380 30Z" className="floral-divider__leaf" />

      {/* Center ornament */}
      <circle cx="300" cy="30" r="4" className="floral-divider__center" />
      <circle cx="300" cy="30" r="8" fill="none" className="floral-divider__line" />
    </svg>
  );
}

function OrnateDivider({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Horizontal lines */}
      <line x1="80" y1="40" x2="230" y2="40" className="floral-divider__line" />
      <line x1="370" y1="40" x2="520" y2="40" className="floral-divider__line" />

      {/* Left curving branch */}
      <path
        d="M240 40 C220 36 200 28 180 30 C200 32 216 38 240 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M240 40 C220 44 200 52 180 50 C200 48 216 42 240 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M210 40 C196 32 182 28 168 28 C178 34 190 38 210 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M210 40 C196 48 182 52 168 52 C178 46 190 42 210 40Z"
        className="floral-divider__leaf"
      />

      {/* Right curving branch (mirrored) */}
      <path
        d="M360 40 C380 36 400 28 420 30 C400 32 384 38 360 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M360 40 C380 44 400 52 420 50 C400 48 384 42 360 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M390 40 C404 32 418 28 432 28 C422 34 410 38 390 40Z"
        className="floral-divider__leaf"
      />
      <path
        d="M390 40 C404 48 418 52 432 52 C422 46 410 42 390 40Z"
        className="floral-divider__leaf"
      />

      {/* Center flower */}
      <path d="M300 38 C294 28 294 16 300 10 C306 16 306 28 300 38Z" className="floral-divider__leaf" />
      <path d="M302 40 C312 34 324 34 330 40 C324 46 312 46 302 40Z" className="floral-divider__leaf" />
      <path d="M300 42 C306 52 306 64 300 70 C294 64 294 52 300 42Z" className="floral-divider__leaf" />
      <path d="M298 40 C288 34 276 34 270 40 C276 46 288 46 298 40Z" className="floral-divider__leaf" />
      <circle cx="300" cy="40" r="5" className="floral-divider__center" />

      {/* Small accent dots */}
      <circle cx="248" cy="40" r="2" className="floral-divider__center" />
      <circle cx="352" cy="40" r="2" className="floral-divider__center" />

      {/* Far outer curves */}
      <path d="M140 40 C130 34 118 32 106 34 C114 38 126 40 140 40Z" className="floral-divider__leaf" />
      <path d="M140 40 C130 46 118 48 106 46 C114 42 126 40 140 40Z" className="floral-divider__leaf" />
      <path d="M460 40 C470 34 482 32 494 34 C486 38 474 40 460 40Z" className="floral-divider__leaf" />
      <path d="M460 40 C470 46 482 48 494 46 C486 42 474 40 460 40Z" className="floral-divider__leaf" />
    </svg>
  );
}

export function FloralDivider({ variant = "simple", className = "" }: FloralDividerProps) {
  const base = `floral-divider floral-divider--${variant} ${className}`.trim();

  return (
    <div className={base} data-reveal="scale" aria-hidden="true">
      {variant === "ornate" ? (
        <OrnateDivider className="floral-divider__svg" />
      ) : (
        <SimpleDivider className="floral-divider__svg" />
      )}
    </div>
  );
}
