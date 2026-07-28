"use client"

import Image from "next/image"
import { useState } from "react"
import { Clock3, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectCategory = "web" | "3d" | "plugin"

type Project = {
  id: number
  title: string
  category: ProjectCategory
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  status?: "準備中"
}

const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    category: "web",
    description: "現在ご覧いただいているサイト。レスポンシブデザインとアニメーションを実装しています。",
    image: "/portfolio-website-design.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://tsubasa-okuma-portfolio.vercel.app/",
    githubUrl: "https://github.com/UonomeUota/tsubasa-okuma-portfolio",
  },
  {
    id: 2,
    title: "Noberu — みんなで紡ぐ物語SNS",
    category: "web",
    description: "短文を一人ずつ紡ぎ、みんなで一つの小説をつくるSNSです。",
    image: "/noberu-logo-new.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://noberu-sns.vercel.app/",
    githubUrl: "https://github.com/UonomeUota/noberu-sns",
  },
  {
    id: 3,
    title: "未来祀り",
    category: "web",
    description: "人口減少とAI自治が進む近未来の町を舞台にした、架空アニメの公式サイトです。",
    image: "/comfyui-00005.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://festival-of-tomorrow.vercel.app/",
    githubUrl: "https://github.com/UonomeUota/Festival-of-Tomorrow",
  },
  {
    id: 5,
    title: "ASYMMETRY",
    category: "3d",
    description: "BlenderとUnreal Engine 5で制作したアニメーション映画のティザー映像です。",
    image: "/asymmetry-poster.webp",
    technologies: ["Blender", "Unreal Engine 5", "Photoshop"],
    demoUrl: "https://youtu.be/wSsrHT7VnbY",
  },
  {
    id: 6,
    title: "Kuwahara Filter for DaVinci Resolve",
    category: "plugin",
    description: "動画や画像に油絵風の効果を加える、DaVinci Resolve向けカスタムFuseです。",
    image: "/placeholder.svg",
    technologies: ["Lua", "DaVinci Resolve", "Fusion", "Fuse"],
    githubUrl: "https://github.com/UonomeUota/KuwaharaFilterForDavinciResolve",
  },
  {
    id: 7,
    title: "Medical Access Risk Map",
    category: "web",
    description: "医療機関への到達時間を地図上で可視化する、医療アクセスのハザードマップです。",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://v0-medical-access-risk-map.vercel.app/",
  },
  {
    id: 8,
    title: "Licaria",
    category: "web",
    description: "原作者と二次利用者をライセンスでつなぐプラットフォームです。",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://v0-licaria.vercel.app/",
  },
]

const categories: Array<{ id: "all" | ProjectCategory; label: string }> = [
  { id: "all", label: "すべて" },
  { id: "web", label: "Webアプリ" },
  { id: "3d", label: "3DCG作品" },
  { id: "plugin", label: "プラグイン" },
]

const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  "3d": "3DCG",
  plugin: "プラグイン",
}

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProjectCategory>("all")
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Selected works</p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">作品集</h2>
          <p className="text-pretty text-lg text-muted-foreground">Webアプリケーション、3DCG作品、プラグインの制作実績</p>
        </div>

        <div className="mb-10 flex justify-center">
          <div aria-label="作品カテゴリ" className="flex max-w-full flex-wrap justify-center gap-2 rounded-xl border bg-card p-1.5">
            {categories.map((category) => (
              <Button
                key={category.id}
                type="button"
                size="sm"
                variant={selectedCategory === category.id ? "default" : "ghost"}
                aria-pressed={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-4 sm:px-5"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group min-w-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title}のサムネイル`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="min-w-0 text-lg leading-snug">{project.title}</CardTitle>
                  <Badge variant={project.category === "web" ? "default" : project.category === "plugin" ? "outline" : "secondary"}>
                    {categoryLabels[project.category]}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-pretty text-sm leading-6 text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 pt-2">
                  {project.demoUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}を見る`}>
                        <ExternalLink aria-hidden="true" />
                        作品を見る
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}のコードを見る`}>
                        <Github aria-hidden="true" />
                        コード
                      </a>
                    </Button>
                  )}
                  {project.status && (
                    <div className="flex h-8 w-full items-center justify-center gap-2 rounded-md border bg-muted/50 px-3 text-sm text-muted-foreground">
                      <Clock3 className="size-4" aria-hidden="true" />
                      詳細ページを準備中
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
