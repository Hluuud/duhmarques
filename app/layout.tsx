import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Luiz Eduardo Marques | Automação",
  description:
    "Portfólio profissional de Luiz Eduardo Marques - Especialista em automação de processos, Indústria 4.0, infraestrutura de TI e IoT.",
  keywords: ["automação", "indústria 4.0", "IoT", "infraestrutura", "TI", "Node-RED", "Python"],
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'duhmarques'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
