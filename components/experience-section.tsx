import { ArrowRight, DatabaseZap, ExternalLink, FileCheck2, Monitor, ShoppingBag, Sparkles, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    label: "システム開発・プロジェクト管理",
    title: "研修動画システム開発のプロジェクトリーダー",
    icon: Users,
    challenge: "株式会社キャリッジリターンで、外国人労働者向け研修動画システムの開発に参画しています。",
    action: "プロジェクトリーダーとして、メンバーの進捗管理と顧客折衝を担当しています。",
    technologies: ["プロジェクト管理", "進捗管理", "顧客折衝"],
  },
  {
    label: "アプリ開発・システム保守",
    title: "就活アプリ開発・財産管理システム保守",
    icon: Monitor,
    challenge: "株式会社キャリッジリターンで、業務目的の異なる複数のシステム開発・保守に携わりました。",
    action: "大学生向け就活アプリの開発と、社内財産管理システムの保守を、それぞれのプロジェクトのメンバーとして担当しました。",
    technologies: ["アプリ開発", "システム保守", "チーム開発"],
  },
  {
    label: "広告・マーケティング",
    title: "広告文の自動生成で営業提案を支援",
    icon: Sparkles,
    challenge: "EC商品の紹介文や広告文の制作には、繰り返しの入力・作成作業がありました。",
    action: "PythonとOpenAI APIで商品説明文・広告文の自動生成プログラムを開発。提案が評価され、300万円規模の契約受注に貢献しました。",
    technologies: ["Python", "OpenAI API", "業務自動化"],
  },
  {
    label: "知財管理・業務改善",
    title: "知財管理データの移行を効率化",
    icon: DatabaseZap,
    challenge: "多数の知財案件がExcelで管理され、移行作業に手間がかかる状況でした。",
    action: "紙・Excelで管理されていた約3,000件の知財データを、知財管理ソフト「root ip」へ移行。Pythonで移行工程を自動化し、工数削減と作業精度の向上に貢献しました。",
    technologies: ["Python", "Excel", "root ip", "業務フロー改善"],
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
    label: "Web開発・EC運用（副業）",
    title: "KITTO ONE / Oki Femcare ECサイト",
    icon: ShoppingBag,
    challenge: "既存のECプラットフォームを活用しつつ、ブランドの世界観と購入体験を両立する必要がありました。",
    action: "副業でサイトの実装・改修を担当。W2のLiquidテンプレートや既存CMSの構造を把握し、ページ調整、表示の改善、決済導線の検証などに携わっています。",
    technologies: ["W2", "Liquid", "ECサイト", "運用改善"],
    url: "https://oki-femcare.com/",
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">背景</p>
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
                {experience.url && (
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-secondary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    公開サイトを見る <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-6 text-muted-foreground">
          ※公開済みのサイト以外については、守秘義務に配慮し案件名・顧客情報・詳細な業務データを掲載していません。
        </p>
      </div>
    </section>
  )
}
