"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

type SubmitStatus = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!FORMSPREE_ID) {
      setStatus("error")
      setErrorMessage(
        "フォームの送信先が設定されていません。環境変数 NEXT_PUBLIC_FORMSPREE_ID を設定してください。",
      )
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const data = await response.json().catch(() => null)
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ??
          "送信に失敗しました。時間をおいて再度お試しください。"
        setStatus("error")
        setErrorMessage(message)
      }
    } catch {
      setStatus("error")
      setErrorMessage("ネットワークエラーが発生しました。時間をおいて再度お試しください。")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/UonomeUota",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/tsubasa-okuma/",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/okuwing/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:tsubasaocarina@gmail.com",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">コンタクト</h2>
          <p className="text-muted-foreground text-lg text-pretty">
            お仕事のご相談やご質問がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* お問い合わせフォーム */}
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    お名前 <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    メールアドレス <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="yamada@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    メッセージ <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="お問い合わせ内容をご記入ください。"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "送信中..." : "送信する"}
                </Button>

                {status === "success" && (
                  <p className="text-sm text-green-600" role="status">
                    お問い合わせありがとうございます。後日ご連絡いたします。
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* 連絡先情報 */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>直接連絡</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium">メールアドレス</p>
                    <a
                      href="mailto:tsubasaocarina@gmail.com"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      tsubasaocarina@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-medium mb-3">返信について</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 通常24時間以内にご返信いたします</li>
                    <li>• お急ぎの場合は件名に【急】とご記載ください</li>
                    <li>• 技術的なご質問も歓迎です</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SNS・プロフィール</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg border hover:border-secondary/50 transition-all ${link.color}`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    GitHubでは学習中のプロジェクトや実験的なコードを公開しています。 ぜひご覧ください！
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
