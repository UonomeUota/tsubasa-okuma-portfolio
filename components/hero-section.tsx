"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28 md:py-24">
      <div className="relative z-10 container mx-auto grid items-center gap-14 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Web Development & 3DCG</p>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-foreground">奥間 翼</span>
            <br />
            <span className="text-secondary text-2xl md:text-3xl font-normal">
              IT×デザインで価値を生む
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              フルスタックエンジニア
            </span>
          </h1>
          <p className="mb-8 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            React、Next.js、Three.jsを学習中。
            <br />
            Web開発と3DCGの両方から、伝わる体験づくりに取り組んでいます。
            <br />
            応用情報技術者試験に合格し、高度情報技術者試験・弁理士試験に向けて勉強中です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              作品を見る
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              お問い合わせ
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="relative flex size-72 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 sm:size-80 lg:size-[26rem]">
              <div className="relative size-[90%] overflow-hidden rounded-full border-4 border-card shadow-2xl">
                <Image
                  src="/profile_photo.webp"
                  alt="奥間 翼のプロフィール写真"
                  fill
                  priority
                  sizes="(min-width: 1024px) 374px, (min-width: 640px) 288px, 260px"
                  className="object-cover"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute -right-2 -top-3 flex size-14 items-center justify-center rounded-full bg-secondary shadow-lg sm:-right-4 sm:size-16">
              <span className="text-2xl">💻</span>
            </div>
            <div aria-hidden="true" className="absolute -bottom-3 -left-2 flex size-14 items-center justify-center rounded-full bg-secondary shadow-lg sm:-left-4 sm:size-16">
              <span className="text-2xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
