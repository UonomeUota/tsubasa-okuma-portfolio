import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://tsubasa-okuma-portfolio.vercel.app"),
  title: "奥間 翼 | Portfolio",
  description: "Web開発と3DCG制作に取り組む奥間 翼のポートフォリオ。制作実績、技術スタック、経歴をご紹介します。",
  openGraph: {
    title: "奥間 翼 | Portfolio",
    description: "Web開発と3DCG制作に取り組む奥間 翼のポートフォリオ。",
    type: "website",
    locale: "ja_JP",
    images: ["/portfolio-website-design.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "奥間 翼 | Portfolio",
    description: "Web開発と3DCG制作に取り組む奥間 翼のポートフォリオ。",
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
