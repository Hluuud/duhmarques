import { ImageResponse } from "next/og"

export const alt = "Luiz Eduardo Marques — Automação & DevOps"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(139,92,246,0.25), transparent 50%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.15), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 36px",
            border: "2px solid rgba(139,92,246,0.5)",
            borderRadius: 16,
            marginBottom: 44,
          }}
        >
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, backgroundColor: "#ef4444" }} />
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#eab308",
              marginLeft: 10,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#22c55e",
              marginLeft: 10,
            }}
          />
          <span style={{ display: "flex", color: "#a1a1aa", fontSize: 22, marginLeft: 20 }}>luiz@automacao:~</span>
        </div>

        <div style={{ display: "flex", color: "#fafafa", fontSize: 68, fontWeight: 700 }}>
          Luiz Eduardo&nbsp;
          <span style={{ display: "flex", color: "#8b5cf6" }}>Marques</span>
        </div>

        <div style={{ display: "flex", color: "#a1a1aa", fontSize: 30, marginTop: 24 }}>
          Automação · DevOps · Infraestrutura &amp; IoT
        </div>
      </div>
    ),
    { ...size },
  )
}
