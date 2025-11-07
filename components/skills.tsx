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
      title: "Automação Industrial",
      skills: [
        { name: "Node-RED", icon: <Network className="w-6 h-6" /> },
        { name: "n8n", icon: <GitBranch className="w-6 h-6" /> },
        { name: "IoT", icon: <Cpu className="w-6 h-6" /> },
        { name: "MQTT", icon: <Server className="w-6 h-6" /> },
        { name: "CLPs / Ladder", icon: <Settings className="w-6 h-6" /> },
        { name: "Robótica", icon: <Bot className="w-6 h-6" /> },
      ],
    },
    {
      title: "Infraestrutura & Cloud",
      skills: [
        { name: "Azure", icon: <Cloud className="w-6 h-6" /> },
        { name: "Docker", icon: <Container className="w-6 h-6" /> },
        { name: "Linux", icon: <Terminal className="w-6 h-6" /> },
        { name: "Traefik", icon: <Lock className="w-6 h-6" /> },
        { name: "Ngrok", icon: <Network className="w-6 h-6" /> },
        { name: "VMs & Containers", icon: <Boxes className="w-6 h-6" /> },
      ],
    },
    {
      title: "Segurança & Redes",
      skills: [
        { name: "Fortinet", icon: <Shield className="w-6 h-6" /> },
        { name: "Firewall & VLANs", icon: <Network className="w-6 h-6" /> },
        { name: "Ubiquiti", icon: <Wifi className="w-6 h-6" /> },
        { name: "VPNs", icon: <Lock className="w-6 h-6" /> },
        { name: "CFTV", icon: <Camera className="w-6 h-6" /> },
        { name: "Intune", icon: <Server className="w-6 h-6" /> },
      ],
    },
    {
      title: "Softwares & Gestão",
      skills: [
        { name: "Git / GitHub", icon: <Github className="w-6 h-6" /> },
        { name: "VSCode", icon: <FileCode className="w-6 h-6" /> },
        { name: "Grafana", icon: <BarChart3 className="w-6 h-6" /> },
        { name: "Prometheus", icon: <Database className="w-6 h-6" /> },
        { name: "Zabbix", icon: <Shield className="w-6 h-6" /> },
      ],
    },
    {
      title: "Programação & Scripts",
      skills: [
        { name: "Python", icon: <Code className="w-6 h-6" /> },
        { name: "Bash", icon: <Terminal className="w-6 h-6" /> },
        { name: "PowerShell", icon: <Zap className="w-6 h-6" /> },
        { name: "APIs REST / Webhooks", icon: <Network className="w-6 h-6" /> },
        { name: "Automação", icon: <GitBranch className="w-6 h-6" /> },
      ],
    },
    {
      title: "Dados & IA",
      skills: [
        { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
        { name: "Ciência de Dados", icon: <BarChart3 className="w-6 h-6" /> },
        { name: "Regressão & Modelagem", icon: <LineChart className="w-6 h-6" /> },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
        { name: "Supabase", icon: <Cloud className="w-6 h-6" /> },
      ],
    },
  ]

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-2xl border-2 border-border bg-card hover:border-accent hover:shadow-2xl hover:shadow-accent/30 hover:animate-pulse-glow transition-all duration-300"
            >
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/25 hover:to-accent/15 border border-accent/20 hover:border-accent/50 transition-all duration-300 group/skill cursor-pointer hover:shadow-lg hover:shadow-accent/20"
                    >
                      <span className="text-accent group-hover/skill:scale-125 group-hover/skill:animate-spin transition-all duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-lg font-semibold text-foreground group-hover/skill:text-accent transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
