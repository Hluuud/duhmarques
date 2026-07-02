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

const siteUrl = "https://duhmarques.vercel.app"

const title = "Luiz Eduardo Marques | Automação & DevOps"
const description =
  "Portfólio de Luiz Eduardo Marques — profissional de tecnologia especializado em automação de processos, DevOps, infraestrutura, observabilidade e IoT para Indústria 4.0."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Luiz Eduardo Marques",
  },
  description,
  keywords: [
    "automação de processos",
    "DevOps",
    "infraestrutura de TI",
    "observabilidade",
    "IoT",
    "Indústria 4.0",
    "Docker",
    "Kubernetes",
    "Node-RED",
    "n8n",
    "Python",
    "Ansible",
    "Terraform",
    "Zabbix",
    "Grafana",
  ],
  authors: [{ name: "Luiz Eduardo Marques", url: siteUrl }],
  creator: "Luiz Eduardo Marques",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Luiz Eduardo Marques",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "duhmarques",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luiz Eduardo Marques",
  url: siteUrl,
  email: "mailto:luizeduardom58@gmail.com",
  jobTitle: "Especialista em Automação e DevOps",
  sameAs: [
    "https://github.com/Hluuud",
    "https://www.linkedin.com/in/luiz-eduardo-marques/",
    "https://www.instagram.com/duuh__marques/",
  ],
  knowsAbout: [
    "Automação de Processos",
    "DevOps",
    "Infraestrutura de TI",
    "Observabilidade",
    "IoT",
    "Indústria 4.0",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${spaceMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
