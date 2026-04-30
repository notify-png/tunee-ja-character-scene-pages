import CopyButton from "@/app/CopyButton"
export const metadata = {
  title: "AIキャラクターに歌わせよう — AI歌声キャラクター作成 | Tunee",
  description: "Tuneeで自分だけのAIシンガーを作成。写真をアップロードしてキャラクターを作り、あらゆるジャンルで歌わせましょう。著作権フリー・商用利用OK・JASRAC不要。",
}
export default function Page() {
  const demos = [
    { src: "/images/char-02.png", name: "Midnight Drive", sub: "KAEL · 男性ボーカル", genre: "シンセウェーブ" },
    { src: "/images/char-05.png", name: "月のしずく", sub: "RUBY · 女性ボーカル", genre: "J-Pop バラード" },
    { src: "/images/char-14.png", name: "Neon Rain", sub: "SORA · 女性ボーカル", genre: "Hip-Hop" },
    { src: "/images/char-10.png", name: "桜エレクトロ", sub: "YAMI · アニメ系ボーカル", genre: "EDM / Dance" },
  ]
  const steps = [
    { n: "01", t: "アップロード／デザイン", d: "写真をアップロードするか、ゼロからキャラクターを生成。見た目・名前・ビジュアルアイデンティティを設定。" },
    { n: "02", t: "歌声を設定", d: "ボーカルスタイル、トーン、言語、ジャンルを選択。声をクローンするか、ライブラリから選べます。" },
    { n: "03", t: "楽曲・MVを生成", d: "AIエージェントとチャットで楽曲生成。リップシンクMV、ダンス動画、SNS用ショート素材まで一気に。" },
    { n: "04", t: "どこでも公開", d: "Spotify、YouTube、TikTok、Instagramに投稿 — 著作権フリーで収益化もOK。" },
  ]
  const prompts = [
    { l: "🎬 ストーリーMV", t: "失恋バラードの物語", p: "雨の夜、屋上に一人立つ少女。街の灯りがぼやけた背景に広がる。手にはスマホ、画面には古いメッセージ。ネオンの光が涙に反射する。シネマティック、感情的、ゆっくりカメラが寄っていく。サビではリップシンクで顔のクローズアップ。" },
    { l: "🌃 コンセプトMV", t: "ネオン東京パフォーマンス", p: "深夜の東京の路地裏、点滅するネオンサインの下でパフォーマンスするシンガー。色とりどりの光の中を煙が漂う。カメラがキャラクターの周りを回転。ビートドロップに合わせたダイナミックなカット。9:16縦型、サイバーパンク美学。" },
    { l: "🎨 アニメPV", t: "アニメ風リリックビデオ", p: "アニメ風MV。パステルカラーの空に浮かぶステージで歌うキャラクター。桜の花びらが舞い散る。シーン遷移：教室→屋上→星空の海。柔らかいセル画調、鮮やかな色彩、新海誠インスパイアのライティング。" },
    { l: "🎤 リップシンク", t: "スタジオ録音風", p: "薄暗いレコーディングスタジオの中、ヘッドフォンをつけたシンガーがヴィンテージマイクに向かって歌う。暖かいアンバー色のライティング、浅い被写界深度。すべてのショットをリップシンク。クローズアップとミディアムショットを交互に。" },
  ]
  return (
    <div className="bg-[#0D0D0D] text-[#FAF5EB] min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between bg-black/85 backdrop-blur-xl border-b border-white/5">
        <a href="https://www.tunee.ai" className="text-xl font-bold text-white">Tunee<span className="text-[#D4A853]">.</span></a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className="hidden md:block text-xs text-gray-400 hover:text-white">Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className="hidden md:block text-xs text-gray-400 hover:text-white">MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className="hidden md:block text-xs text-gray-400 hover:text-white">Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className="text-xs text-gray-400 hover:text-white">Log in</a>
          <a href="https://www.tunee.ai/sign-up" className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-lg">Sign up</a>
        </nav>
      </header>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20">
        <div className="max-w-xl">
          <span className="inline-block bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] px-3 py-1 rounded-full text-[11px] mb-5">AI Character × Singing Voice</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">AIキャラクターで<span className="text-[#D4A853]">歌わせよう</span></h1>
          <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-md">あなたのAIキャラクターに声を与え、あらゆるジャンルで歌わせましょう。Pop、R&B、EDM、ロック、ボカロ風まで — 写真1枚から始められます。</p>
          <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#D4A853] text-black px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">AIキャラクターに歌わせる →</a>
          <p className="mt-3 text-xs text-gray-500">クレジットカード不要 · 著作権フリー・商用利用OK ／ JASRAC登録不要 ／ Content ID対策済み</p>
        </div>
      </section>

      {/* Demo Characters */}
      <section className="px-6 md:px-16 py-16">
        <p className="text-[11px] uppercase tracking-widest text-[#D4A853] font-semibold mb-2">試聴する</p>
        <h2 className="text-3xl font-extrabold text-white mb-3">AIキャラクターが歌う、あらゆるジャンル</h2>
        <p className="text-sm text-gray-400 mb-10 max-w-md">キャラクターごとに異なる見た目と歌声。</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {demos.map(d => (
            <div key={d.name} className="group rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#D4A853]/30 hover:-translate-y-1 transition-all">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={d.src} alt={d.sub} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-semibold text-white">{d.name}</h4>
                <p className="text-[11px] text-gray-400">{d.sub}</p>
                <span className="inline-block mt-1 text-[10px] text-[#D4A853] bg-[#D4A853]/10 px-2 py-0.5 rounded">{d.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 md:px-16 py-16 bg-[#1A1A1A]">
        <p className="text-[11px] uppercase tracking-widest text-[#D4A853] font-semibold mb-2">使い方</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">AIキャラクターを歌手にする、4ステップ</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n}>
              <div className="text-5xl font-black text-[#D4A853]/10 mb-2">{s.n}</div>
              <h4 className="text-base font-bold text-white mb-1">{s.t}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MV Prompts */}
      <section className="px-6 md:px-16 py-16">
        <p className="text-[11px] uppercase tracking-widest text-[#D4A853] font-semibold mb-2">MVプロンプト</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">コピーして、すぐMVを作成</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prompts.map(p => (
            <div key={p.t} className="bg-[#D4A853]/5 border border-[#D4A853]/10 rounded-2xl p-6">
              <p className="text-[11px] font-bold text-[#D4A853] mb-2">{p.l}</p>
              <h4 className="text-base font-bold text-white mb-3">{p.t}</h4>
              <div className="bg-black/30 text-gray-400 text-xs leading-relaxed p-3 rounded-xl mb-3 font-mono">{p.p}</div>
              <CopyButton text={p.p} className="bg-[#D4A853] text-black" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">あなたのAIキャラクターが歌い出す時</h2>
        <p className="text-sm text-gray-400 mb-8">無料クレジットですぐに始められます。クレジットカード不要。</p>
        <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#D4A853] text-black px-8 py-3 rounded-xl font-bold">AIキャラクターに歌わせる →</a>
      </section>

      {/* SEO */}
      <section className="px-6 md:px-16 py-10 max-w-3xl">
        <p className="text-xs text-gray-600 leading-loose">TuneeのAIシンガー生成機能は、音楽制作の経験がなくても、オリジナルのAI歌声キャラクターを作成できるプラットフォームです。Pop、R&B、Hip-Hop、EDM、ロック、J-Popなど50以上のジャンルに対応。VOCALOIDやNEUTRINOとは異なり、チャット形式でAIエージェントと対話して楽曲を生成し、リップシンクMVまで一貫して制作。著作権フリー・商用利用OK、JASRAC登録不要、Content ID対策済み。</p>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className="text-base font-bold text-white">Tunee<span className="text-[#D4A853]">.</span></a>
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
