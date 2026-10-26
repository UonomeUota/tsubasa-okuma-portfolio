import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://tsubasa-okuma-portfolio.vercel.app"),
  title: "奥間 翼 | ITエンジニア・ポートフォリオ",
  description: "奥間 翼のポートフォリオ。業務改善・自動化、Web・ECサイト開発、デザイン・3DCGの経験と制作物を紹介します。",
  openGraph: {
    title: "奥間 翼 | ITエンジニア・ポートフォリオ",
    description: "課題発見から仕組みづくりまで。業務改善、Web開発、個人制作の実績を紹介します。",
    type: "website",
    locale: "ja_JP",
    images: ["/portfolio-website-design.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "奥間 翼 | ITエンジニア・ポートフォリオ",
    description: "業務改善・Web開発・個人制作の実績を紹介します。",
    images: ["/portfolio-website-design.webp"],
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f7fa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
