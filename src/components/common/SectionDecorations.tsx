type OrnamentVariant = "botanical" | "lotus" | "petals";

type SectionDecorationsProps = {
  variant?: OrnamentVariant;
  className?: string;
};

function BotanicalOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M38 300C92 245 79 166 128 105C151 77 177 51 190 18" />
      <path d="M80 235C48 229 27 211 18 184C48 180 72 197 80 235Z" />
      <path d="M94 202C123 192 144 169 151 139C119 139 98 163 94 202Z" />
      <path d="M108 159C83 148 69 128 67 103C93 106 109 129 108 159Z" />
      <path d="M138 93C154 92 171 80 180 61C158 59 141 72 138 93Z" />
      <path d="M50 275C72 266 88 248 93 226" />
      <path d="M115 130C137 122 153 108 165 87" />
      <path d="M152 65C144 47 149 29 166 17C177 36 171 55 152 65Z" />
      <g>
        <path d="M18 184C5 176 2 161 9 149C24 152 31 164 28 179" />
        <path d="M9 149C12 135 24 128 37 132C41 145 35 158 24 164" />
        <path d="M37 132C51 136 57 149 52 162C40 168 28 162 24 151" />
        <circle cx="25" cy="153" r="4" />
      </g>
      <g>
        <path d="M179 61C181 46 192 36 205 36C212 50 206 64 194 71" />
        <path d="M205 36C218 45 220 60 212 72C197 74 187 64 187 50" />
        <circle cx="198" cy="55" r="4" />
      </g>
    </svg>
  );
}

function LotusOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M140 145C105 119 106 76 140 33C174 76 175 119 140 145Z" />
      <path d="M139 145C105 143 76 118 64 77C105 76 131 102 139 145Z" />
      <path d="M141 145C175 143 204 118 216 77C175 76 149 102 141 145Z" />
      <path d="M112 137C78 144 45 130 24 98C60 88 94 103 112 137Z" />
      <path d="M168 137C202 144 235 130 256 98C220 88 186 103 168 137Z" />
      <path d="M44 153C96 164 184 164 236 153" />
      <path d="M74 174C111 181 169 181 206 174" />
      <circle cx="140" cy="23" r="3" />
      <path d="M140 4V12M119 15L125 21M161 15L155 21" />
    </svg>
  );
}

function PetalOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M90 89C66 71 65 42 90 16C115 42 114 71 90 89Z" />
      <path d="M91 90C109 66 138 65 164 90C138 115 109 114 91 90Z" />
      <path d="M90 91C114 109 115 138 90 164C65 138 66 109 90 91Z" />
      <path d="M89 90C71 114 42 115 16 90C42 65 71 66 89 90Z" />
      <circle cx="90" cy="90" r="9" />
      <circle cx="90" cy="90" r="72" />
      <path d="M90 2V9M90 171V178M2 90H9M171 90H178" />
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
