type FloralDividerProps = {
  variant?: "simple" | "ornate";
  className?: string;
};

function SimpleDivider({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Đường kẻ tơ vàng hai bên */}
      <line x1="60" y1="25" x2="220" y2="25" className="floral-divider__line" strokeWidth="0.8" />
      <circle cx="60" cy="25" r="2" className="floral-divider__center" />
      <line x1="380" y1="25" x2="540" y2="25" className="floral-divider__line" strokeWidth="0.8" />
      <circle cx="540" cy="25" r="2" className="floral-divider__center" />

      {/* Dây lá nguyệt quế bên trái */}
      <g>
        <path
          d="M220 25 C240 23 260 21 280 25"
          fill="none"
          className="floral-divider__line"
          strokeWidth="1"
        />
        {/* Cặp lá 1 */}
        <path
          d="M235 25 C228 17 218 14 206 15 C215 21 222 23 235 25Z"
          className="floral-divider__leaf"
        />
        <path
          d="M235 25 C228 33 218 36 206 35 C215 29 222 27 235 25Z"
          className="floral-divider__leaf"
        />
        {/* Cặp lá 2 */}
        <path
          d="M260 25 C252 16 240 13 226 15 C237 21 245 23 260 25Z"
          className="floral-divider__leaf"
        />
        <path
          d="M260 25 C252 34 240 37 226 35 C237 29 245 27 260 25Z"
          className="floral-divider__leaf"
        />
        {/* Hạt ngọc điểm xuyết */}
        <circle cx="238" cy="25" r="1.5" className="floral-divider__center" />
        <circle cx="264" cy="25" r="1.5" className="floral-divider__center" />
      </g>

      {/* Dây lá nguyệt quế bên phải (đối xứng) */}
      <g>
        <path
          d="M380 25 C360 23 340 21 320 25"
          fill="none"
          className="floral-divider__line"
          strokeWidth="1"
        />
        {/* Cặp lá 1 */}
        <path
          d="M365 25 C372 17 382 14 394 15 C385 21 378 23 365 25Z"
          className="floral-divider__leaf"
        />
        <path
          d="M365 25 C372 33 382 36 394 35 C385 29 378 27 365 25Z"
          className="floral-divider__leaf"
        />
        {/* Cặp lá 2 */}
        <path
          d="M340 25 C348 16 360 13 374 15 C363 21 355 23 340 25Z"
          className="floral-divider__leaf"
        />
        <path
          d="M340 25 C348 34 360 37 374 35 C363 29 355 27 340 25Z"
          className="floral-divider__leaf"
        />
        {/* Hạt ngọc điểm xuyết */}
        <circle cx="362" cy="25" r="1.5" className="floral-divider__center" />
        <circle cx="336" cy="25" r="1.5" className="floral-divider__center" />
      </g>

      {/* Đóa hoa / Hạt ngọc trung tâm */}
      <circle cx="300" cy="25" r="8" className="floral-divider__line" strokeWidth="0.8" />
      <circle cx="300" cy="25" r="4.5" className="floral-divider__center" />
      <circle cx="300" cy="25" r="1.8" fill="#fff" fillOpacity="0.8" />
      {/* 4 Cánh hoa li ti quanh tâm */}
      <path d="M300 13 L301.5 19 L300 21 L298.5 19 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M300 37 L301.5 31 L300 29 L298.5 31 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M288 25 L294 26.5 L296 25 L294 23.5 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M312 25 L306 26.5 L304 25 L306 23.5 Z" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

function OrnateDivider({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Đường chỉ vàng hai bên với đuôi xoắn mềm */}
      <line x1="40" y1="35" x2="190" y2="35" className="floral-divider__line" strokeWidth="0.8" />
      <circle cx="40" cy="35" r="2.2" className="floral-divider__center" />
      <line x1="410" y1="35" x2="560" y2="35" className="floral-divider__line" strokeWidth="0.8" />
      <circle cx="560" cy="35" r="2.2" className="floral-divider__center" />

      {/* --- CỤM HOA VĂN CUỘN FILIGREE BÊN TRÁI --- */}
      <g>
        {/* Nhánh lượn lớn */}
        <path
          d="M190 35 C215 32 235 22 255 18 C240 28 220 38 190 35Z"
          className="floral-divider__leaf"
        />
        <path
          d="M190 35 C215 38 235 48 255 52 C240 42 220 32 190 35Z"
          className="floral-divider__leaf"
        />
        {/* Nhánh lượn nhỏ */}
        <path
          d="M225 35 C245 28 260 26 275 30 C260 36 245 37 225 35Z"
          className="floral-divider__leaf"
        />
        <path
          d="M225 35 C245 42 260 44 275 40 C260 34 245 33 225 35Z"
          className="floral-divider__leaf"
        />
        {/* Vòng xoắn ốc quý tộc */}
        <path
          d="M255 18 C265 14 275 18 272 26 C270 30 264 28 266 24"
          className="floral-divider__line"
          strokeWidth="0.9"
        />
        <path
          d="M255 52 C265 56 275 52 272 44 C270 40 264 42 266 46"
          className="floral-divider__line"
          strokeWidth="0.9"
        />
        {/* Hạt ngọc */}
        <circle cx="205" cy="35" r="2" className="floral-divider__center" />
        <circle cx="240" cy="35" r="1.8" className="floral-divider__center" />
        <circle cx="270" cy="35" r="1.5" className="floral-divider__center" />
      </g>

      {/* --- CỤM HOA VĂN CUỘN FILIGREE BÊN PHẢI (Đối xứng) --- */}
      <g>
        {/* Nhánh lượn lớn */}
        <path
          d="M410 35 C385 32 365 22 345 18 C360 28 380 38 410 35Z"
          className="floral-divider__leaf"
        />
        <path
          d="M410 35 C385 38 365 48 345 52 C360 42 380 32 410 35Z"
          className="floral-divider__leaf"
        />
        {/* Nhánh lượn nhỏ */}
        <path
          d="M375 35 C355 28 340 26 325 30 C340 36 355 37 375 35Z"
          className="floral-divider__leaf"
        />
        <path
          d="M375 35 C355 42 340 44 325 40 C340 34 355 33 375 35Z"
          className="floral-divider__leaf"
        />
        {/* Vòng xoắn ốc quý tộc */}
        <path
          d="M345 18 C335 14 325 18 328 26 C330 30 336 28 334 24"
          className="floral-divider__line"
          strokeWidth="0.9"
        />
        <path
          d="M345 52 C335 56 325 52 328 44 C330 40 336 42 334 46"
          className="floral-divider__line"
          strokeWidth="0.9"
        />
        {/* Hạt ngọc */}
        <circle cx="395" cy="35" r="2" className="floral-divider__center" />
        <circle cx="360" cy="35" r="1.8" className="floral-divider__center" />
        <circle cx="330" cy="35" r="1.5" className="floral-divider__center" />
      </g>

      {/* --- ĐÓA HOA HOÀNG GIA TRUNG TÂM (Center Royal Rosette) --- */}
      <g>
        {/* Cánh hoa 4 hướng chính */}
        <path
          d="M300 33 C293 20 293 6 300 0 C307 6 307 20 300 33Z"
          className="floral-divider__leaf"
          fillOpacity="0.3"
        />
        <path
          d="M300 37 C293 50 293 64 300 70 C307 64 307 50 300 37Z"
          className="floral-divider__leaf"
          fillOpacity="0.3"
        />
        <path
          d="M297 35 C284 28 270 28 265 35 C270 42 284 42 297 35Z"
          className="floral-divider__leaf"
          fillOpacity="0.3"
        />
        <path
          d="M303 35 C316 28 330 28 335 35 C330 42 316 42 303 35Z"
          className="floral-divider__leaf"
          fillOpacity="0.3"
        />

        {/* 4 Cánh hoa hướng chéo nhỏ hơn */}
        <g transform="rotate(45, 300, 35)">
          <path d="M300 34 C295 24 295 14 300 10 C305 14 305 24 300 34Z" className="floral-divider__leaf" fillOpacity="0.2" />
          <path d="M300 36 C295 46 295 56 300 60 C305 56 305 46 300 36Z" className="floral-divider__leaf" fillOpacity="0.2" />
          <path d="M298 35 C288 30 278 30 275 35 C278 40 288 40 298 35Z" className="floral-divider__leaf" fillOpacity="0.2" />
          <path d="M302 35 C312 30 322 30 325 35 C322 40 312 40 302 35Z" className="floral-divider__leaf" fillOpacity="0.2" />
        </g>

        {/* Vòng nhụy trung tâm */}
        <circle cx="300" cy="35" r="6.5" className="floral-divider__line" strokeWidth="1" />
        <circle cx="300" cy="35" r="4" className="floral-divider__center" />
        <circle cx="300" cy="35" r="1.5" fill="#fff" fillOpacity="0.85" />
      </g>
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
