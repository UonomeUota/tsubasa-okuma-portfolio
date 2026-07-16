import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const webSkills = [
    { name: "React", level: 60, description: "簡単な静的WEBサイトが作れます。" },
    { name: "Next.js", level: 60, description: "AIを用いてコードを書きウェブサイトが作れます。" },
    { name: "Tailwind CSS", level: 50, description: "AIを用いて簡単なデザインが作成できます。" },
    { name: "TypeScript", level: 70, description: "入門書を読み終えました。" },
  ]

  const threeDSkills = [
    { name: "Three.js", level: 80, description: "簡単な3Dシーンが作れます。" },
    { name: "Blender", level: 80, description: "キャラクターや背景のモデリング、アニメーションを作れます。" },
    { name: "UE5", level: 70, description: "Unreal Engine 5 でのシーン制作や映像表現ができます。" },
  ]

  const certifications = [
    { name: "危険物取扱者乙種4類", status: "取得済み", year: "2017年" },
    { name: "基本情報技術者", status: "取得済み", year: "2021年" },
    { name: "普通自動車免許", status: "取得済み", year: "2021年" },
    { name: "応用情報技術者", status: "取得済み", year: "2025年" },
    { name: "知的財産管理技能検定３級", status: "取得済み", year: "2026年" },
    { name: "高度情報技術者試験", status: "勉強中", year: "2027年" },
    { name: "弁理士試験", status: "勉強中", year: "2027年" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">スキル</h2>
          <p className="text-muted-foreground text-lg text-pretty">現在学習中の技術スタックと取得資格</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Web開発スキル */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Web開発
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {webSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="!bg-[#D5545D]" />
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 3DCG制作 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                3DCG制作
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {threeDSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="!bg-[#D5545D]" />
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">作品展示スペース</h4>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://youtu.be/wSsrHT7VnbY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-square rounded border overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/asymmetry-poster.jpg"
                      alt="ASYMMETRY ポスター"
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <a
                    href="https://youtu.be/E7KNv9_7j5Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-square rounded border overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/romance-nakagawa.jpg"
                      alt="3D作品サンプル2"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 資格 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                資格・認定
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{cert.name}</h4>
                    <Badge
                      variant={
                        cert.status === "取得済み" ? "default" : cert.status === "勉強中" ? "secondary" : cert.status === "試験結果待ち" ? "outline" : "destructive"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
