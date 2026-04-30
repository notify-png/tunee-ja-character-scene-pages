import CopyButton from "@/app/CopyButton"
export const metadata = {
  title: "AIキャラクターにダンスさせよう — AIダンス動画メーカー | Tunee",
  description: "写真1枚でAIダンス動画を作成。TikTokの人気ダンスを推しキャラやペットに踊らせよう。Motion Control AI搭載。著作権フリー。",
}
export default function Page() {
  const chars = [
    { src: "/images/char-01.png", name: "HINA", g: "K-Pop ダンスカバー" },
    { src: "/images/char-04.png", name: "MOMO", g: "TikTokトレンドダンス" },
    { src: "/images/char-03.png", name: "SAKURA", g: "アニメPVダンス" },
    { src: "/images/char-12.png", name: "モコ", g: "ペットダンスショート" },
  ]
  const trends = [
    { icon: "🔥", name: "K-Popアイドル振付コピー", meta: "好きなアイドルの振付をAIで完全再現", tag: "トレンド" },
    { icon: "💜", name: "ベビーダンスミーム", meta: "赤ちゃんの写真が踊り出す", tag: "バイラル" },
    { icon: "🎯", name: "セレブダンスチャレンジ", meta: "好きなアイドルや有名人を踊らせよう", tag: "トレンド" },
    { icon: "🏙️", name: "ストリートダンス", meta: "渋谷の街角でフリースタイル", tag: "定番" },
    { icon: "🤠", name: "C-Walkチャレンジ", meta: "写真1枚で即ダンス生成", tag: "定番" },
    { icon: "📤", name: "自分のダンスを使う", meta: "好きな動画をMotion Controlソースに", tag: "カスタム" },
  ]
  const prompts = [
    { l: "💜 推しダンス", t: "推しキャラをステージで踊らせる", p: "コンサートステージで激しいK-Popの振付をパフォーマンスするキャラクター。巨大LEDスクリーンとレーザーライトの演出。ダイナミックなカメラアングル、ビートに合わせた速いカット割り。9:16縦型。" },
    { l: "🐶 ペットダンス", t: "うちの犬/猫が踊るショート動画", p: "かわいいゴールデンレトリバーが後ろ足で立ち上がり、カラフルなリビングルームで楽しそうに踊っている。紙吹雪が舞い、パーティーデコレーション。楽しくてバイラルなTikTokスタイル。9:16縦型。" },
    { l: "🏙️ ストリートダンス", t: "渋谷ストリートでフリースタイル", p: "夕暮れの渋谷スクランブル交差点でフリースタイルダンスをするキャラクター。アーバンファッション、スナップバックキャップ。ゴールデンアワーの光、シネマティックなスローモーション。" },
    { l: "✨ コスプレダンス", t: "コスプレキャラのダンスカバー", p: "アニメコスプレ衣装のキャラクターが、浮遊する提灯に囲まれたファンタジーガーデンでシンクロダンスを披露。魔法のパーティクルエフェクト。幻想的な雰囲気、柔らかい紫とブルーのライティング。" },
  ]
  return (
    <div className="bg-[#050510] text-[#E8E8F0] min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between bg-black/85 backdrop-blur-xl border-b border-white/5">
        <a href="https://www.tunee.ai" className="text-xl font-bold text-white">Tunee<span className="text-[#FF2E97]">.</span></a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className="hidden md:block text-xs text-gray-400 hover:text-white">Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className="hidden md:block text-xs text-gray-400 hover:text-white">MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className="hidden md:block text-xs text-gray-400 hover:text-white">Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className="text-xs text-gray-400 hover:text-white">Log in</a>
          <a href="https://www.tunee.ai/sign-up" className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-lg">Sign up</a>
        </nav>
      </header>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0520] via-[#150A30] to-[#0A1525] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,46,151,.08),rgba(0,212,255,.04)_40%,transparent_70%)]" />
        <div className="relative z-10">
          <p className="font-mono text-xs text-[#39FF14] tracking-widest mb-5">— Motion Control AI搭載 —</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">AIキャラクターに<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E97] to-[#00D4FF]">ダンス</span>させよう</h1>
          <p className="text-base text-[#8888AA] max-w-lg mx-auto mb-10 leading-relaxed">あなたのAIキャラクターにTikTokで人気のダンスを踊らせよう。写真をアップロードするだけ。しかもTuneeなら、踊るだけでなく歌も歌えます。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://www.tunee.ai/sign-up" className="bg-gradient-to-r from-[#FF2E97] to-[#8B5CF6] text-white px-8 py-3 rounded-full font-bold">🕺 AIキャラクターを踊らせる</a>
            <a href="#trending" className="border border-white/10 text-white px-8 py-3 rounded-full font-semibold hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all">人気ダンスを見る</a>
          </div>
        </div>
      </section>

      {/* Character Showcase */}
      <section className="px-6 md:px-10 py-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] mb-2">キャラクターショーケース</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">こんなAIキャラクターが踊り出す</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {chars.map(c => (
            <div key={c.name} className="group rounded-2xl overflow-hidden bg-[#0A0A1F] border border-white/5 hover:-translate-y-1 transition-all">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={c.src} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#0A0A1F] to-transparent" />
              </div>
              <div className="p-3">
                <h5 className="text-sm font-semibold text-white">{c.name}</h5>
                <p className="text-[11px] text-[#8888AA]">{c.g}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="px-6 md:px-10 py-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] mb-2">いまトレンド</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">AIキャラクターのダンスを選ぼう</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {trends.map(t => (
            <div key={t.name} className="bg-[#0A0A1F] rounded-2xl border border-white/5 p-5 hover:border-[#FF2E97] hover:-translate-y-1 transition-all cursor-pointer">
              <span className="text-3xl mb-3 block">{t.icon}</span>
              <p className="text-base font-bold text-white mb-1">{t.name}</p>
              <p className="text-xs text-[#8888AA] mb-2">{t.meta}</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FF2E97]/10 text-[#FF2E97]">{t.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 md:px-10 py-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] mb-2">Motion Control ワークフロー</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">AIキャラクターを3ステップで踊らせる</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {[
            { n: "1", c: "border-[#FF2E97]/30 text-[#FF2E97]", t: "ダンステンプレートを選ぶ", d: "Tunee内蔵のバイラルショート動画テンプレートから選択。または好きなダンス動画をアップロードしてMotion Controlの参照元に。" },
            { n: "2", c: "border-[#00D4FF]/30 text-[#00D4FF]", t: "キャラクターを選ぶ", d: "自撮り写真、推しの画像、ペットの写真をアップロード。AIが顔と身体を自動抽出し、Motion Controlでダンスの動きをマッピング。" },
            { n: "3", c: "border-[#39FF14]/20 text-[#39FF14]", t: "生成 → 投稿", d: "Motion Control AIがキャラクターを参照動画と同じように動かしダンス動画を生成。TikTok・Reels・Shortsに即投稿。" },
          ].map(s => (
            <div key={s.n} className="flex-1 text-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-xl font-bold mx-auto mb-4 border-2 ${s.c}`}>{s.n}</div>
              <h4 className="text-base font-bold text-white mb-1">{s.t}</h4>
              <p className="text-sm text-[#8888AA] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="px-6 md:px-10 py-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] mb-2">MVプロンプト</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">コピーして、すぐダンスMVを作成</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prompts.map(p => (
            <div key={p.t} className="bg-[#FF2E97]/5 border border-[#FF2E97]/10 rounded-2xl p-6">
              <p className="text-[11px] font-bold text-[#FF2E97] mb-2">{p.l}</p>
              <h4 className="text-base font-bold text-white mb-3">{p.t}</h4>
              <div className="bg-black/40 text-[#8888AA] text-xs leading-relaxed p-3 rounded-xl mb-3 font-mono">{p.p}</div>
              <CopyButton text={p.p} className="bg-[#FF2E97] text-white" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">AIキャラクターが踊り出す 🕺</h2>
        <p className="text-sm text-[#8888AA] mb-8">無料クレジットですぐに始められます。クレジットカード不要。</p>
        <a href="https://www.tunee.ai/sign-up" className="inline-block bg-gradient-to-r from-[#FF2E97] to-[#8B5CF6] text-white px-8 py-3 rounded-full font-bold">AIキャラクターを踊らせる →</a>
      </section>

      <section className="px-6 md:px-10 py-10 max-w-3xl">
        <p className="text-xs text-gray-600 leading-loose">TuneeのAIダンス動画メーカーは、写真1枚からリアルなダンス動画を生成する先進的なMotion Control AIを搭載。TikTokで話題のダンスチャレンジに参加したい方、推しキャラやペットを踊らせたい方に最適。Tuneeのキャラクターは踊るだけでなく歌も歌える。著作権フリー・商用利用OK・Content ID対策済み。</p>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className="text-base font-bold text-white">Tunee<span className="text-[#FF2E97]">.</span></a>
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
