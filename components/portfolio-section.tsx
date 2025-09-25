"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "ポートフォリオサイト",
      category: "web",
      description: "現在ご覧いただいているサイト。レスポンシブデザイン、アニメーション実装。",
      image: "/portfolio-website-design.webp",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://tsubasa-okuma-portfolio.vercel.app/",
      githubUrl: "https://github.com/UonomeUota/tsubasa-okuma-portfolio",
    },
    {
      id: 2,
      title: "Noberu-みんなで紡ぐ物語SNS-",
      category: "web",
      description: "短文を各人が紡いでいき一つの小説となるようなSNS",
      image: "/noberu-logo-新.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://noberu-sns.vercel.app/",
      githubUrl: "https://github.com/UonomeUota/noberu-sns",
    },
    {
      id: 3,
      title: "未来祀り",
      category: "web",
      description: "架空のアニメの公式サイト。近未来の日本。人口減少とAIによる自治が進む地方の町。そこには古来から続く奇祭「未来祀り」が残されており、町の未来を選ぶ儀式とされている。",
      image: "/ComfyUI_00005__修正版_1.png",
      technologies: ["React", "TypeScript",  "Tailwind CSS"],
      demoUrl: "https://festival-of-tomorrow.vercel.app/",
      githubUrl: "https://github.com/UonomeUota/Festival-of-Tomorrow",
    },
    {
      id: 4,
      title: "建築ビジュアライゼーション※現在修正中です。",
      category: "3d",
      description: "BlenderとFusion 360で制作した建築物の3Dモデル。リアルなライティングとマテリアル。",
      image: "/architectural-visualization.png",
      technologies: ["Blender", "Fusion 360", "Photoshop",],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "ASYMMETRY",
      category: "3d",
      description: "BlenderとUnreal Engine5を用いて制作したアニメーション映画のティザー映像",
      image: "/ASYMMETRY　ポスター のコピー.webp",
      technologies: ["Blender", "Fusion 360", "Photoshop",],
      demoUrl: "https://youtu.be/wSsrHT7VnbY",
    },
    {
      id: 6,
      title: "Kuwahara Filter for DaVinci Resolve",
      category: "Plugin Development",
      description: "DaVinci Resolve用のカスタムFuse実装による桑原フィルター。動画や画像に油絵風のアート効果を適用します。",
      image: "/placeholder.svg",
      technologies: ["Lua", "DaVinci Resolve", "Fusion", "Fuse"],
      demoUrl: "https://github.com/UonomeUota/KuwaharaFilterForDavinciResolve",
      githubUrl: "https://github.com/UonomeUota/KuwaharaFilterForDavinciResolve",
    },
  ]

  const categories = [
    { id: "all", label: "すべて" },
    { id: "web", label: "Webアプリ" },
    { id: "3d", label: "3DCG作品" },
    { id: "Plugin Development", label: "プラグイン製作" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30 scroll-mt-24 md:scroll-mt-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">作品集</h2>
          <p className="text-muted-foreground text-lg text-pretty">これまでに制作したWebアプリケーション、3DCG作品、プラグイン</p>
        </div>

        {/* カテゴリフィルター */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-card rounded-lg border">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <Badge variant={project.category === "web" ? "default" : project.category === "video" ? "destructive" : project.category === "Plugin Development" ? "outline" : "secondary"}>
                    {project.category === "web" ? "Web" : project.category === "video" ? "映像" : project.category === "Plugin Development" ? "プラグイン" : "3DCG"}
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      見る
                    </a>
                  </Button>
                  {(project.category === "web" || project.category === "video" || project.category === "Plugin Development") && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        コード
                      </a>
                    </Button>
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
