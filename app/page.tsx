"use client";

import { useState, useEffect } from "react";

function GlowCard({ children, className = "", glow = "blue" }: { children: React.ReactNode; className?: string; glow?: string }) {
  const colors: Record<string, string> = {
    blue: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    orange: "hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]",
    red: "hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]",
  };
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className={`relative bg-[#0a0a0f] rounded-2xl border border-white/[0.06] p-8 transition-all duration-700 ${colors[glow] || ""}`}>
        {children}
      </div>
    </div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState("—");
  useEffect(() => {
    const t = setTimeout(() => setDisplay(value), 800);
    return () => clearTimeout(t);
  }, [value]);
  return <span>{display}{suffix}</span>;
}

const verdict = [
  { cat: "Coding", winner: "GLM-5", reason: "Benchmarks comprobados (SWE-bench 77.8)", color: "blue" },
  { cat: "Agent Speed", winner: "Turbo", reason: "Optimizado para inferencia rápida", color: "orange" },
  { cat: "Precio", winner: "GLM-5", reason: "33% más barato en input/output", color: "blue" },
  { cat: "Latencia", winner: "Turbo", reason: "Menor time-to-first-token", color: "orange" },
  { cat: "Confiabilidad", winner: "GLM-5", reason: "Probado en producción desde Feb 2026", color: "blue" },
  { cat: "Novedad", winner: "Turbo", reason: "Lanzado hoy, datos limitados", color: "orange" },
];

