import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ngọc Ánh & Khắc Chung | Thiệp cưới",
  description: "Trân trọng kính mời bạn đến chung vui trong ngày thành hôn của Ngọc Ánh và Khắc Chung.",
  applicationName: "Thiệp cưới Ngọc Ánh & Khắc Chung",
  authors: [{ name: "Ngọc Ánh & Khắc Chung" }],
  keywords: ["thiệp cưới", "wedding invitation", "Ngọc Ánh", "Khắc Chung"],
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Ngọc Ánh & Khắc Chung | 20.09.2026",
    description: "Hẹn gặp bạn trong ngày hạnh phúc của chúng mình.",
    siteName: "Thiệp cưới Ngọc Ánh & Khắc Chung",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ngọc Ánh và Khắc Chung — 20.09.2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngọc Ánh & Khắc Chung | 20.09.2026",
    description: "Hẹn gặp bạn trong ngày hạnh phúc của chúng mình.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8f202b",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body>
        <noscript>
          <div className="noscript-message">Vui lòng bật JavaScript để mở thiệp và sử dụng các tính năng tương tác.</div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
