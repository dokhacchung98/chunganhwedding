type OrnamentVariant = "botanical" | "lotus" | "petals";

type SectionDecorationsProps = {
  variant?: OrnamentVariant;
  className?: string;
};

/**
 * Họa tiết nhánh hoa mẫu đơn & lá nguyệt quế uốn lượn tự nhiên.
 * Hoàn toàn hữu cơ, mềm mại, không có bất kỳ vòng tròn hình học thô cứng nào.
 */
function BotanicalOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* --- HOA CHÍNH (Peony / Rose) ở đỉnh cành --- */}
      <g className="ornament-flower" transform="translate(160, 20)">
        {/* Lớp cánh ngoài cùng uốn lượn tự nhiên */}
        <path
          d="M50 50 C20 30 10 65 30 85 C45 98 60 95 70 85 C90 95 105 75 95 55 C88 40 75 35 50 50Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        {/* Cánh hoa tầng 2 */}
        <path
          d="M45 42 C30 25 65 15 75 35 C85 50 78 68 65 72 C50 75 35 60 45 42Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        {/* Cánh hoa tầng 3 */}
        <path
          d="M40 52 C32 40 48 30 60 38 C70 45 68 60 55 62 C45 64 36 58 40 52Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Nhụy hoa thanh thoát */}
        <path
          d="M52 44 C49 47 49 53 52 56 C55 53 55 47 52 44Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        {/* Tia nhụy vàng mảnh mai */}
        <path
          d="M52 42 V44 M52 56 V58 M44 50 H46 M58 50 H60 M46 45 L48 47 M56 53 L58 55 M46 55 L48 53 M56 47 L58 45"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Nụ hoa phụ e ấp bên cạnh */}
        <path
          d="M10 35 C0 25 5 10 18 15 C26 18 28 28 20 35 C15 39 12 37 10 35Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M12 35 C15 25 18 20 20 16" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M14 36 C8 45 6 52 8 58" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      </g>

      {/* --- THÂN CÂY UỐN LƯỢN CHÍNH (Main Flowing Stem) --- */}
      <path
        d="M210 70 C190 120 175 160 145 210 C120 255 95 295 50 340 C35 355 20 375 10 395"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Nhánh phụ uốn sang trái */}
      <path
        d="M165 175 C130 185 100 170 75 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Nhánh phụ uốn sang phải */}
      <path
        d="M125 245 C155 260 175 285 185 315"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* --- CÁC CẶP LÁ NGUYỆT QUẾ MỀM MẠI --- */}
      <g>
        <path
          d="M185 55 C160 40 145 20 140 0 C165 8 180 30 185 55Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M185 55 C168 35 155 18 140 0" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M245 65 C265 50 278 30 280 10 C262 22 250 42 245 65Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M245 65 C260 48 270 30 280 10" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M195 110 C220 115 240 135 250 160 C225 155 205 135 195 110Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M195 110 C218 128 235 145 250 160" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M178 145 C150 135 128 115 118 85 C145 100 165 120 178 145Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M178 145 C155 125 138 105 118 85" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M110 178 C80 175 60 160 45 135 C70 145 92 162 110 178Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M110 178 C85 165 65 150 45 135" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M75 150 C50 140 35 120 25 95 C48 108 65 128 75 150Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M75 150 C55 130 40 112 25 95" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M150 200 C175 205 198 225 208 250 C182 242 162 225 150 200Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M150 200 C172 220 190 235 208 250" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M135 230 C105 235 82 255 70 280 C95 270 118 252 135 230Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M135 230 C110 250 90 265 70 280" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M155 270 C180 280 202 305 210 330 C185 320 168 300 155 270Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M155 270 C178 290 195 310 210 330" stroke="currentColor" strokeWidth="0.5" />
      </g>

      <g>
        <path
          d="M85 305 C55 315 38 335 25 360 C50 350 72 332 85 305Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M85 305 C62 325 45 342 25 360" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* --- DÂY LEO XOẮN TỰ NHIÊN (Soft Tendril Spirals) --- */}
      <path
        d="M200 85 C220 75 235 88 230 100 C225 110 212 108 215 98 C217 92 222 92 224 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M80 155 C60 165 48 180 55 192 C62 202 75 198 72 188 C70 180 62 182 62 188"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M95 295 C115 310 130 305 132 292 C134 280 120 278 120 286"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Họa tiết Hoa Sen & Mây Cát Tường.
 * Thuần khiết, thanh cao, không có đường cong tròn đồng tâm hình học thô cứng.
 */
function LotusOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* --- DẢI MÂY CÁT TƯỜNG UỐN LƯỢN (Auspicious Cloud Swirls) --- */}
      <g className="lotus-clouds" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path
          d="M130 205 C110 195 105 178 125 170 C145 162 168 175 162 190 C158 198 150 202 142 198"
        />
        <path
          d="M250 205 C270 195 275 178 255 170 C235 162 212 175 218 190 C222 198 230 202 238 198"
        />
        {/* Làn sóng gợn nước mềm mại */}
        <path
          d="M80 215 C135 230 245 230 300 215"
          strokeWidth="1.2"
        />
        <path
          d="M110 228 C150 240 230 240 270 228"
          strokeWidth="0.8"
          strokeDasharray="4 4"
        />
      </g>

      {/* --- HOA SEN CHÍNH (Grand Wedding Lotus) --- */}
      <g className="lotus-petals">
        {/* Tầng cánh ngoài cùng */}
        <path
          d="M175 185 C120 180 60 165 20 120 C55 105 120 125 175 185Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M205 185 C260 180 320 165 360 120 C325 105 260 125 205 185Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path d="M175 185 C110 155 60 135 20 120" stroke="currentColor" strokeWidth="0.5" />
        <path d="M205 185 C270 155 320 135 360 120" stroke="currentColor" strokeWidth="0.5" />

        {/* Tầng cánh giữa */}
        <path
          d="M182 188 C135 175 80 140 55 80 C95 75 150 115 182 188Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M198 188 C245 175 300 140 325 80 C285 75 230 115 198 188Z"
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M182 188 C135 145 95 110 55 80" stroke="currentColor" strokeWidth="0.5" />
        <path d="M198 188 C245 145 285 110 325 80" stroke="currentColor" strokeWidth="0.5" />

        {/* Tầng cánh trong */}
        <path
          d="M186 188 C155 160 125 110 115 45 C150 55 175 115 186 188Z"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M194 188 C225 160 255 110 265 45 C230 55 205 115 194 188Z"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M186 188 C158 130 135 85 115 45" stroke="currentColor" strokeWidth="0.6" />
        <path d="M194 188 C222 130 245 85 265 45" stroke="currentColor" strokeWidth="0.6" />

        {/* Cánh sen trung tâm cao nhất */}
        <path
          d="M190 188 C168 140 162 70 190 12 C218 70 212 140 190 188Z"
          fill="currentColor"
          fillOpacity="0.28"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M190 188 V18" stroke="currentColor" strokeWidth="0.8" />
        <path d="M190 120 C182 95 175 60 178 35" stroke="currentColor" strokeWidth="0.5" />
        <path d="M190 120 C198 95 205 60 202 35" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* --- NHỤY SEN THANH THOÁT --- */}
      <g className="lotus-pod">
        <path d="M190 12 L190 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="190" cy="1" r="1.8" fill="currentColor" />
        <path d="M180 20 L174 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="173" cy="11" r="1.4" fill="currentColor" />
        <path d="M200 20 L206 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="207" cy="11" r="1.4" fill="currentColor" />
      </g>

      {/* --- NỤ HOA SEN CON HAI BÊN --- */}
      <g transform="translate(60, 95) rotate(-22)">
        <path
          d="M20 50 C5 35 10 15 22 5 C34 15 38 35 20 50Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path d="M20 50 V8" stroke="currentColor" strokeWidth="0.6" />
        <path d="M20 50 C15 70 12 90 8 110" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g transform="translate(300, 95) rotate(22)">
        <path
          d="M20 50 C5 35 10 15 22 5 C34 15 38 35 20 50Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path d="M20 50 V8" stroke="currentColor" strokeWidth="0.6" />
        <path d="M20 50 C25 70 28 90 32 110" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/**
 * Họa tiết Cụm Hoa Cưới & Cánh Hoa Rơi Tự Nhiên (Corner Floral Spray).
 * Thay thế hoàn toàn vòng tròn đồng tâm thô cứng bằng đóa hoa hồng nở rộ,
 * nhành lá lãng mạn và các cánh hoa mềm mại đang nhẹ rơi theo gió.
 */
