import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">About me</p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">自己紹介</h2>
          <p className="text-muted-foreground text-lg text-pretty">デザインの素養を土台に、行政・知財・ITの現場を経験してきました。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">学歴・経歴</h3>
                  <div className="space-y-3">
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">沖縄県立読谷高等学校</p>
                        <p className="text-sm text-muted-foreground">普通科特進クラス理系選択</p>
                      </div>
                      <Badge variant="secondary">2017-2020</Badge>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">公立大学法人静岡文化芸術大学　デザイン学部</p>
                        <p className="text-sm text-muted-foreground">インタラクション(3DCG/CAD プログラミング)専攻</p>
                      </div>
                      <Badge variant="secondary">2020-2025</Badge>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">福島特許事務所</p>
                        <p className="text-sm text-muted-foreground">知財管理、先行技術調査、業務効率化・自動化</p>
                      </div>
                      <Badge variant="secondary">2024.03–07</Badge>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">国税専門官　理工デジタル採用</p>
                        <p className="text-sm text-muted-foreground">個人課税部門</p>
                      </div>
                      <Badge variant="secondary">2025.04–2026.05</Badge>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">株式会社キャリッジリターン</p>
                        <p className="text-sm text-muted-foreground">ITエンジニア／Webシステム開発</p>
                      </div>
                      <Badge variant="outline">2026.06–</Badge>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                      <div>
                        <p className="font-medium">副業・個人開発</p>
                        <p className="text-sm text-muted-foreground">ECサイトの改修・改善、Webアプリ制作</p>
                      </div>
                      <Badge variant="outline">2026.08–</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">主な経験領域</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Excel管理データの移行と定型業務の自動化
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      TypeScript・React・Next.jsを用いたWeb制作
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      ECサイトの改修・運用支援
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      3DCG・映像制作、UI/UXを意識した設計
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-secondary/5 to-accent/5">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">私の強み</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">制作を一貫して手がける総合力</h4>
                    <p className="text-sm text-muted-foreground">
                      特許事務所では、既存の管理フローを見直し、データ移行や文書作成の自動化を自ら提案・実装しました。
                      目の前の作業をこなすだけでなく、仕組みそのものを改善することを大切にしています。
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">ITスキル × デザイン的発想</h4>
                    <p className="text-sm text-muted-foreground">
                      大学で学んだデザインや3DCGの知識を、Web制作にも応用しています。
                      見た目だけでなく、情報が伝わりやすく、利用者が迷わない設計を重視します。
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">継続的な学習姿勢</h4>
                    <p className="text-sm text-muted-foreground">
                      応用情報技術者・情報セキュリティマネジメントなどの資格を取得。
                      Web開発に加え、セキュリティや知的財産の知識も深めています。
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">問題解決能力</h4>
                    <p className="text-sm text-muted-foreground">
                      業務担当者の困りごとを整理し、技術と運用の両面から実現可能な改善策を考えることが得意です。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
