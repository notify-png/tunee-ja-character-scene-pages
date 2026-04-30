import CopyButton from "@/app/CopyButton"
export const metadata = {
  title: "AIキャラクターのテーマソングを作ろう — 推し・ペット・オリキャラの専属曲 | Tunee",
  description: "推し、ペット、オリキャラ、ブランドに専属テーマソングを。Tuneeに性格やストーリーを伝えるだけで、AIがオリジナル楽曲とMVを生成。著作権フリー。",
}
export default function Page() {
  const chars = [
    { src: "/images/char-15.png", name: "REN", g: "ストリート系 × ヒップホップ" },
    { src: "/images/char-11.png", name: "ぽんた", g: "マスコットキャラ × ほのぼのPop" },
    { src: "/images/char-13.png", name: "DOGE将軍", g: "ペットIP × エピックテーマ" },
    { src: "/images/char-03.png", name: "ひめ", g: "アイドル系 × かわいいPop" },
  ]
  const scenes = [
    { i: "🎮", t: "オリキャラ / ゲームキャラ", d: "キャラクターの壮大な登場テーマを。性格・バックストーリーを伝えれば、Tuneeが楽曲とMVを生成。", tag: "一番人気" },
    { i: "🐶", t: "うちのペット", d: "犬、猫、ハムスターの写真から楽しいオリジナルソングを。SNSでシェアすれば注目間違いなし。", tag: "プレゼントに最適" },
    { i: "👴", t: "亡くなった家族の思い出を映像に", d: "古い写真や映像を元に、歌って動くメモリアル映像を作成。大切な思い出を新しい形で。", tag: "メモリアル" },
    { i: "🎂", t: "誕生日 / 記念日ソング", d: "名前、内輪ネタ、思い出を歌詞に。カードよりもずっと心に残るサプライズ。", tag: "プレゼントに最適" },
    { i: "🏢", t: "ブランドの小さなIP / マスコット", d: "テーマソング付きのマスコットが、SNSでブランド認知を広げます。", tag: "ビジネス向け" },
    { i: "🪞", t: "自分のクローン／バーチャルな分身", d: "自分の写真から歌って踊るバーチャルな分身を作成。SNS素材を量産。", tag: "NEW" },
  ]
  const prompts = [
    { l: "⚔️ オリキャラ登場", t: "キャラクターの壮大な登場シーン", p: "壮大なキャラクター登場。霧の中を歩くシルエットがバックライトで姿を現す。山々とオーロラのファンタジー風景。カメラがゆっくり寄り、キャラが振り返る。シネマティック、オーケストラ感。" },
    { l: "🐱 ペットソング", t: "うちの子のかわいいMV", p: "ふわふわの猫が日当たりの良い部屋でくつろぎ、毛糸で遊び、カメラを直視。暖かいライティング、ボケ背景。日常の瞬間のモンタージュ。ほっこり優しい雰囲気。" },
    { l: "🎂 バースデーギフト", t: "サプライズ誕生日ソングMV", p: "風船が上がり、紙吹雪が舞い、キャンドル付き誕生日ケーキ。笑顔でカメラに手を振る。思い出のスライドショー風トランジション。暖かいゴールドのライティング。" },
    { l: "🏢 ブランドロゴ", t: "ブランドのサウンドロゴ映像", p: "洗練されたロゴアニメーション。幾何学シェイプが暗い背景で集まりブランドマークを形成。メタリック反射、モーショングラフィックス。5〜15秒ループ。" },
  ]
  return (
    <div className="bg-[#FDFAF5] text-[#44403C] min-h-screen">
      {/* Light theme header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 flex items-center justify-between bg-[#FDFAF5]/92 backdrop-blur-xl border-b border-black/5">
        <a href="https://www.tunee.ai" className="text-xl font-bold text-[#1C1917]">Tunee<span className="text-[#F97316]">.</span></a>
        <nav className="flex items-center gap-5">
          <a href="https://www.tunee.ai/music-agent" className="hidden md:block text-xs text-gray-400 hover:text-gray-900">Music Agent</a>
          <a href="https://www.tunee.ai/home/ai-music-video" className="hidden md:block text-xs text-gray-400 hover:text-gray-900">MV Studio</a>
          <a href="https://www.tunee.ai/pricing" className="hidden md:block text-xs text-gray-400 hover:text-gray-900">Pricing</a>
          <a href="https://www.tunee.ai/sign-in" className="text-xs text-gray-400 hover:text-gray-900">Log in</a>
          <a href="https://www.tunee.ai/sign-up" className="text-xs font-semibold bg-[#1C1917] text-[#FDFAF5] px-4 py-1.5 rounded-lg">Sign up</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="max-w-xl">
          <span className="text-5xl mb-5 block">🎼</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1C1917] mb-5 leading-tight">AIキャラクターに<span className="text-[#F97316]">テーマソング</span>を<span className="text-[#14B8A6]">作ろう</span></h1>
          <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-md mx-auto">推し、ペット、大切な家族、憧れのアイドル、自分自身 — 専属のテーマソングとMVを。写真や思い出からキャラクターを生み出しましょう。</p>
          <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-200">🎵 AIキャラクターの曲を作る</a>
          <p className="mt-3 text-xs text-gray-400">クレジットカード不要 · 著作権フリー・商用利用OK ／ Content ID対策済み</p>
        </div>
      </section>

      {/* Character Showcase */}
      <section className="px-6 md:px-10 py-16">
        <p className="text-xs uppercase tracking-widest text-[#F97316] font-bold mb-2">キャラクターショーケース</p>
        <h2 className="text-3xl font-black text-[#1C1917] mb-10">こんなAIキャラクターにテーマソングを</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {chars.map(c => (
            <div key={c.name} className="group rounded-2xl overflow-hidden bg-white border border-black/5 hover:border-[#F97316]/30 hover:-translate-y-1 transition-all">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={c.src} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-3">
                <h5 className="text-sm font-bold text-[#1C1917]">{c.name}</h5>
                <p className="text-[11px] text-gray-500">{c.g}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scenes */}
      <section className="px-6 md:px-10 py-16">
        <p className="text-xs uppercase tracking-widest text-[#F97316] font-bold mb-2">こんな人におすすめ</p>
        <h2 className="text-3xl font-black text-[#1C1917] mb-10">すべてのAIキャラクターにテーマソングを贈ろう</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {scenes.map(s => (
            <div key={s.t} className="bg-white rounded-2xl border border-black/5 p-6 hover:border-[#F97316] hover:-translate-y-1 transition-all cursor-pointer">
              <span className="text-3xl mb-3 block">{s.i}</span>
              <h4 className="text-lg font-bold text-[#1C1917] mb-1">{s.t}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">{s.d}</p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316]">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="px-6 md:px-10 py-16">
        <p className="text-xs uppercase tracking-widest text-[#F97316] font-bold mb-2">MVプロンプト</p>
        <h2 className="text-3xl font-black text-[#1C1917] mb-10">こんな使い方ができます — ユーザーストーリー</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prompts.map(p => (
            <div key={p.t} className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6">
              <p className="text-[11px] font-bold text-[#F97316] mb-2">{p.l}</p>
              <h4 className="text-base font-bold text-[#1C1917] mb-3">{p.t}</h4>
              <div className="bg-black/[.03] text-gray-500 text-xs leading-relaxed p-3 rounded-xl mb-3 font-mono border border-black/5">{p.p}</div>
              <CopyButton text={p.p} className="bg-[#F97316] text-white" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-[#1C1917] text-[#FDFAF5]">
        <h2 className="text-3xl font-black mb-3">すべてのAIキャラクターに歌を 🎵</h2>
        <p className="text-sm text-gray-400 mb-8">無料クレジットですぐに始められます。</p>
        <a href="https://www.tunee.ai/sign-up" className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-full font-bold">テーマソングを作成する →</a>
      </section>

      <section className="px-6 md:px-10 py-10 max-w-3xl">
        <p className="text-xs text-gray-400 leading-loose">TuneeのAIテーマソングメーカーは、あらゆるキャラクター・人物・ペット・ブランドのためにオリジナルのカスタムソングを作成できるプラットフォーム。楽曲は著作権フリー・商用利用OK・JASRAC登録不要。</p>
      </section>

      {/* Light Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <a href="https://www.tunee.ai" className="text-base font-bold text-[#1C1917]">Tunee<span className="text-[#F97316]">.</span></a>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="https://www.tunee.ai/music-agent" className="text-xs text-gray-400">Music Agent</a>
            <a href="https://www.tunee.ai/home/ai-music-video" className="text-xs text-gray-400">MV Studio</a>
            <a href="https://www.tunee.ai/pricing" className="text-xs text-gray-400">Pricing</a>
            <a href="https://www.tunee.ai/faq" className="text-xs text-gray-400">FAQ</a>
            <a href="https://www.tunee.ai/terms-of-service" className="text-xs text-gray-400">Terms of Service</a>
            <a href="https://www.tunee.ai/privacy-policy" className="text-xs text-gray-400">Privacy Policy</a>
          </div>
        </div>
        <p className="text-[11px] text-gray-400">© 2025 Qustar Technology PTE. LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}
