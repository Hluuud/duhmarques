"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Instagram, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "skills", "projetos", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Hluuud", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/luiz-eduardo-marques/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/duuh__marques/", label: "Instagram" },
    { icon: Mail, href: "mailto:luizeduardom58@gmail.com", label: "Email" },
  ]

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre Mim" },
    { id: "skills", label: "Skills" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
            >
              LEM
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 px-3 pt-4 border-t border-border">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <section id="inicio">
          <Hero onViewProjects={() => scrollToSection("projetos")} />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <section id="sobre">
          <About />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <section id="skills">
          <Skills />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <section id="projetos">
          <Projects />
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  )
}
