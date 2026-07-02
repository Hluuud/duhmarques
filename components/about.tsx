"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Sobre Mim</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="text-accent font-semibold">Luiz Eduardo Marques</span>, profissional de tecnologia especializado em 
              automação, DevOps e integração entre sistemas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuo no desenvolvimento de soluções escaláveis voltadas para automação de processos, observabilidade, infraestrutura
              como código e integração entre ambientes, utilizando práticas modernas de DevOps e automações.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenho experiência com infraestrutura, redes, cloud computing, segurança da informação, containers, automações com IoT
              e workflows inteligentes, sempre buscando aumentar eficiência operacional, confiabilidade e escalabilidade dos ambientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é transformar operações complexas em ecossistemas automatizados, resilientes e inteligentes, conectando 
              tecnologia, infraestrutura e automação para acelerar resultados.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">2+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20">
              <img src="/sobre-mim.png" alt="Luiz Eduardo Marques" className="w-full h-full object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Marques
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
