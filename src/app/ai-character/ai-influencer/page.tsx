import CopyButton from "@/app/CopyButton"
export const metadata = {
  title: "AIキャラクターをインフルエンサーに — バーチャルアーティスト構築 | Tunee",
  description: "Tuneeで歌えるAIインフルエンサーを作成。見た目・声・楽曲・MVまで一貫したバーチャルアーティストを構築。著作権フリー・商用利用OK。",
}
export default function Page() {
  const heroChars = [
    { src: "/images/char-06.png", name: "MIKU" },
    { src: "/images/char-09.png", name: "RENA" },
    { src: "/images/char-07.png", name: "NANA" },
    { src: "/images/char-08.png", name: "YUKI" },
  ]
  const useCases = [
    { i: "📱", t: "顔出しなしのコンテンツ配信", d: "TikTokやInstagramで顔を出さずにアカウント運用。" },
    { i: "🏷️", t: "ブランドアンバサダー", d: "自社製品のバーチャル広報を作成。タレント起用の何分の一のコストで。" },
    { i: "🎤", t: "バーチャル音楽アーティスト", d: "Spotifyで楽曲リリース、YouTubeでMV公開、ファンベースを構築。" },
    { i: "🔥", t: "バイラルコンテンツ量産", d: "日常Vlog、リップシンク、バイラルダンス — 高いバイラル性を備えたコンテンツ。" },
    { i: "🎮", t: "VTuber / ゲーム配信向けIP", d: "オリジナルのテーマソングやキャラクター楽曲も制作できます。" },
    { i: "🏢", t: "事務所 / MCN向け大規模運用", d: "複数のバーチャルアーティストを一つのプラットフォームで管理。" },
  ]
  const prompts = [
    { l: "🚀 デビューMV", t: "バーチャルアーティストの初投稿MV", p: "バーチャルアーティストのグランドデビュー。ミニマルな白いステージが銀河へ変わる。カメラに向かって進み感情を込めてパフォーマンス。リップシンクあり、ドラマチックなライティング。" },
    { l: "🛍️ 商品紹介", t: "新商品プロモ × 音楽", p: "モダンアパートメントで商品を開封・紹介するキャラクター。商品クローズアップとダンス・歌唱を交互に。アップビート、ライフスタイル感。9:16縦型。" },
    { l: "☀️ SNS日常", t: "おはよう日常ルーティンMV", p: "モーニングルーティンモンタージュ。目覚め、窓辺でストレッチ、コーヒーを淹れる、服を選ぶ。温かい朝の光。美的なVlogスタイル。" },
    { l: "🎆 ライブ風", t: "バーチャルライブパフォーマンス", p: "巨大ホログラフィックステージでパフォーマンス。音楽に反応するビジュアルエフェクト。観客シルエット、スポットライト。フルリップシンク、コンサートのエネルギー。" },
  ]
  return (
    <div className="bg-[#030712] text-[#D1D5DB] min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between bg-black/85 backdrop-blur-xl border-b border-white/5">
        <a href="https://www.tunee.ai" className="text-xl font-bold text-white">Tunee<span className="text-[#00F0FF]">.</span></a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className="hidden md:block text-xs text-gray-400 hover:text-white">Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className="hidden md:block text-xs text-gray-400 hover:text-white">MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className="hidden md:block text-xs text-gray-400 hover:text-white">Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className="text-xs text-gray-400 hover:text-white">Log in</a>
          <a href="https://www.tunee.ai/sign-up" className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-lg">Sign up</a>
        </nav>
      </header>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20 relative">
        <div className="max-w-xl relative z-10">
          <p className="font-mono text-[11px] text-[#00F0FF] tracking-widest uppercase mb-4">AI Character × Influencer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">AIキャラクターを<span className="text-[#00F0FF]">インフルエンサー</span>にしよう</h1>
          <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-md">あなたのAIキャラクターをバーチャルインフルエンサーとして活躍させましょう。楽曲、MV、ダンス、日常Vlog — 一貫したアイデンティティで、SNSコンテンツを量産。</p>
          <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#00F0FF] text-[#030712] px-8 py-3 rounded-xl font-bold">AIキャラクターを活躍させる →</a>
        </div>
        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:grid grid-cols-2 gap-2">
          {heroChars.map(c => (
            <div key={c.name} className="group w-36 h-44 rounded-xl overflow-hidden border border-white/5 hover:border-[#00F0FF]/25 transition-all relative">
              <img src={c.src} alt={c.name} className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300" loading="lazy" />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 md:px-16 py-16 bg-[#0B1120]">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00F0FF] mb-2">活用シーン</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">AIキャラクターで何ができる？</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {useCases.map(u => (
            <div key={u.t} className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-[#00F0FF] hover:-translate-y-1 transition-all">
              <span className="text-2xl mb-3 block">{u.i}</span>
              <h4 className="text-sm font-bold text-white mb-1">{u.t}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{u.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="px-6 md:px-16 py-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00F0FF] mb-2">MVプロンプト</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">コピーして、すぐコンテンツを量産</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prompts.map(p => (
            <div key={p.t} className="bg-[#00F0FF]/5 border border-[#00F0FF]/10 rounded-2xl p-6">
              <p className="text-[11px] font-bold text-[#00F0FF] mb-2">{p.l}</p>
              <h4 className="text-base font-bold text-white mb-3">{p.t}</h4>
              <div className="bg-black/30 text-gray-500 text-xs leading-relaxed p-3 rounded-xl mb-3 font-mono">{p.p}</div>
              <CopyButton text={p.p} className="bg-[#00F0FF] text-[#030712]" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">AIキャラクターの活躍は今日から</h2>
        <p className="text-sm text-gray-500 mb-8">無料クレジットですぐに始められます。クレジットカード不要。</p>
        <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#00F0FF] text-[#030712] px-8 py-3 rounded-xl font-bold">AIキャラクターを活躍させる →</a>
      </section>

      <section className="px-6 md:px-16 py-10 max-w-3xl">
        <p className="text-xs text-gray-600 leading-loose">TuneeのAIインフルエンサー作成機能は、静止画アバターにとどまらないバーチャルアーティストプラットフォームです。歌声・楽曲・リップシンクMV・ダンスコンテンツまで。日常Vlog、自己紹介動画、バイラルダンスショート、Spotifyへの楽曲リリースまで — すべて著作権フリー・商用利用OK・Content ID対策済み。</p>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className="text-base font-bold text-white">Tunee<span className="text-[#00F0FF]">.</span></a>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="https://www.tunee.ai/music-agent" className="text-xs text-gray-500 hover:text-gray-300">Music Agent</a>
            <a href="https://www.tunee.ai/home/ai-music-video" className="text-xs text-gray-500 hover:text-gray-300">MV Studio</a>
            <a href="https://www.tunee.ai/pricing" className="text-xs text-gray-500 hover:text-gray-300">Pricing</a>
            <a href="https://www.tunee.ai/faq" className="text-xs text-gray-500 hover:text-gray-300">FAQ</a>
            <a href="https://www.tunee.ai/terms-of-service" className="text-xs text-gray-500 hover:text-gray-300">Terms of Service</a>
            <a href="https://www.tunee.ai/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
        <p className="text-[11px] text-gray-600">© 2025 Qustar Technology PTE. LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}
