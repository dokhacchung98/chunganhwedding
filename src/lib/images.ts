import fs from "node:fs";
import path from "node:path";

/**
 * Kiểm tra xem ảnh có tồn tại trong thư mục `public/images/` hay không.
 * Hỗ trợ các định dạng phổ biến: .jpg, .jpeg, .png, .webp, .avif (cả chữ thường và chữ hoa).
 * Nếu tìm thấy, trả về đường dẫn web (ví dụ "/images/hero.jpg"), nếu chưa có trả về null.
 */
export function getExistingImagePath(suggestedFileName: string): string | null {
  try {
    // Chuẩn hóa tên file: loại bỏ tiền tố public/ hoặc /images/ nếu có
    const cleanName = suggestedFileName
      .replace(/^public\/?/, "")
      .replace(/^images\/?/, "")
      .replace(/^\//, "");

    const publicImagesDir = path.join(process.cwd(), "public", "images");

    // 1. Kiểm tra chính xác tên file được cung cấp
    const directPath = path.join(publicImagesDir, cleanName);
    if (fs.existsSync(directPath)) {
      return `/images/${cleanName}`;
    }

    // 2. Thử các đuôi mở rộng khác (jpg, jpeg, png, webp, avif...)
    const baseWithoutExt = cleanName.replace(/\.[^/.]+$/, "");
    const supportedExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".avif",
      ".JPG",
      ".JPEG",
      ".PNG",
      ".WEBP",
    ];

    const baseCandidates = [baseWithoutExt];
    if (baseWithoutExt === "hero") baseCandidates.push("herro");
    if (baseWithoutExt === "herro") baseCandidates.push("hero");

    for (const base of baseCandidates) {
      for (const ext of supportedExtensions) {
        const candidate = `${base}${ext}`;
        const candidatePath = path.join(publicImagesDir, candidate);
        if (fs.existsSync(candidatePath)) {
          return `/images/${candidate}`;
        }
      }
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Đọc kích thước thật (width, height) của file ảnh trong `public/images/`.
 * Hỗ trợ JPEG, PNG, WebP nhanh chóng bằng cách đọc header file, không cần thư viện ngoài.
 */
export function getImageRealDimensions(
  suggestedFileName: string,
): { width: number; height: number } | null {
  try {
    const webPath = getExistingImagePath(suggestedFileName);
    if (!webPath) return null;

    const fullPath = path.join(process.cwd(), "public", webPath.replace(/^\//, ""));
    if (!fs.existsSync(fullPath)) return null;

    const fd = fs.openSync(fullPath, "r");
    const buffer = Buffer.alloc(65536);
    fs.readSync(fd, buffer, 0, 65536, 0);
    fs.closeSync(fd);

    // 1. JPEG
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) break;
        const marker = buffer[offset + 1];
        if (
          (marker >= 0xc0 && marker <= 0xc3) ||
          (marker >= 0xc5 && marker <= 0xc7) ||
          (marker >= 0xc9 && marker <= 0xcb) ||
          (marker >= 0xcd && marker <= 0xcf)
        ) {
          const height = buffer.readUInt16BE(offset + 5);
          const width = buffer.readUInt16BE(offset + 7);
          return { width, height };
        }
        const len = buffer.readUInt16BE(offset + 2);
        offset += 2 + len;
      }
    }

    // 2. PNG
    if (
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47
    ) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height };
    }

    // 3. WebP
    if (
      buffer.toString("ascii", 0, 4) === "RIFF" &&
      buffer.toString("ascii", 8, 12) === "WEBP"
    ) {
      const vp8Chunk = buffer.toString("ascii", 12, 16);
      if (vp8Chunk === "VP8 ") {
        const width = buffer.readUInt16LE(26) & 0x3fff;
        const height = buffer.readUInt16LE(28) & 0x3fff;
        return { width, height };
      } else if (vp8Chunk === "VP8L") {
        const b1 = buffer[21];
        const b2 = buffer[22];
        const b3 = buffer[23];
        const b4 = buffer[24];
        const width = 1 + (((b2 & 0x3f) << 8) | b1);
        const height = 1 + (((b4 & 0xf) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
        return { width, height };
      } else if (vp8Chunk === "VP8X") {
        const width = 1 + buffer.readUIntLE(24, 3);
        const height = 1 + buffer.readUIntLE(27, 3);
        return { width, height };
      }
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Kiểm tra xem file ảnh thật có phải là ảnh dọc (height > width) hay không.
 */
export function isRealImagePortrait(suggestedFileName: string): boolean {
  const dims = getImageRealDimensions(suggestedFileName);
  if (!dims) return false;
  return dims.height > dims.width;
}
