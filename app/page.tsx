import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <footer className="border-t border-border/70 bg-card/60 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tsubasa Okuma</p>
      </footer>
    </main>
  )
}
