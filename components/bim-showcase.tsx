"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Layers3, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const screenshots = [
  {
    src: "/tsugilith/model-3d.png",
    title: "3Dモデル",
    alt: "Tsugilithの3D操作画面。壁、窓、ドア、床、柱、梁と、右側の部材プロパティを表示",
    caption: "壁・窓・柱・梁などの建築部材を3Dで確認。部材一覧とプロパティを並べて編集できます。",
    width: 1440,
    height: 900,
  },
  {
    src: "/tsugilith/floor-plan.png",
    title: "平面図",
    alt: "Tsugilithの平面図操作画面。壁の寸法、階の選択、部材ツール、プロジェクトブラウザーを表示",
    caption: "平面図で壁や床の配置と寸法を確認。階や部材を選び、数値で編集するための画面です。",
    width: 1366,
    height: 768,
  },
  {
    src: "/tsugilith/about-logo.png",
    title: "ロゴ・About画面",
    alt: "TsugilithのAbout画面。青と水色のシンボル、TSUGILITHのロゴと開発版の説明を表示",
    caption: "アプリ内のAbout画面。Tsugilithのロゴと、建築・土木向けBIM/CADの開発版であることを表示しています。",
    width: 1440,
    height: 900,
  },
]

const technologies = ["Rust", "Qt / QML", "C++", "BIM / CAD"]

export function BimShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = screenshots[selectedIndex]

  const changeScreenshot = (direction: number) => {
    setSelectedIndex((current) => (current + direction + screenshots.length) % screenshots.length)
  }

  return (
    <Card id="tsugilith" className="mb-8 min-w-0 scroll-mt-24 overflow-hidden py-0">
      <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <div className="min-w-0 border-b bg-muted/40 p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-medium">開発中の操作画面</p>
            <span className="text-xs text-muted-foreground">画像をタップして拡大</span>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative block aspect-[8/5] w-full overflow-hidden rounded-lg border bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Tsugilithの${selected.title}を拡大する`}
              >
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-foreground/90 px-2.5 py-1.5 text-xs text-background shadow-sm transition-colors group-hover:bg-foreground">
                  <Expand className="size-3.5" aria-hidden="true" /> 拡大
                </span>
              </button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="max-h-[90dvh] overflow-y-auto p-4 sm:max-w-6xl sm:p-6">
              <DialogClose asChild>
                <Button variant="ghost" size="icon" aria-label="画像を閉じる" className="absolute right-2 top-2 size-11">
                  <X className="size-5" aria-hidden="true" />
                </Button>
              </DialogClose>
              <DialogHeader className="pr-10 text-left">
                <DialogTitle>Tsugilith — {selected.title}</DialogTitle>
                <DialogDescription>{selected.caption}</DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded-lg border bg-white">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  width={selected.width}
                  height={selected.height}
                  sizes="100vw"
                  className="h-auto max-h-[65dvh] w-full object-contain"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3" aria-label="拡大画像の切り替え">
                  <Button variant="outline" size="icon" aria-label="前の画像" onClick={() => changeScreenshot(-1)}>
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </Button>
                  <span className="text-sm tabular-nums text-muted-foreground" aria-live="polite">{selectedIndex + 1} / {screenshots.length}</span>
                  <Button variant="outline" size="icon" aria-label="次の画像" onClick={() => changeScreenshot(1)}>
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={selected.src} target="_blank" rel="noopener noreferrer">
                    原寸画像を開く <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3" role="group" aria-label="Tsugilithのスクリーンショット">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-pressed={selectedIndex === index}
                className={`min-w-0 overflow-hidden rounded-md border p-1.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${selectedIndex === index ? "border-secondary bg-secondary/10" : "border-border bg-card hover:border-secondary/60"}`}
              >
                <span className="relative block aspect-[8/5] overflow-hidden rounded-sm border bg-white">
                  <Image src={screenshot.src} alt="" fill sizes="(min-width: 1024px) 20vw, 33vw" className="object-contain" />
                </span>
                <span className="mt-1.5 block text-center text-[11px] font-medium leading-5 sm:text-xs">{screenshot.title}</span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-6 text-muted-foreground" aria-live="polite">{selected.caption}</p>
        </div>

        <div className="flex min-w-0 flex-col gap-5 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">BIM / CAD</Badge>
            <Badge variant="outline">個人開発・開発中</Badge>
          </div>
          <Image src="/tsugilith/wordmark.svg" alt="TSUGILITH ロゴ" width={1320} height={425} className="h-auto w-full max-w-64" />
          <div>
            <h3 className="text-xl font-semibold leading-snug sm:text-2xl">Tsugilith（ツギリス）</h3>
            <p className="mt-2 text-sm font-medium text-secondary">建築のためのデスクトップBIM/CAD</p>
          </div>
          <p className="text-pretty text-sm leading-7 text-muted-foreground">
            将来のオープンソース公開を目指して個人開発中。Rustを中核にQt/QMLでUIを構築し、建築部材の配置から平面図・3D表示、数値編集までを試作しています。
          </p>
          <ul className="space-y-2.5 text-sm leading-6">
            <li className="flex items-start gap-2"><Layers3 className="mt-1 size-4 shrink-0 text-secondary" aria-hidden="true" />壁・床・柱・梁・窓・ドアの配置</li>
            <li className="flex items-start gap-2"><Layers3 className="mt-1 size-4 shrink-0 text-secondary" aria-hidden="true" />平面図と3Dビューによる形状の確認</li>
            <li className="flex items-start gap-2"><Layers3 className="mt-1 size-4 shrink-0 text-secondary" aria-hidden="true" />数値編集・Undo/Redoの試作</li>
          </ul>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {technologies.map((technology) => <Badge key={technology} variant="outline" className="font-normal">{technology}</Badge>)}
          </div>
        </div>
      </div>
    </Card>
  )
}
