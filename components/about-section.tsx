import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">自己紹介</h2>
          <p className="text-muted-foreground text-lg text-pretty">私について詳しくご紹介します</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">学歴・経歴</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium">沖縄県立読谷高等学校</p>
                        <p className="text-sm text-muted-foreground">普通科特進クラス理系選択</p>
                      </div>
                      <Badge variant="secondary">2017-2020</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">公立大学法人静岡文化芸術大学　デザイン学部</p>
                        <p className="text-sm text-muted-foreground">インタラクション(3DCG/CAD プログラミング)専攻</p>
                      </div>
                      <Badge variant="secondary">2020-2025</Badge>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">国税専門官　理工デジタル採用</p>
                        <p className="text-sm text-muted-foreground">個人課税部門</p>
                      </div>
                      <Badge variant="outline">2025-</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">現在の取り組み</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      応用情報技術者試験に合格
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      React, Next.js の実践的な学習
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Three.js を使った3D表現の習得
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Tailwind CSS でのモダンなUI設計
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">私の強み</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">ITスキル × デザイン的発想</h4>
                    <p className="text-sm text-muted-foreground">
                      技術的な実装力と、ユーザー体験を重視したデザイン思考を組み合わせて、
                      使いやすく美しいWebアプリケーションの開発を目指しています。
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">継続的な学習姿勢</h4>
                    <p className="text-sm text-muted-foreground">
                      新しい技術やトレンドに敏感で、常に学習を続けています。
                      応用情報技術者試験の合格を皮切りに、さらなるスキルアップを図っています。
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-medium text-secondary mb-2">問題解決能力</h4>
                    <p className="text-sm text-muted-foreground">
                      複雑な課題に対して論理的にアプローチし、 創造的な解決策を見つけることを得意としています。
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
