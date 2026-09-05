import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const MAX_DIMENSION = 2400; // Đủ nét căng cho màn hình Retina / 4K
const QUALITY = 88; // Giữ 88% JPEG quality: mắt thường hoàn toàn không nhận ra khác biệt

if (!fs.existsSync(IMAGES_DIR)) {
  console.error("Thư mục public/images không tồn tại!");
  process.exit(1);
}

const files = fs.readdirSync(IMAGES_DIR);
let totalOriginalBytes = 0;
let totalOptimizedBytes = 0;
let optimizedCount = 0;

console.log(`\n📸 Bắt đầu tối ưu ảnh trong public/images/ (Max dimension: ${MAX_DIMENSION}px, Quality: ${QUALITY}%)...\n`);

for (const file of files) {
  const filePath = path.join(IMAGES_DIR, file);
  const stat = fs.statSync(filePath);

  if (!stat.isFile()) continue;
  if (!/\.(jpe?g|png)$/i.test(file)) continue;

  const originalSize = stat.size;
  totalOriginalBytes += originalSize;

  // Nếu file lớn hơn 800KB hoặc là ảnh chụp gốc từ máy ảnh
  if (originalSize > 800 * 1024) {
    const isJpeg = /\.(jpe?g)$/i.test(file);
    try {
      // Nếu file mới lớn hơn file cũ (ví dụ do re-encode ảnh đã nén), giữ lại file cũ
      const tmpPath = `${filePath}.opt.tmp`;
      if (isJpeg) {
        execSync(`cp "${filePath}" "${tmpPath}" && sips -Z ${MAX_DIMENSION} -s formatOptions ${QUALITY} "${tmpPath}"`, {
          stdio: "ignore",
        });
      } else {
        execSync(`cp "${filePath}" "${tmpPath}" && sips -Z ${MAX_DIMENSION} "${tmpPath}"`, {
          stdio: "ignore",
        });
      }

      const newStat = fs.statSync(tmpPath);
      if (newStat.size < originalSize) {
        fs.renameSync(tmpPath, filePath);
        const newSize = newStat.size;
        totalOptimizedBytes += newSize;
        optimizedCount++;

        const origMB = (originalSize / 1024 / 1024).toFixed(2);
        const newMB = (newSize / 1024 / 1024).toFixed(2);
        const percent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

        console.log(`✓ ${file.padEnd(18)} : ${origMB} MB -> ${newMB} MB (giảm ${percent}%)`);
      } else {
        fs.unlinkSync(tmpPath);
        totalOptimizedBytes += originalSize;
        const origMB = (originalSize / 1024 / 1024).toFixed(2);
        console.log(`- ${file.padEnd(18)} : ${origMB} MB (file gốc đã tối ưu hơn, giữ nguyên)`);
      }
    } catch (err) {
      console.error(`✗ Lỗi khi xử lý ${file}:`, err.message);
      totalOptimizedBytes += originalSize;
    }
  } else {
    totalOptimizedBytes += originalSize;
    const kb = (originalSize / 1024).toFixed(1);
    console.log(`- ${file.padEnd(18)} : ${kb} KB (đã nhẹ, bỏ qua)`);
  }
}

const totalOrigMB = (totalOriginalBytes / 1024 / 1024).toFixed(1);
const totalOptMB = (totalOptimizedBytes / 1024 / 1024).toFixed(1);
const totalSavedMB = ((totalOriginalBytes - totalOptimizedBytes) / 1024 / 1024).toFixed(1);
const totalPercent = (((totalOriginalBytes - totalOptimizedBytes) / totalOriginalBytes) * 100).toFixed(1);

console.log("\n==========================================");
console.log(`🎉 Hoàn tất tối ưu ${optimizedCount} file ảnh!`);
console.log(`📦 Tổng dung lượng: ${totalOrigMB} MB -> ${totalOptMB} MB`);
console.log(`🚀 Tiết kiệm: ${totalSavedMB} MB (${totalPercent}% nhẹ hơn)`);
console.log("==========================================\n");
