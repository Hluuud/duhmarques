"use client"

import { ExternalLink, Github, Terminal as TerminalIcon } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Smart Monitoring & Auto-Healing Platform",
      description:
        "Plataforma de observabilidade containerizada que integra Zabbix, Prometheus e Grafana para monitoramento de infraestrutura e coleta de métricas, com automações via n8n que respondem a incidentes sozinhas — reiniciando serviços com falha e disparando alertas sem intervenção manual. Todo o stack sobe com um único docker-compose up -d.",
      tags: ["Docker", "Zabbix", "Prometheus", "Grafana", "n8n"],
      github: "https://github.com/Hluuud/Smart-Monitoring",
      demo: null,
    },
    {
      title: "TalentHub",
      description:
        "Plataforma de gestão de talentos e recrutamento, com dashboards interativos para acompanhar candidatos e vagas em tempo real. Construída com Next.js e React, componentes acessíveis via shadcn/ui e cobertura de testes end-to-end com Playwright.",
      tags: ["Next.js", "React", "shadcn/ui", "Recharts", "Playwright"],
      github: "https://github.com/Hluuud/TalentHub",
      demo: 'https://talent-hub-vexis.vercel.app/',
    },
    {
      title: "Fila de Espera",
      description:
        "Sistema de gerenciamento de filas de espera que consulta uma API externa para organizar e acompanhar o atendimento em tempo real, com formulários validados (React Hook Form + Zod) e visualização de dados via Recharts.",
      tags: ["Next.js", "React Hook Form", "Zod", "API REST"],
      github: "https://github.com/Hluuud/Fila_de_Espera",
      demo: null,
    },
    {
      title: "LP Advogados",
      description:
        "Landing page institucional para escritório de advocacia, focada em performance e conversão, construída com Next.js e Tailwind CSS, com Vercel Analytics para acompanhar o comportamento dos visitantes.",
      tags: ["Next.js", "Tailwind CSS", "Vercel Analytics"],
      github: "https://github.com/Hluuud/lp-advogados",
      demo: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Projetos</h2>
          <p className="text-muted-foreground text-lg">Alguns dos meus trabalhos recentes</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/30 hover:animate-pulse-glow transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/10 to-muted flex flex-col items-center justify-center gap-3 font-mono text-muted-foreground group-hover:from-accent/20 transition-colors duration-500">
                <TerminalIcon className="w-10 h-10 text-accent/70" />
                <p className="text-sm px-4 text-center text-pretty">
                  $ git clone {project.github.replace("https://", "")}
                </p>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-accent/30 text-accent border border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Código
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/50 cursor-default">
                      <ExternalLink className="w-5 h-5" />
                      Demo em breve
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
