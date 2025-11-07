"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Monitoramento IoT com Node-RED e Grafana",
      description:
        "Sistema completo de monitoramento em tempo real de sensores industriais com dashboards interativos.",
      image: "/industrial-iot-dashboard-grafana.jpg",
      tags: ["Node-RED", "Grafana", "MQTT", "InfluxDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Automação de Backup em Servidor Linux",
      description: "Scripts automatizados para backup incremental e sincronização de dados críticos em servidores.",
      image: "/linux-server-automation-terminal.jpg",
      tags: ["Bash", "Linux", "Cron", "Rsync"],
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Sistema de Controle de Produção",
      description: "Plataforma web para controle e monitoramento de linha de produção com comunicação MQTT.",
      image: "/industrial-production-control-system.jpg",
      tags: ["Python", "MQTT", "Flask", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Dashboard de Análise de Rede",
      description: "Ferramenta de visualização e análise de tráfego de rede com alertas em tempo real.",
      image: "/network-monitoring-dashboard-dark.jpg",
      tags: ["Python", "Grafana", "Mikrotik", "API"],
      github: "https://github.com",
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
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
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
