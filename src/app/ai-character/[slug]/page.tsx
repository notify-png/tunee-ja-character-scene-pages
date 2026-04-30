import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { pages, slugs } from "@/lib/pageData"
import CopyButton from "@/components/CopyButton"

// Static generation for all 4 slugs
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = pages[slug]
  if (!p) return {}
  return {
    title: p.meta.title,
    description: p.meta.description,
    keywords: p.meta.keywords,
    alternates: { canonical: `https://www.tunee.ai/ai-character/${slug}` },
  }
}

// Theme config
const themes = {
  "dark-gold": { bg: "bg-[#0D0D0D]", text: "text-[#FAF5EB]", accent: "#D4A853", accentText: "text-[#D4A853]", muted: "text-gray-400", cardBg: "bg-[#1A1A1A]", border: "border-[#D4A853]/20", btnBg: "bg-[#D4A853]", btnText: "text-black", gradientFrom: "", gradientTo: "", headerBg: "bg-black/85" },
  "dark-neon": { bg: "bg-[#050510]", text: "text-[#E8E8F0]", accent: "#FF2E97", accentText: "text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E97] to-[#00D4FF]", muted: "text-[#8888AA]", cardBg: "bg-[#0A0A1F]", border: "border-[#FF2E97]/20", btnBg: "bg-gradient-to-r from-[#FF2E97] to-[#8B5CF6]", btnText: "text-white", gradientFrom: "#FF2E97", gradientTo: "#00D4FF", headerBg: "bg-[#050510]/90" },
  "dark-cyan": { bg: "bg-[#030712]", text: "text-[#D1D5DB]", accent: "#00F0FF", accentText: "text-[#00F0FF]", muted: "text-gray-500", cardBg: "bg-[#111827]", border: "border-[#00F0FF]/20", btnBg: "bg-[#00F0FF]", btnText: "text-[#030712]", gradientFrom: "", gradientTo: "", headerBg: "bg-[#030712]/88" },
  "light-warm": { bg: "bg-[#FDFAF5]", text: "text-[#44403C]", accent: "#F97316", accentText: "text-[#F97316]", muted: "text-gray-500", cardBg: "bg-white", border: "border-[#F97316]/20", btnBg: "bg-[#F97316]", btnText: "text-white", gradientFrom: "", gradientTo: "", headerBg: "bg-[#FDFAF5]/92" },
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params
  const p = pages[slug]
  if (!p) notFound()
  const t = themes[p.theme]
  const isLight = p.theme === "light-warm"
  const headingColor = isLight ? "text-[#1C1917]" : "text-white"
  const labelColor = isLight ? `text-[${p.theme === "light-warm" ? "#F97316" : p.accent}]` : `text-[${p.accent}]`

  return (
    <div className={`${t.bg} ${t.text} min-h-screen`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between ${t.headerBg} backdrop-blur-xl border-b border-white/5`}>
        <a href="https://www.tunee.ai" className={`text-xl font-bold ${headingColor}`}>
          Tunee<span style={{ color: t.accent }}>.</span>
        </a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className={`hidden md:block text-xs ${t.muted} hover:${headingColor}`}>Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className={`hidden md:block text-xs ${t.muted} hover:${headingColor}`}>MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className={`hidden md:block text-xs ${t.muted} hover:${headingColor}`}>Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className={`text-xs ${t.muted}`}>Log in</a>
          <a href="https://www.tunee.ai/sign-up" className={`text-xs font-semibold ${isLight ? "bg-[#1C1917] text-[#FDFAF5]" : "bg-white text-black"} px-4 py-1.5 rounded-lg`}>Sign up</a>
        </nav>
      </header>

      {/* Hero */}
      <section className={`min-h-screen flex ${isLight ? "items-center justify-center text-center" : "items-center"} px-6 md:px-16 pt-28 pb-20 relative overflow-hidden`}>
        {!isLight && <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none" style={{ background: `radial-gradient(ellipse at 65% 40%, ${t.accent}15, transparent 65%)` }} />}
        <div className={`${isLight ? "max-w-xl mx-auto" : "max-w-xl"} relative z-10`}>
          {isLight && <span className="text-5xl mb-5 block">🎼</span>}
          {!isLight && <span className="inline-block px-3 py-1 rounded-full text-[11px] mb-5 border" style={{ background: `${t.accent}15`, borderColor: `${t.accent}30`, color: t.accent }}>{p.badge}</span>}
          <h1 className={`text-4xl md:text-5xl font-black ${headingColor} mb-5 leading-tight`}>
            {p.h1[0]}<span className={t.accentText} style={t.accentText.includes("gradient") ? { WebkitBackgroundClip: "text" } : { color: t.accent }}>{p.h1[1]}</span>
          </h1>
          <p className={`text-base ${t.muted} mb-8 leading-relaxed max-w-md ${isLight ? "mx-auto" : ""}`}>{p.subtitle}</p>
          <a href="https://www.tunee.ai/sign-up" className={`inline-block ${t.btnBg} ${t.btnText} px-8 py-3 ${isLight ? "rounded-full shadow-lg" : "rounded-xl"} font-bold`}>{p.cta}</a>
          <p className={`mt-3 text-xs ${t.muted} opacity-70`}>クレジットカード不要 · {p.trustLine}</p>
        </div>
        {/* Hero character grid for ai-influencer */}
        {slug === "ai-influencer" && (
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:grid grid-cols-2 gap-2">
            {p.demos.map((d) => (
              <div key={d.name} className="group w-36 h-44 rounded-xl overflow-hidden border border-white/5 hover:border-[#00F0FF]/25 transition-all relative">
                <img src={d.src} alt={d.name} className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300" loading="lazy" />
                <span className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">{d.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Character Demo Cards (not for ai-influencer which shows them in hero) */}
      {slug !== "ai-influencer" && (
        <section className="px-6 md:px-16 py-16">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: t.accent }}>{isLight ? "キャラクターショーケース" : "試聴する"}</p>
          <h2 className={`text-3xl font-extrabold ${headingColor} mb-10`}>{p.demoSectionTitle}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {p.demos.map((d) => (
              <div key={d.name} className={`group rounded-2xl overflow-hidden ${t.cardBg} border ${isLight ? "border-black/5 hover:border-[#F97316]/30" : "border-white/5 hover:border-white/20"} hover:-translate-y-1 transition-all`}>
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={d.src} alt={d.sub} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className={`absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t ${isLight ? "from-white" : `from-[${t.cardBg.replace("bg-[","").replace("]","")}]`} to-transparent`} />
                </div>
                <div className="p-3">
                  <h4 className={`text-sm font-semibold ${headingColor}`}>{d.name}</h4>
                  <p className={`text-[11px] ${t.muted}`}>{d.sub}</p>
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded" style={{ background: `${t.accent}15`, color: t.accent }}>{d.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Steps */}
      <section className={`px-6 md:px-16 py-16 ${isLight ? "bg-[#FFF8EE]" : t.cardBg}`}>
        <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: t.accent }}>使い方</p>
        <h2 className={`text-3xl font-extrabold ${headingColor} mb-10`}>{p.stepsSectionTitle}</h2>
        <div className={`grid ${p.steps.length === 3 ? "md:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"} gap-6`}>
          {p.steps.map((s) => (
            <div key={s.n} className={p.steps.length === 3 ? "text-center" : ""}>
              {p.steps.length === 3 ? (
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2" style={{ borderColor: `${t.accent}40`, color: t.accent, background: `${t.accent}12` }}>{s.n}</div>
              ) : (
                <div className="text-5xl font-black mb-2" style={{ color: `${t.accent}18` }}>{s.n}</div>
              )}
              <h4 className={`text-base font-bold ${headingColor} mb-1`}>{s.t}</h4>
              <p className={`text-sm ${t.muted} leading-relaxed`}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MV Prompts */}
      <section className="px-6 md:px-16 py-16">
        <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: t.accent }}>MVプロンプト</p>
        <h2 className={`text-3xl font-extrabold ${headingColor} mb-10`}>コピーして、すぐMVを作成</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {p.prompts.map((pr) => (
            <div key={pr.title} className="rounded-2xl p-6 border" style={{ background: `${t.accent}08`, borderColor: `${t.accent}15` }}>
              <p className="text-[11px] font-bold mb-2" style={{ color: t.accent }}>{pr.label}</p>
              <h4 className={`text-base font-bold ${headingColor} mb-3`}>{pr.title}</h4>
              <div className={`${isLight ? "bg-black/[.03] border border-black/5" : "bg-black/30"} ${t.muted} text-xs leading-relaxed p-3 rounded-xl mb-3 font-mono`}>{pr.text}</div>
              <CopyButton text={pr.text} className={`${t.btnBg} ${t.btnText}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={`px-6 md:px-16 py-20 text-center ${isLight ? "bg-[#1C1917] text-[#FDFAF5]" : ""}`}>
        <h2 className={`text-3xl font-extrabold ${isLight ? "text-white" : headingColor} mb-3`}>{p.finalCtaTitle}</h2>
        <p className={`text-sm ${t.muted} mb-8`}>無料クレジットですぐに始められます。クレジットカード不要。</p>
        <a href="https://www.tunee.ai/sign-up" className={`inline-block ${t.btnBg} ${t.btnText} px-8 py-3 ${isLight ? "rounded-full" : "rounded-xl"} font-bold`}>{p.cta}</a>
      </section>

      {/* SEO */}
      <section className={`px-6 md:px-16 py-10 max-w-3xl ${isLight ? "" : ""}`}>
        <p className={`text-xs ${isLight ? "text-gray-400" : "text-gray-600"} leading-loose`}>{p.seoText}</p>
      </section>

      {/* Footer */}
      <footer className={`px-6 md:px-10 py-8 border-t ${isLight ? "border-black/5" : "border-white/5"} flex flex-col md:flex-row justify-between items-start gap-4`}>
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className={`text-base font-bold ${headingColor}`}>Tunee<span style={{ color: t.accent }}>.</span></a>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {["Music Agent|/music-agent","MV Studio|/home/ai-music-video","Pricing|/pricing","FAQ|/faq","Terms of Service|/terms-of-service","Privacy Policy|/privacy-policy"].map((l) => {
              const [label, href] = l.split("|")
              return <a key={label} href={`https://www.tunee.ai${href}`} className={`text-xs ${t.muted}`}>{label}</a>
            })}
          </div>
        </div>
        <p className={`text-[11px] ${t.muted} opacity-60`}>© 2025 Qustar Technology PTE. LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}
