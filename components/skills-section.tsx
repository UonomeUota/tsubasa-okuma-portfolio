import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillGroups = [
  {
    icon: "💻",
    title: "Webアプリケーション開発",
    description: "個人制作やWeb開発で使用している技術",
    skills: [
      { name: "TypeScript / JavaScript", use: "画面・機能の実装" },
      { name: "React / Next.js", use: "Webアプリケーション制作" },
      { name: "HTML / CSS / Tailwind CSS", use: "UI設計・レスポンシブ対応" },
      { name: "Git / GitHub", use: "ソースコード管理" },
    ],
  },
  {
    icon: "🔧",
    title: "業務改善・運用",
    description: "実務の課題解決に使ったスキル",
    skills: [
      { name: "Python / OpenAI API", use: "広告文の生成・知財管理データの移行" },
      { name: "Excel / マクロ", use: "管理データの整理・定型業務の自動化" },
      { name: "ECサイト / CMS", use: "既存サイトの改修・運用支援" },
      { name: "業務分析・要件整理", use: "課題の洗い出しと改善提案" },
    ],
  },
  {
    icon: "🎨",
    title: "デザイン・3DCG",
    description: "デザイン学部での学びと自主制作の経験",
    skills: [
      { name: "Blender", use: "モデリング・アニメーション" },
      { name: "Unreal Engine 5", use: "3Dシーン・映像表現" },
      { name: "Three.js", use: "Web上の3D表現" },
      { name: "DaVinci Resolve", use: "映像編集・カスタムFuse制作" },
    ],
  },
]

const certifications = [
  { name: "応用情報技術者試験", year: "2025年", category: "IT" },
  { name: "情報セキュリティマネジメント試験", year: "2026年", category: "セキュリティ" },
  { name: "基本情報技術者試験", year: "2022年", category: "IT" },
  { name: "知的財産管理技能検定3級", year: "2026年", category: "知的財産" },
  { name: "日商簿記検定3級", year: "2025年", category: "会計" },
  { name: "ITパスポート試験", year: "2021年", category: "IT" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Skills & certifications</p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">技術・資格</h2>
          <p className="text-pretty text-lg text-muted-foreground">数値による自己評価ではなく、使ってきた場面と合わせて紹介します。</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="h-full">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <span className="text-2xl" aria-hidden="true">{group.icon}</span>
                  {group.title}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border/70">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="py-3 first:pt-0 last:pb-0">
                      <p className="font-medium">{skill.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{skill.use}</p>
                    </li>
                  ))}
                </ul>
                {group.title === "デザイン・3DCG" && (
                  <div className="mt-5 rounded-lg bg-muted/50 p-3">
                    <p className="mb-3 text-sm font-medium">映像作品</p>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="https://youtu.be/wSsrHT7VnbY" target="_blank" rel="noopener noreferrer" aria-label="ASYMMETRYの映像を見る" className="group block overflow-hidden rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <Image src="/asymmetry-poster.jpg" alt="ASYMMETRY ポスター" width={320} height={240} className="aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-80" />
                      </a>
                      <a href="https://youtu.be/E7KNv9_7j5Y" target="_blank" rel="noopener noreferrer" aria-label="3Dアニメーション作品を見る" className="group block overflow-hidden rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <Image src="/romance-nakagawa.jpg" alt="3Dアニメーション作品" width={320} height={240} className="aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-80" />
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold">取得資格</h3>
            <p className="text-sm text-muted-foreground">取得済みの資格のみを掲載</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col justify-between gap-3 rounded-xl border p-4">
                <p className="font-medium leading-6">{cert.name}</p>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary">{cert.category}</Badge>
                  <span className="text-xs text-muted-foreground">{cert.year} 取得</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
