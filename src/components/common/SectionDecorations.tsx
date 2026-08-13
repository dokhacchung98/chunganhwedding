type OrnamentVariant = "botanical" | "lotus" | "petals";

type SectionDecorationsProps = {
  variant?: OrnamentVariant;
  className?: string;
};

function BotanicalOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Main curving vine stem */}
      <path
        d="M48 330 C58 288 52 254 68 216 C80 186 74 158 90 128 C104 102 120 68 156 26"
        fill="none"
        strokeWidth="1.4"
      />

      {/* Left leaves – smooth closed shapes */}
      <path
        d="M56 270 C36 258 22 238 20 210 C40 218 52 242 56 270Z"
      />
      <path
        d="M72 208 C52 196 38 176 36 148 C56 156 68 180 72 208Z"
      />
      <path
        d="M88 148 C70 136 58 116 56 88 C74 96 84 120 88 148Z"
      />

      {/* Right leaves – smooth closed shapes */}
      <path
        d="M64 240 C84 228 102 208 108 180 C88 188 72 212 64 240Z"
      />
      <path
        d="M80 178 C100 166 118 146 124 118 C104 126 88 150 80 178Z"
      />
      <path
        d="M98 118 C116 106 132 86 136 58 C118 66 104 90 98 118Z"
      />

      {/* Leaf midrib veins – thin, no fill */}
      <path d="M56 270 C38 248 26 226 20 210" fill="none" strokeWidth="0.4" />
      <path d="M64 240 C82 220 98 198 108 180" fill="none" strokeWidth="0.4" />
      <path d="M72 208 C56 188 44 168 36 148" fill="none" strokeWidth="0.4" />
      <path d="M80 178 C96 158 110 138 124 118" fill="none" strokeWidth="0.4" />
      <path d="M88 148 C74 128 64 108 56 88" fill="none" strokeWidth="0.4" />
      <path d="M98 118 C112 98 126 78 136 58" fill="none" strokeWidth="0.4" />

      {/* Berry cluster at tip */}
      <circle cx="160" cy="20" r="3.5" />
      <circle cx="168" cy="12" r="2.5" />
      <circle cx="152" cy="12" r="2.5" />

      {/* Accent dots at leaf junctions */}
      <circle cx="76" cy="192" r="1.5" />
      <circle cx="94" cy="132" r="1.5" />

      {/* Delicate curling tendrils */}
      <path
        d="M50 298 C42 304 38 298 40 290 C42 284 48 286 48 292"
        fill="none"
        strokeWidth="0.7"
      />
      <path
        d="M118 86 C126 80 130 86 128 94 C126 100 120 98 120 92"
        fill="none"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function LotusOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Center petal */}
      <path
        d="M150 155 C136 118 134 68 150 26 C166 68 164 118 150 155Z"
      />

      {/* Inner left petal */}
      <path
        d="M148 155 C124 138 102 100 96 54 C118 64 140 106 148 155Z"
      />
      {/* Inner right petal */}
      <path
        d="M152 155 C176 138 198 100 204 54 C182 64 160 106 152 155Z"
      />

      {/* Outer left petal */}
      <path
        d="M144 157 C114 150 74 130 48 88 C76 80 118 104 144 157Z"
      />
      {/* Outer right petal */}
      <path
        d="M156 157 C186 150 226 130 252 88 C224 80 182 104 156 157Z"
      />

      {/* Far left petal */}
      <path
        d="M140 158 C108 160 62 148 30 120 C56 106 102 116 140 158Z"
      />
      {/* Far right petal */}
      <path
        d="M160 158 C192 160 238 148 270 120 C244 106 198 116 160 158Z"
      />

      {/* Petal center lines */}
      <path d="M150 155 V32" fill="none" strokeWidth="0.35" />
      <path d="M148 155 L100 60" fill="none" strokeWidth="0.3" />
      <path d="M152 155 L200 60" fill="none" strokeWidth="0.3" />

      {/* Base arcs */}
      <path
        d="M56 166 C100 180 200 180 244 166"
        fill="none"
        strokeWidth="1"
      />
      <path
        d="M78 178 C114 188 186 188 222 178"
        fill="none"
        strokeWidth="0.6"
      />

      {/* Stamen dots */}
      <circle cx="150" cy="22" r="2.5" />
      <circle cx="142" cy="32" r="1.5" />
      <circle cx="158" cy="32" r="1.5" />

      {/* Stamen stems */}
      <path d="M150 6 V16" fill="none" strokeWidth="0.6" />
      <path d="M138 16 L142 28" fill="none" strokeWidth="0.5" />
      <path d="M162 16 L158 28" fill="none" strokeWidth="0.5" />
    </svg>
  );
}

function PetalOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Four cardinal petals */}
      <path d="M100 96 C90 66 90 36 100 10 C110 36 110 66 100 96Z" />
      <path d="M104 100 C134 90 164 90 190 100 C164 110 134 110 104 100Z" />
      <path d="M100 104 C110 134 110 164 100 190 C90 164 90 134 100 104Z" />
      <path d="M96 100 C66 90 36 90 10 100 C36 110 66 110 96 100Z" />

      {/* Four diagonal petals (subtler, smaller) */}
      <path
        d="M104 96 C114 82 130 70 148 64 C142 82 128 96 112 104Z"
        opacity="0.4"
      />
      <path
        d="M104 104 C118 114 130 130 136 148 C118 142 104 128 96 112Z"
        opacity="0.4"
      />
      <path
        d="M96 104 C86 118 70 130 52 136 C58 118 72 104 88 96Z"
        opacity="0.4"
      />
      <path
        d="M96 96 C82 86 70 70 64 52 C82 58 96 72 104 88Z"
        opacity="0.4"
      />

      {/* Center circles */}
      <circle cx="100" cy="100" r="8" />
      <circle cx="100" cy="100" r="4" />

      {/* Outer ring */}
      <circle cx="100" cy="100" r="84" fill="none" strokeWidth="0.5" />

      {/* Cardinal accent dots */}
      <circle cx="100" cy="16" r="2" />
      <circle cx="184" cy="100" r="2" />
      <circle cx="100" cy="184" r="2" />
      <circle cx="16" cy="100" r="2" />

      {/* Cardinal tips beyond ring */}
      <path d="M100 2 V10" fill="none" strokeWidth="0.6" />
      <path d="M100 190 V198" fill="none" strokeWidth="0.6" />
      <path d="M2 100 H10" fill="none" strokeWidth="0.6" />
      <path d="M190 100 H198" fill="none" strokeWidth="0.6" />
    </svg>
  );
}

function Ornament({ variant, className }: { variant: OrnamentVariant; className: string }) {
  if (variant === "lotus") return <LotusOrnament className={className} />;
  if (variant === "petals") return <PetalOrnament className={className} />;
  return <BotanicalOrnament className={className} />;
}

export function SectionDecorations({
  variant = "botanical",
  className = "",
}: SectionDecorationsProps) {
  return (
    <div
      className={`section-decorations section-decorations--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <Ornament
        variant={variant}
        className="section-decorations__art section-decorations__art--primary"
      />
      <Ornament
        variant={variant}
        className="section-decorations__art section-decorations__art--secondary"
      />
      <span className="section-decorations__sparkles">
        <i>✦</i>
        <i>·</i>
        <i>✦</i>
        <i>·</i>
      </span>
    </div>
  );
}
