"use client"

import { useEffect, useState } from "react"

interface TerminalOutputLine {
  text: string
  tone?: "default" | "success"
}

interface TerminalCommand {
  command: string
  output: TerminalOutputLine[]
}

interface TerminalHistoryLine {
  type: "command" | "output"
  text: string
  tone?: "default" | "success"
}

interface TerminalProps {
  lines: TerminalCommand[]
  user?: string
  className?: string
}

export function Terminal({ lines, user = "luiz@automacao:~", className = "" }: TerminalProps) {
  const [history, setHistory] = useState<TerminalHistoryLine[]>([])
  const [typedCommand, setTypedCommand] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    async function run() {
      for (const line of lines) {
        let text = ""
        for (const char of line.command) {
          if (cancelled) return
          text += char
          setTypedCommand(text)
          await sleep(35)
        }

        await sleep(300)
        if (cancelled) return
        setHistory((prev) => [...prev, { type: "command", text: line.command }])
        setTypedCommand("")

        for (const outputLine of line.output) {
          await sleep(150)
          if (cancelled) return
          setHistory((prev) => [...prev, { type: "output", text: outputLine.text, tone: outputLine.tone }])
        }

        await sleep(500)
      }
      if (!cancelled) setDone(true)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [lines])

  return (
    <div
      className={`rounded-xl border border-border bg-card/60 backdrop-blur-sm shadow-2xl shadow-accent/10 overflow-hidden text-left font-mono ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-muted-foreground">{user}</span>
      </div>

      <div className="p-5 space-y-1.5 text-sm sm:text-base min-h-[168px]">
        {history.map((line, index) =>
          line.type === "command" ? (
            <p key={index} className="text-foreground">
              <span className="text-accent">$</span> {line.text}
            </p>
          ) : (
            <p
              key={index}
              className={line.tone === "success" ? "text-emerald-400" : "text-muted-foreground"}
            >
              {line.text}
            </p>
          ),
        )}

        <p className="text-foreground">
          <span className="text-accent">$</span> {!done && typedCommand}
          <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  )
}
