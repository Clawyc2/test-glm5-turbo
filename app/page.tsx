"use client";

import { useState } from "react";

const comparisonData = {
  models: [
    {
      name: "GLM-5",
      tagline: "Flagship Foundation Model",
      description:
        "Z.AI's flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows.",
      params: "744B total / 40B active",
      context: "200K tokens",
      maxOutput: "128K tokens",
      inputPrice: "$0.72",
      outputPrice: "$2.30",
      focus: ["Complex coding", "System engineering", "Long-horizon tasks", "Backend refactoring"],
      benchmarks: { swebench: "77.8", terminalBench: "56.2" },
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-400",
      badge: "STABLE",
      badgeColor: "bg-blue-500",
    },
    {
      name: "GLM-5-Turbo",
      tagline: "High-Speed Agent Variant",
      description:
        "A high-speed variant of GLM-5, optimized for agent-driven environments such as OpenClaw. Faster inference, designed for real-time interactions.",
      params: "744B total / 40B active",
      context: "200K tokens",
      maxOutput: "128K tokens",
      inputPrice: "$0.96",
      outputPrice: "$3.20",
      focus: ["Agent workflows", "Fast inference", "OpenClaw scenarios", "Real-time tool calls"],
      benchmarks: { swebench: "TBD", terminalBench: "TBD" },
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-400",
      badge: "NEW",
      badgeColor: "bg-orange-500",
    },
  ],
};

const features = [
  { name: "Thinking Mode", glm5: true, turbo: true },
  { name: "Streaming Output", glm5: true, turbo: true },
  { name: "Function Calling", glm5: true, turbo: true },
  { name: "Context Caching", glm5: true, turbo: true },
  { name: "Structured Output", glm5: true, turbo: true },
  { name: "Agentic Coding", glm5: true, turbo: true },
];

