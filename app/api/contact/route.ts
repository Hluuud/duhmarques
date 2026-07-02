import { NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 })
  }

  const { name, email, message, company } = body as {
    name?: string
    email?: string
    message?: string
    company?: string
  }

  // Honeypot: campo invisível para humanos, bots costumam preencher
  if (company) {
    return NextResponse.json({ ok: true })
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 })
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 })
  }

  if (name.length > 100 || email.length > 100 || message.length > 5000) {
    return NextResponse.json({ error: "Campo excede o tamanho máximo permitido." }, { status: 400 })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.")
    return NextResponse.json({ error: "Formulário de contato não configurado no servidor." }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Falha ao enviar mensagem. Tente novamente." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return NextResponse.json({ error: "Falha ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
