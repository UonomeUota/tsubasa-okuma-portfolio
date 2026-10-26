import { ArrowRight, DatabaseZap, FileCheck2, ShoppingBag, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    label: "広告・マーケティング",
    title: "広告文の自動生成で営業提案を支援",
    icon: Sparkles,
    challenge: "EC商品の紹介文や広告文の制作には、繰り返しの入力・作成作業がありました。",
    action: "PythonとOpenAI APIを使った自動生成プログラムを制作。提案活動を支え、契約受注に貢献しました。",
    technologies: ["Python", "OpenAI API", "業務自動化"],
  },
  {
    label: "知財管理・業務改善",
    title: "知財管理データの移行を効率化",
    icon: DatabaseZap,
    challenge: "多数の知財案件がExcelで管理され、移行作業に手間がかかる状況でした。",
    action: "数千件規模の紙・Excel管理データを、Python等を用いて知財管理ソフトへ移行する工程を自動化しました。",
    technologies: ["Python", "Excel", "業務フロー改善"],
  },
  {
    label: "知財管理・業務改善",
    title: "クライアント向け文書作成を自動化",
    icon: FileCheck2,
    challenge: "定型的な書類作成に人手と確認作業が必要でした。",
    action: "作業工程を整理し、クライアントに送付する文書の作成を自動化。日常業務の省力化に取り組みました。",
    technologies: ["業務自動化", "文書作成", "要件整理"],
  },
  {
    label: "Web開発・EC運用",
    title: "ECサイトの改修・運用を支援",
    icon: ShoppingBag,
    challenge: "継続的に運用するECサイトでは、表示や機能の改善が必要になります。",
    action: "副業でECサイトの修正・改善に携わり、既存システムの構造を把握しながら実装・調整しています。",
    technologies: ["ECサイト", "Web実装", "運用改善"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Professional experience</p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">業務改善・開発の実績</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            見つけた課題を、具体的な仕組みとして形にする。
            実務での取り組みを、背景と担当内容に分けて紹介します。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <Card key={experience.title} className="flex h-full flex-col border-border/80 transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <experience.icon className="size-6" aria-hidden="true" />
                  </div>
                  <Badge variant="secondary">{experience.label}</Badge>
                </div>
                <CardTitle className="text-xl leading-snug">{experience.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">課題</p>
                  <p className="text-sm leading-7 text-foreground/90">{experience.challenge}</p>
                </div>
                <div className="space-y-2 rounded-lg bg-secondary/5 p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                    <ArrowRight className="size-4" aria-hidden="true" /> 取り組み
                  </p>
                  <p className="text-sm leading-7">{experience.action}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {experience.technologies.map((technology) => (
                    <Badge key={technology} variant="outline" className="font-normal">{technology}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-6 text-muted-foreground">
          ※守秘義務に配慮し、案件名・顧客情報・詳細な業務データは掲載していません。
        </p>
      </div>
    </section>
  )
}
