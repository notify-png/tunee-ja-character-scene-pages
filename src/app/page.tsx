import Link from "next/link"
export default function Home() {
  const pages = [
    { href: "/ai-character/ai-singer", label: "AIシンガー" },
    { href: "/ai-character/dance-video", label: "ダンス動画" },
    { href: "/ai-character/ai-influencer", label: "AIインフルエンサー" },
    { href: "/ai-character/theme-song", label: "テーマソング" },
  ]
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Tunee AI Character Pages</h1>
        <div className="grid grid-cols-2 gap-4">
          {pages.map(p => (
            <Link key={p.href} href={p.href} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
