"use client"

import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28 md:py-24">
      <div className="relative z-10 container mx-auto grid items-center gap-14 px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Software Engineering · Process Improvement · Design</p>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-foreground">奥間 翼</span>
            <br />
            <span className="text-secondary text-2xl font-medium leading-relaxed md:text-3xl">
              課題を見つけ、仕組みを変え、
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              使いやすい形にする。
            </span>
          </h1>
          <p className="mb-8 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            広告・知財業務の自動化、Web・ECサイトの開発・改善を経験。
            現在は研修動画システム開発のプロジェクトリーダーを担当し、RustによるBIM/CADソフトも個人開発しています。
          </p>
          <ul className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-foreground/80 md:justify-start">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-secondary" aria-hidden="true" />業務改善を提案・実装</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-secondary" aria-hidden="true" />Web開発・顧客折衝</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-secondary" aria-hidden="true" />応用情報技術者</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              制作実績を見る <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              業務改善の実績 <ArrowDownRight className="ml-1 size-4" aria-hidden="true" />
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