const verdict = [
  {
    category: "Coding complejo",
    winner: "GLM-5",
    reason: "Benchmarks comprobados, comparable a Claude Opus 4.5",
  },
  {
    category: "Agent responses",
    winner: "GLM-5-Turbo",
    reason: "Optimizado para inferencia rápida y entornos de agentes",
  },
  {
    category: "Costo",
    winner: "GLM-5",
    reason: "33% más barato en input, 28% más barato en output",
  },
  {
    category: "Latencia",
    winner: "GLM-5-Turbo",
    reason: "Diseñado para velocidad, menor time-to-first-token",
  },
  {
    category: "Novedad",
    winner: "GLM-5-Turbo",
    reason: "Lanzado hoy (15 Mar 2026), datos limitados",
  },
  {
    category: "Confiabilidad",
    winner: "GLM-5",
    reason: "Probado en producción desde Feb 2026, resultados consistentes",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"compare" | "verdict" | "features">("compare");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-orange-900" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-800/80 rounded-full border border-gray-700 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Live Comparison — March 15, 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">GLM-5</span>
            <span className="text-gray-500 mx-4">vs</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">GLM-5-Turbo</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comparación detallada entre el modelo flagship de Z.AI y su variante de alta velocidad optimizada para agentes
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Creado por Clawy 🐾 usando GLM-5-Turbo | Deploy automático desde OpenClaw
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex gap-2 bg-gray-900 rounded-xl p-1.5 border border-gray-800 w-fit mx-auto">
          {(["compare", "features", "verdict"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-gray-700 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {tab === "compare" ? "📊 Comparación" : tab === "features" ? "⚡ Features" : "🏆 Veredicto"}
            </button>
          ))}
        </div>
      </div>

      {/* Compare Tab */}
      {activeTab === "compare" && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {comparisonData.models.map((model) => (
              <div
                key={model.name}
                className={`relative bg-gray-900 rounded-2xl border ${model.borderColor} p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 ${model.badgeColor} rounded-full text-xs font-bold tracking-wider`}
                  >
                    {model.badge}
                  </span>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${model.color}`} />
                </div>
                <h2
                  className={`text-3xl font-bold mb-1 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}
                >
                  {model.name}
                </h2>
                <p className="text-gray-400 mb-4 text-sm">{model.tagline}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{model.description}</p>

                <div className="space-y-3">
                  <Row label="Parameters" value={model.params} />
                  <Row label="Context Window" value={model.context} />
                  <Row label="Max Output" value={model.maxOutput} />
                  <Row
                    label="Input Price"
                    value={`${model.inputPrice}/M tokens`}
                    highlight={model.inputPrice === "$0.72"}
                  />
                  <Row
                    label="Output Price"
                    value={`${model.outputPrice}/M tokens`}
                    highlight={model.outputPrice === "$2.30"}
                  />
                </div>

                <div className="mt-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Optimized for</p>
                  <div className="flex flex-wrap gap-2">
                    {model.focus.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 bg-gray-800 rounded-md text-xs text-gray-300 border border-gray-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-xs text-gray-500 mb-1">SWE-bench</p>
                    <p className="text-2xl font-bold text-white">{model.benchmarks.swebench}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
                    <p className="text-xs text-gray-500 mb-1">Terminal Bench</p>
                    <p className="text-2xl font-bold text-white">{model.benchmarks.terminalBench}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Comparison Bar */}
          <div className="mt-10 bg-gray-900 rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-bold mb-6 text-center">💰 Comparación de Precios (por 1M tokens)</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Input Tokens</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-500 w-20">GLM-5</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-end pr-3" style={{ width: "72%" }}>
                      <span className="text-xs font-bold">$0.72</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 w-20">GLM-5-Turbo</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-end pr-3" style={{ width: "96%" }}>
                      <span className="text-xs font-bold">$0.96</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Output Tokens</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-500 w-20">GLM-5</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-end pr-3" style={{ width: "72%" }}>
                      <span className="text-xs font-bold">$2.30</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 w-20">GLM-5-Turbo</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-end pr-3" style={{ width: "100%" }}>
                      <span className="text-xs font-bold">$3.20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-4">GLM-5 es ~33% más barato en input y ~28% más barato en output</p>
          </div>
        </div>
      )}

      {/* Features Tab */}
      {activeTab === "features" && (
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
              <p className="text-sm text-gray-400 font-medium">Feature</p>
              <p className="text-sm text-blue-400 font-medium text-center">GLM-5</p>
              <p className="text-sm text-orange-400 font-medium text-center">GLM-5-Turbo</p>
            </div>
            {features.map((f, i) => (
              <div
                key={f.name}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${i < features.length - 1 ? "border-b border-gray-800" : ""}`}
              >
                <p className="text-gray-300">{f.name}</p>
                <p className="text-center text-2xl">{f.glm5 ? "✅" : "❌"}</p>
                <p className="text-center text-2xl">{f.turbo ? "✅" : "❌"}</p>
              </div>
            ))}
            <div className="p-6 bg-gray-800/30">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Nota:</strong> Ambos modelos comparten la misma arquitectura base (744B params). La diferencia radica en la optimización de inferencia del Turbo para escenarios de agente.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Verdict Tab */}
      {activeTab === "verdict" && (
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 ¿Cuál elegir?</h3>
            <div className="space-y-4">
              {verdict.map((v, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <span className="text-gray-500 text-sm font-mono mt-1">#{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{v.category}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{v.reason}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      v.winner === "GLM-5"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    }`}
                  >
                    {v.winner}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700">
              <h4 className="text-lg font-bold mb-3">🦞 Recomendación de Clawy</h4>
              <p className="text-gray-300 leading-relaxed">
                Para <strong>desarrollo complejo</strong> (Next.js, Solana, Web3, debugging): usa <strong className="text-blue-400">GLM-5</strong>. 
                Tiene benchmarks comprobados y funciona bien en producción.
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                Para <strong>tareas de agente</strong> (chats, tool calls, heartbeats, interacción rápida): usa <strong className="text-orange-400">GLM-5-Turbo</strong>. 
                Más responsivo, optimizado para nuestro caso de uso en OpenClaw.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                * Esta web fue creada completamente por GLM-5-Turbo como prueba de capacidad.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-800 py-8 text-center">
        <p className="text-gray-600 text-sm">
          Built by Clawy 🐾 | GLM-5-Turbo | Z.AI + OpenClaw | March 2026
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800/50">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-green-400" : "text-white"}`}>{value}</span>
    </div>
  );
}
