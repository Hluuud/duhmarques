"use client"

import { motion } from "framer-motion"
import {
  Cpu,
  Network,
  Cloud,
  Server,
  Shield,
  GitBranch,
  Terminal,
  Database,
  Brain,
  Boxes,
  Bot,
  Settings,
  Container,
  Code,
  BarChart3,
  Github,
  Lock,
  Zap,
  FileCode,
  Wifi,
  Camera,
  LineChart,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Infraestrutura & Cloud",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Docker & Kubernetes", icon: <Container className="w-5 h-5" />, level: "core" as const },
        { name: "Linux & Windows Server", icon: <Terminal className="w-5 h-5" />, level: "core" as const },
        { name: "Azure & ADDS", icon: <Cloud className="w-5 h-5" />, level: "core" as const },
        { name: "VMs & Containers", icon: <Boxes className="w-5 h-5" />, level: "core" as const },
        { name: "Nginx", icon: <Network className="w-5 h-5" />, level: "advanced" as const },
        { name: "Traefik", icon: <Lock className="w-5 h-5" /> },
      ],
    },
    {
      title: "Automação",
      icon: <Bot className="w-5 h-5" />,
      skills: [
        { name: "Node-RED", icon: <Network className="w-5 h-5" />, level: "core" as const },
        { name: "N8N", icon: <GitBranch className="w-5 h-5" />, level: "core" as const },
        { name: "MQTT", icon: <Server className="w-5 h-5" />, level: "core" as const },
        { name: "Power Automate", icon: <Cpu className="w-5 h-5" />, level: "advanced" as const },
        { name: "Ladder", icon: <Bot className="w-5 h-5" /> },
        { name: "Langchain", icon: <Settings className="w-5 h-5" /> },
      ],
    },
    {
      title: "Segurança & Redes",
      icon: <Shield className="w-5 h-5" />,
      skills: [
        { name: "Firewall", icon: <Shield className="w-5 h-5" />, level: "core" as const },
        { name: "VLANs & VPNs", icon: <Lock className="w-5 h-5" />, level: "core" as const },
        { name: "Segmentação de redes", icon: <Wifi className="w-5 h-5" />, level: "advanced" as const },
        { name: "Modelo OSI", icon: <Server className="w-5 h-5" /> },
        { name: "CFTV", icon: <Camera className="w-5 h-5" /> },
      ],
    },
    {
      title: "Dados & IA",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "RAG", icon: <Cloud className="w-5 h-5" />, level: "core" as const },
        { name: "Chatbots", icon: <Database className="w-5 h-5" />, level: "core" as const },
        { name: "MCP Server", icon: <BarChart3 className="w-5 h-5" />, level: "core" as const },
        { name: "Machine Learning", icon: <Brain className="w-5 h-5" />, level: "advanced" as const },
        { name: "Banco de dados", icon: <Database className="w-5 h-5" />, level: "advanced" as const },
        { name: "Regressão & Modelagem", icon: <LineChart className="w-5 h-5" /> },
      ],
    },
    {
      title: "Programação & Scripts",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "FastAPI", icon: <Network className="w-5 h-5" />, level: "core" as const },
        { name: "Python", icon: <Code className="w-5 h-5" />, level: "advanced" as const },
        { name: "PowerShell", icon: <Zap className="w-5 h-5" />, level: "advanced" as const },
        { name: "JavaScript", icon: <GitBranch className="w-5 h-5" /> },
        { name: "Bash", icon: <Terminal className="w-5 h-5" /> },
      ],
    },
    {
      title: "Softwares & Gestão",
      icon: <Github className="w-5 h-5" />,
      skills: [
        { name: "Grafana", icon: <BarChart3 className="w-5 h-5" />, level: "core" as const },
        { name: "Zabbix", icon: <Shield className="w-5 h-5" />, level: "core" as const },
        { name: "Git & GitHub", icon: <Github className="w-5 h-5" />, level: "advanced" as const },
        { name: "Terraform", icon: <Database className="w-5 h-5" />, level: "advanced" as const },
        { name: "Ansible", icon: <FileCode className="w-5 h-5" /> },
      ],
    },
  ]

  const tierStyles = {
    core: {
      width: "92%",
      bar: "bg-accent",
      icon: "text-accent",
      text: "font-semibold text-foreground",
      badge: true,
    },
    advanced: {
      width: "80%",
      bar: "bg-accent/70",
      icon: "text-accent/80",
      text: "font-medium text-foreground",
      badge: false,
    },
    standard: {
      width: "55%",
      bar: "bg-accent/40",
      icon: "text-muted-foreground",
      text: "font-medium text-muted-foreground",
      badge: false,
    },
  } as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Habilidades & Ferramentas</h2>
          <p className="text-muted-foreground text-lg">Tecnologias e competências que domino</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-accent">{category.icon}</span>
                  <h3 className="text-lg font-bold font-mono text-foreground">{category.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {category.skills.length} ferramentas
                </div>
              </div>

              <div className="p-6 space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const tier = tierStyles[skill.level ?? "standard"]

                  return (
                    <div
                      key={skillIndex}
                      className="group/skill -mx-3 px-3 py-2 rounded-lg hover:bg-muted/40 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className={tier.icon}>{skill.icon}</span>
                          <span className={`text-sm ${tier.text}`}>{skill.name}</span>
                        </div>
                        {tier.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                            Principal
                          </span>
                        )}
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: tier.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.05, ease: "easeOut" }}
                          className={`h-full rounded-full ${tier.bar}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
