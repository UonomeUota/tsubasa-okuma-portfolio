"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">奥間　翼</span>
            <br />
            <span className="text-secondary text-2xl md:text-3xl font-normal">
              IT×デザインで価値を生む
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              エンジニア志望
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            React、Next.js、Three.jsを学習中。
            <br />
            このwebサイトはReact、Next.js、tailwindcssで作成しました。
            <br />
            基本情報技術者試験合格、応用情報技術者試験に向けて勉強中です。
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
            <div className="w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <img
                src="/profile_photo.webp"
                alt="奥間　翼のプロフィール写真"
                className="w-72 h-72 lg:w-[23.4rem] lg:h-[23.4rem] rounded-full object-cover border-4 border-card shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