export default function Home() {
  const [tab, setTab] = useState<"overview" | "price" | "verdict">("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <div className="min-h-screen bg-[#06060b] text-white overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Hero */}
      <div className="relative pt-20 pb-24 px-6">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, #3b82f6 0%, #f97316 50%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Live — March 15, 2026</span>
            </div>
          </div>

          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="block bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600 bg-clip-text text-transparent">GLM‑5</span>
            <span className="block text-white/20 my-2 md:my-4 text-3xl md:text-5xl font-light tracking-[0.3em]">VERSUS</span>
            <span className="block bg-gradient-to-br from-amber-300 via-orange-500 to-red-600 bg-clip-text text-transparent">GLM‑5<span className="text-white/30 font-light">‑Turbo</span></span>
          </h1>

          <p className={`mt-8 text-white/30 max-w-md mx-auto text-sm leading-relaxed transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Built entirely by GLM‑5‑Turbo as a live capability test<br />
            <span className="text-white/20">Clawy 🐾 × Z.AI × OpenClaw</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="flex gap-1 p-1 bg-white/[0.03] rounded-xl border border-white/[0.06] w-fit mx-auto backdrop-blur-sm">
          {(["overview", "price", "verdict"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-lg text-[11px] uppercase tracking-[0.15em] transition-all duration-500 ${tab === t ? "bg-white/[0.08] text-white shadow-lg" : "text-white/30 hover:text-white/60"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {tab === "overview" && (
        <div className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-2 gap-6">
            {/* GLM-5 Card */}
            <GlowCard glow="blue">
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md text-[10px] uppercase tracking-[0.2em] border border-blue-500/20">Flagship</span>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
              </div>
              <h2 className="text-4xl font-black tracking-tight bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent mb-2">GLM‑5</h2>
              <p className="text-[12px] text-white/25 mb-8 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Foundation Model</p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Z.AI&apos;s flagship model. State-of-the-art open-source performance. 744B parameters with DeepSeek Sparse Attention.
              </p>
              <div className="space-y-4">
                <Stat label="Params" value="744B / 40B active" />
                <Stat label="Context" value="200K tokens" />
                <Stat label="Max Output" value="128K tokens" />
                <Stat label="SWE-bench" value="77.8" highlight />
                <Stat label="Terminal Bench" value="56.2" highlight />
              </div>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/20 uppercase tracking-wider mb-3">Optimized For</p>
                <div className="flex flex-wrap gap-2">
                  {["Complex coding", "System engineering", "Long-horizon tasks", "Deep debugging"].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.03] rounded-md text-[11px] text-white/40 border border-white/[0.06]">{t}</span>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Turbo Card */}
            <GlowCard glow="orange">
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 bg-orange-500/10 text-orange-400 rounded-md text-[10px] uppercase tracking-[0.2em] border border-orange-500/20">New</span>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600" />
              </div>
              <h2 className="text-4xl font-black tracking-tight bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent mb-2">GLM‑5‑Turbo</h2>
              <p className="text-[12px] text-white/25 mb-8 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>High-Speed Agent Variant</p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Fast inference optimized for agent-driven environments. Specifically designed for OpenClaw and real-time interactions.
              </p>
              <div className="space-y-4">
                <Stat label="Params" value="744B / 40B active" />
                <Stat label="Context" value="200K tokens" />
                <Stat label="Max Output" value="128K tokens" />
                <Stat label="SWE-bench" value="TBD" />
                <Stat label="Terminal Bench" value="TBD" />
              </div>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/20 uppercase tracking-wider mb-3">Optimized For</p>
                <div className="flex flex-wrap gap-2">
                  {["Agent workflows", "Fast inference", "OpenClaw", "Real-time tool calls"].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.03] rounded-md text-[11px] text-white/40 border border-white/[0.06]">{t}</span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Shared Features */}
          <div className="mt-12">
            <GlowCard>
              <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-6">Shared Capabilities</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Thinking Mode", "Streaming", "Function Calling", "Context Caching", "Structured Output", "Agentic Coding"].map((f) => (
                  <div key={f} className="flex items-center gap-3 py-3 px-4 bg-white/[0.02] rounded-xl border border-white/[0.04]">
                    <span className="text-emerald-400 text-xs">◆</span>
                    <span className="text-white/50 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      )}

      {/* Price Tab */}
      {tab === "price" && (
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <GlowCard>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-8">Per Million Tokens</p>
            <div className="space-y-10">
              <PriceRow label="INPUT" a="$0.72" b="$0.96" aW={72} bW={96} />
              <PriceRow label="OUTPUT" a="$2.30" b="$3.20" aW={72} bW={100} />
            </div>
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex justify-between text-[11px] text-white/25" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span>GLM-5 saves ~33% input, ~28% output</span>
              <span>source: openrouter.ai</span>
            </div>
          </GlowCard>
        </div>
      )}

      {/* Verdict Tab */}
      {tab === "verdict" && (
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <div className="space-y-3">
            {verdict.map((v, i) => (
              <GlowCard key={i} glow={v.color} className="!p-6">
                <div className="flex items-center gap-6">
                  <span className="text-white/10 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm font-medium">{v.cat}</p>
                    <p className="text-white/25 text-xs mt-0.5">{v.reason}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-[10px] uppercase tracking-wider font-bold ${v.color === "blue" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-orange-500/10 text-orange-400 border border-orange-500/20"}`}>
                    {v.winner}
                  </span>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Recommendation */}
          <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06]">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-4">🦞 Recommendation</p>
            <p className="text-white/50 text-sm leading-relaxed">
              <span className="text-blue-400 font-medium">GLM‑5</span> for complex development (Next.js, Solana, Web3, debugging).<br />
              <span className="text-orange-400 font-medium">GLM‑5‑Turbo</span> for agent tasks (chats, tool calls, heartbeats, fast interactions).
            </p>
            <p className="text-white/15 text-[11px] mt-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              * This page was built by GLM‑5‑Turbo — the proof is in the pixels.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-white/[0.04] py-10 text-center">
        <p className="text-white/15 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Clawy 🐾 — GLM‑5‑Turbo — Z.AI — OpenClaw — 2026
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/20 text-[11px] uppercase tracking-wider">{label}</span>
      <span className={`text-sm ${highlight ? "text-emerald-400 font-bold" : "text-white/60 font-medium"}`}>
        <AnimatedNumber value={value} />
      </span>
    </div>
  );
}

function PriceRow({ label, a, b, aW, bW }: { label: string; a: string; b: string; aW: number; bW: number }) {
  return (
    <div>
      <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-4">{label}</p>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-blue-400/60 w-16 text-right font-mono">GLM‑5</span>
          <div className="flex-1 h-7 bg-white/[0.03] rounded-lg overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500/40 to-blue-500/80 rounded-lg flex items-center justify-end pr-4 transition-all duration-1000" style={{ width: `${aW}%` }}>
              <span className="text-[11px] font-bold text-white font-mono">{a}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-orange-400/60 w-16 text-right font-mono">Turbo</span>
          <div className="flex-1 h-7 bg-white/[0.03] rounded-lg overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500/40 to-red-500/80 rounded-lg flex items-center justify-end pr-4 transition-all duration-1000" style={{ width: `${bW}%` }}>
              <span className="text-[11px] font-bold text-white font-mono">{b}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
