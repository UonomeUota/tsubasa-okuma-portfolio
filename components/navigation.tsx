"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-foreground">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection("hero")}>
              ホーム
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              自己紹介
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              スキル
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("portfolio")}>
              作品集
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              コンタクト
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