function FloralCornerSpray({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* --- ĐÓA HOA HỒNG NỞ RỘ Ở GÓC TRUNG TÂM (Blooming Rose Core) --- */}
      <g transform="translate(50, 50)">
        {/* Tầng cánh hoa nở lớn ngoài cùng */}
        <path
          d="M40 10 C65 -5 95 10 90 35 C115 35 125 65 110 85 C120 110 95 125 75 115 C55 130 25 120 20 95 C-5 95 -5 65 10 45 C-5 25 20 0 40 10Z"
          fill="currentColor"
          fillOpacity="0.14"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Tầng cánh hoa giữa */}
        <path
          d="M45 25 C68 15 88 28 85 45 C102 50 105 72 92 85 C88 100 70 105 55 95 C40 105 22 92 25 75 C12 68 18 45 32 40 C30 28 42 20 45 25Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* Tầng cánh hoa trong xoáy mềm */}
        <path
          d="M50 40 C65 32 75 42 72 55 C82 60 80 75 70 80 C65 88 52 86 46 78 C36 82 28 72 32 62 C26 55 32 42 42 42 C44 36 50 36 50 40Z"
          fill="currentColor"
          fillOpacity="0.26"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Tâm nụ hoa e ấp */}
        <path
          d="M48 52 C56 46 62 52 60 58 C65 62 60 70 54 68 C48 72 44 65 46 60 C42 56 45 50 48 52Z"
          fill="currentColor"
          fillOpacity="0.38"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </g>

      {/* --- NHÁNH LÁ VƯƠN THEO TRỤC NGANG (Horizontal Branch) --- */}
      <g>
        <path
          d="M145 95 C175 85 210 82 245 78 C255 76 265 74 275 70"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Nụ hoa nhỏ ở đầu cành ngang */}
        <path
          d="M265 65 C275 58 282 68 274 76 C268 74 266 68 265 65Z"
          fill="currentColor"
          fillOpacity="0.3"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        {/* Lá nhánh ngang */}
        <path
          d="M175 85 C185 70 205 65 218 72 C210 82 195 88 175 85Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M190 84 C200 98 218 102 230 95 C222 86 208 82 190 84Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M225 80 C235 68 250 65 260 70 C254 78 242 82 225 80Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </g>

      {/* --- NHÁNH LÁ VƯƠN THEO TRỤC DỌC (Vertical Branch) --- */}
      <g>
        <path
          d="M95 145 C85 175 82 210 78 245 C76 255 74 265 70 275"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Nụ hoa nhỏ ở đầu cành dọc */}
        <path
          d="M65 265 C58 275 68 282 76 274 C74 268 68 266 65 265Z"
          fill="currentColor"
          fillOpacity="0.3"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        {/* Lá nhánh dọc */}
        <path
          d="M85 175 C70 185 65 205 72 218 C82 210 88 195 85 175Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M84 190 C98 200 102 218 95 230 C86 222 82 208 84 190Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M80 225 C68 235 65 250 70 260 C78 254 82 242 80 225Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </g>

      {/* --- CÁNH HOA TỰ NHIÊN RƠI THEO LÀN GIÓ (Drifting Loose Petals) --- */}
      {/* Cánh hoa bay 1 */}
      <g transform="translate(170, 150) rotate(25)">
        <path
          d="M15 0 C6 3 0 14 3 22 C7 28 18 26 22 20 C26 12 22 4 15 0Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path d="M14 4 C12 11 11 18 16 22" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* Cánh hoa bay 2 */}
      <g transform="translate(225, 185) rotate(-15)">
        <path
          d="M12 0 C4 2 0 11 2 17 C5 22 14 20 17 16 C20 10 17 3 12 0Z"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </g>

      {/* Cánh hoa bay 3 */}
      <g transform="translate(145, 230) rotate(48)">
        <path
          d="M14 0 C5 3 1 12 3 19 C7 24 16 23 20 17 C23 11 20 3 14 0Z"
          fill="currentColor"
          fillOpacity="0.24"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </g>

      {/* Cánh hoa nhỏ xa 4 */}
      <g transform="translate(245, 130) rotate(-35)">
        <path
          d="M10 0 C3 2 0 8 2 13 C4 17 11 16 14 12 C16 8 14 2 10 0Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.7"
        />
      </g>

      {/* Dây xoắn ốc filigree mềm mại */}
      <path
        d="M135 75 C150 60 162 70 156 80 C150 88 140 82 144 76"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M75 135 C60 150 70 162 80 156 C88 150 82 140 76 144"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Ornament({ variant, className }: { variant: OrnamentVariant; className: string }) {
  if (variant === "lotus") return <LotusOrnament className={className} />;
  if (variant === "petals") return <FloralCornerSpray className={className} />;
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
        <i>✦</i>
        <i>✦</i>
        <i>✦</i>
      </span>
    </div>
  );
}
