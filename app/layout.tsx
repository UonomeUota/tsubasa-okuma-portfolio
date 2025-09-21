import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react"
import Script from "next/script"
import AnimatedBackground from "@/components/animated-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "ポートフォリオ | IT エンジニア",
  description: "React, Next.js, Three.js を学習中のITエンジニアのポートフォリオサイト",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
