import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { pages, slugs } from "@/lib/pageData"
import CopyButton from "@/components/CopyButton"

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}
type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = pages[slug]
  if (!p) return {}
  return { title: p.meta.title, description: p.meta.description, keywords: p.meta.keywords, alternates: { canonical: `https://www.tunee.ai/ja/${slug}` } }
}

const themes = {
  "dark-gold":  { bg:"bg-[#0D0D0D]", text:"text-[#FAF5EB]", accent:"#D4A853", accentText:"text-[#D4A853]", muted:"text-gray-400", cardBg:"bg-[#1A1A1A]", btnBg:"bg-[#D4A853]", btnText:"text-black", headerBg:"bg-black/85", cardCta:"bg-[#D4A853]/90 hover:bg-[#D4A853] text-black" },
  "dark-neon":  { bg:"bg-[#050510]", text:"text-[#E8E8F0]", accent:"#FF2E97", accentText:"text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E97] to-[#00D4FF]", muted:"text-[#8888AA]", cardBg:"bg-[#0A0A1F]", btnBg:"bg-gradient-to-r from-[#FF2E97] to-[#8B5CF6]", btnText:"text-white", headerBg:"bg-[#050510]/90", cardCta:"bg-[#FF2E97]/90 hover:bg-[#FF2E97] text-white" },
  "dark-cyan":  { bg:"bg-[#030712]", text:"text-[#D1D5DB]", accent:"#00F0FF", accentText:"text-[#00F0FF]", muted:"text-gray-500", cardBg:"bg-[#111827]", btnBg:"bg-[#00F0FF]", btnText:"text-[#030712]", headerBg:"bg-[#030712]/88", cardCta:"bg-[#00F0FF]/90 hover:bg-[#00F0FF] text-[#030712]" },
  "light-warm": { bg:"bg-[#FDFAF5]", text:"text-[#44403C]", accent:"#F97316", accentText:"text-[#F97316]", muted:"text-gray-500", cardBg:"bg-white", btnBg:"bg-[#F97316]", btnText:"text-white", headerBg:"bg-[#FDFAF5]/92", cardCta:"bg-[#F97316]/90 hover:bg-[#F97316] text-white" },
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params
  const p = pages[slug]
  if (!p) notFound()
  const t = themes[p.theme]
  const isLight = p.theme === "light-warm"
  const hc = isLight ? "text-[#1C1917]" : "text-white"

  return (
    <div className={`${t.bg} ${t.text} min-h-screen`}>
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between ${t.headerBg} backdrop-blur-xl border-b ${isLight ? "border-black/5" : "border-white/5"}`}>
        <a href="https://www.tunee.ai" className={`text-xl font-bold ${hc}`}>Tunee<span style={{color:t.accent}}>.</span></a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className={`hidden md:block text-xs ${t.muted}`}>Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className={`hidden md:block text-xs ${t.muted}`}>MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className={`hidden md:block text-xs ${t.muted}`}>Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className={`text-xs ${t.muted}`}>Log in</a>
          <a href="https://www.tunee.ai/sign-up" className={`text-xs font-semibold ${isLight?"bg-[#1C1917] text-[#FDFAF5]":"bg-white text-black"} px-4 py-1.5 rounded-lg`}>Sign up</a>
        </nav>
      </header>

      <section className="min-h-screen flex items-center justify-center text-center px-6 md:px-16 pt-28 pb-20 relative overflow-hidden">
        {!isLight && <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(ellipse at 50% 40%,${t.accent}10,transparent 65%)`}}/>}
        <div className="max-w-2xl mx-auto relative z-10">
          {isLight && <span className="text-5xl mb-5 block">🎼</span>}
          {!isLight && <span className="inline-block px-3 py-1 rounded-full text-[11px] mb-5 border" style={{background:`${t.accent}15`,borderColor:`${t.accent}30`,color:t.accent}}>{p.badge}</span>}
          <h1 className={`text-4xl md:text-[56px] font-black ${hc} mb-5 leading-tight tracking-tight`}>
            {p.h1[0]}<span className={t.accentText} style={t.accentText.includes("gradient")?{WebkitBackgroundClip:"text"}:{color:t.accent}}>{p.h1[1]}</span>
          </h1>
          <p className={`text-base md:text-lg ${t.muted} mb-8 leading-relaxed max-w-lg mx-auto`}>{p.subtitle}</p>
          <a href="https://www.tunee.ai/sign-up" className={`inline-block ${t.btnBg} ${t.btnText} px-8 py-3.5 ${isLight?"rounded-full shadow-lg":"rounded-xl"} font-bold text-[15px]`}>{p.cta}</a>
          <p className={`mt-4 text-xs ${t.muted} opacity-60`}>クレジットカード不要 · {p.trustLine}</p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-2 text-center" style={{color:t.accent}}>キャラクターショーケース</p>
          <h2 className={`text-2xl md:text-3xl font-extrabold ${hc} mb-4 text-center`}>{p.demoSectionTitle}</h2>
          <p className={`text-sm ${t.muted} mb-10 text-center max-w-md mx-auto`}>写真やイラストをアップロードするだけ。あなたも同じようなAIキャラクターを作れます。</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {p.demos.map((d) => (
              <div key={d.name} className={`group rounded-2xl overflow-hidden ${t.cardBg} border ${isLight?"border-black/5 hover:border-[#F97316]/30":"border-white/5 hover:border-white/15"} hover:-translate-y-1.5 transition-all duration-300`}>
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={d.src} alt={d.sub} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className={`absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t ${isLight?"from-white":"from-black/60"} to-transparent`} />
                </div>
                <div className="p-3.5">
                  <h4 className={`text-sm font-bold ${hc} mb-0.5`}>{d.name}</h4>
                  <p className={`text-[11px] ${t.muted} mb-2.5`}>{d.sub}</p>
                  <a href="https://www.tunee.ai/sign-up" className={`block text-center text-xs font-semibold py-2 rounded-lg transition-all ${t.cardCta}`}>このキャラを作る →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-6 md:px-16 py-20 ${isLight?"bg-[#FFF8EE]":t.cardBg}`}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-2 text-center" style={{color:t.accent}}>使い方</p>
          <h2 className={`text-2xl md:text-3xl font-extrabold ${hc} mb-12 text-center`}>{p.stepsSectionTitle}</h2>
          <div className={`grid ${p.steps.length===3?"md:grid-cols-3":"grid-cols-2 lg:grid-cols-4"} gap-8`}>
            {p.steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2" style={{borderColor:`${t.accent}40`,color:t.accent,background:`${t.accent}12`}}>{s.n}</div>
                <h4 className={`text-base font-bold ${hc} mb-1.5`}>{s.t}</h4>
                <p className={`text-sm ${t.muted} leading-relaxed`}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-2 text-center" style={{color:t.accent}}>MVプロンプト</p>
          <h2 className={`text-2xl md:text-3xl font-extrabold ${hc} mb-4 text-center`}>コピーして、すぐMVを作成</h2>
          <p className={`text-sm ${t.muted} mb-10 text-center max-w-md mx-auto`}>プロンプトが思いつかない？ そのまま使えるテンプレートをどうぞ。</p>
          <div className="grid md:grid-cols-2 gap-4">
            {p.prompts.map((pr) => (
              <div key={pr.title} className="rounded-2xl p-6 border" style={{background:`${t.accent}08`,borderColor:`${t.accent}15`}}>
                <p className="text-[11px] font-bold mb-2" style={{color:t.accent}}>{pr.label}</p>
                <h4 className={`text-base font-bold ${hc} mb-3`}>{pr.title}</h4>
                <div className={`${isLight?"bg-black/[.03] border border-black/5":"bg-black/30"} ${t.muted} text-xs leading-relaxed p-3.5 rounded-xl mb-3 font-mono`}>{pr.text}</div>
                <CopyButton text={pr.text} className={`${t.btnBg} ${t.btnText}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-6 md:px-16 py-24 text-center ${isLight?"bg-[#1C1917] text-[#FDFAF5]":""}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${isLight?"text-white":hc} mb-4`}>{p.finalCtaTitle}</h2>
          <p className={`text-sm ${isLight?"text-gray-400":t.muted} mb-8`}>無料クレジットですぐに始められます。クレジットカード不要。</p>
          <a href="https://www.tunee.ai/sign-up" className={`inline-block ${t.btnBg} ${t.btnText} px-10 py-3.5 ${isLight?"rounded-full":"rounded-xl"} font-bold text-[15px]`}>{p.cta}</a>
        </div>
      </section>

      <section className="px-6 md:px-16 py-10 max-w-3xl mx-auto">
        <p className={`text-xs ${isLight?"text-gray-400":"text-gray-600"} leading-loose`}>{p.seoText}</p>
      </section>

      <footer className={`px-6 md:px-10 py-8 border-t ${isLight?"border-black/5":"border-white/5"} flex flex-col md:flex-row justify-between items-start gap-4`}>
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className={`text-base font-bold ${hc}`}>Tunee<span style={{color:t.accent}}>.</span></a>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {[["Music Agent","/music-agent"],["MV Studio","/home/ai-music-video"],["Pricing","/pricing"],["FAQ","/faq"],["Terms of Service","/terms-of-service"],["Privacy Policy","/privacy-policy"]].map(([label,href])=>(
              <a key={label} href={`https://www.tunee.ai${href}`} className={`text-xs ${t.muted}`}>{label}</a>
            ))}
          </div>
        </div>
        <p className={`text-[11px] ${t.muted} opacity-60`}>© 2025 Qustar Technology PTE. LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}
