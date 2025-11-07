"use client"

import { useEffect, useState } from "react"

interface HeroProps {
  onViewProjects: () => void
}

export function Hero({ onViewProjects }: HeroProps) {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Automação de Processos | Indústria 4.0 | Infraestrutura e IoT"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-2">
            <p className="text-accent text-sm sm:text-base font-mono tracking-wider uppercase">Olá, eu sou</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-balance tracking-tight text-foreground">
              Luiz Eduardo
              <br />
              <span className="text-accent animate-glow">Marques</span>
            </h1>
          </div>

          <div className="h-20 sm:h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-muted-foreground text-pretty font-light">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button
            onClick={onViewProjects}
            className="group inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Ver Projetos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        {/* Removida a seta que indicava scroll para baixo */}
      </div>
    </div>
  )
}
