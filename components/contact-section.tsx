"use client"

import type React from "react"
import { useState } from "react"
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactEmail = "tsubasaocarina@gmail.com"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/UonomeUota" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/tsubasa-okuma/" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/okuwing/" },
]

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Contact</p>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">お問い合わせ</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            お仕事のご相談やご質問がございましたら、お気軽にご連絡ください。
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    お名前 <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    返信先メールアドレス <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="yamada@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    ご相談内容 <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    placeholder="ご相談内容をご記入ください"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  disabled={status === "submitting"}
                >
                  <Send aria-hidden="true" />
                  {status === "submitting" ? "送信中..." : "送信する"}
                </Button>

                {status === "success" && (
                  <p className="text-center text-sm text-green-600" role="status">
                    お問い合わせありがとうございます。後日ご連絡いたします。
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-destructive" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>直接連絡</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-medium">メールアドレス</p>
                    <a href={`mailto:${contactEmail}`} className="break-all text-muted-foreground transition-colors hover:text-secondary">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="border-t pt-5">
                  <p className="mb-2 font-medium">ご連絡について</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    内容を確認後、順次ご返信します。技術的なご質問や制作のご相談も歓迎しています。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SNS・プロフィール</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border p-3 transition-all hover:border-secondary/50 hover:bg-secondary/5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <link.icon className="size-5" aria-hidden="true" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
