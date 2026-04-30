export interface CharacterDemo {
  src: string; name: string; sub: string; genre: string;
}
export interface Prompt {
  label: string; title: string; text: string;
}
export interface PageData {
  slug: string;
  theme: "dark-gold" | "dark-neon" | "dark-cyan" | "light-warm";
  meta: { title: string; description: string; keywords: string; };
  badge: string;
  h1: [string, string]; // [before accent, accent text]
  subtitle: string;
  trustLine: string;
  cta: string;
  demos: CharacterDemo[];
  demoSectionTitle: string;
  steps: { n: string; t: string; d: string; }[];
  stepsSectionTitle: string;
  prompts: Prompt[];
  seoText: string;
  finalCtaTitle: string;
}

export const pages: Record<string, PageData> = {
  "ai-singer": {
    slug: "ai-singer",
    theme: "dark-gold",
    meta: {
      title: "AIキャラクターに歌わせよう — AI歌声キャラクター作成 | Tunee",
      description: "Tuneeで自分だけのAIシンガーを作成。写真をアップロードしてキャラクターを作り、あらゆるジャンルで歌わせましょう。著作権フリー・商用利用OK・JASRAC不要。",
      keywords: "AIシンガー,AI歌声生成,バーチャルシンガー作成,AI歌手 作り方,歌声合成 AI",
    },
    badge: "AI Character × Singing Voice",
    h1: ["AIキャラクターで", "歌わせよう"],
    subtitle: "あなたのAIキャラクターに声を与え、あらゆるジャンルで歌わせましょう。Pop、R&B、EDM、ロック、ボカロ風まで — 写真1枚から始められます。",
    trustLine: "著作権フリー・商用利用OK ／ JASRAC登録不要 ／ Content ID対策済み",
    cta: "AIキャラクターに歌わせる →",
    demoSectionTitle: "AIキャラクターが歌う、あらゆるジャンル",
    demos: [
      { src: "/images/char-02.png", name: "Midnight Drive", sub: "KAEL · 男性ボーカル", genre: "シンセウェーブ" },
      { src: "/images/char-05.png", name: "月のしずく", sub: "RUBY · 女性ボーカル", genre: "J-Pop バラード" },
      { src: "/images/char-14.png", name: "Neon Rain", sub: "SORA · 女性ボーカル", genre: "Hip-Hop" },
      { src: "/images/char-10.png", name: "桜エレクトロ", sub: "YAMI · アニメ系ボーカル", genre: "EDM / Dance" },
    ],
    stepsSectionTitle: "AIキャラクターを歌手にする、4ステップ",
    steps: [
      { n: "01", t: "アップロード／デザイン", d: "写真をアップロードするか、ゼロからキャラクターを生成。見た目・名前・ビジュアルアイデンティティを設定。" },
      { n: "02", t: "歌声を設定", d: "ボーカルスタイル、トーン、言語、ジャンルを選択。声をクローンするか、ライブラリから選べます。" },
      { n: "03", t: "楽曲・MVを生成", d: "AIエージェントとチャットで楽曲生成。リップシンクMV、ダンス動画、SNS用ショート素材まで一気に。" },
      { n: "04", t: "どこでも公開", d: "Spotify、YouTube、TikTok、Instagramに投稿 — 著作権フリーで収益化もOK。" },
    ],
    prompts: [
      { label: "🎬 ストーリーMV", title: "失恋バラードの物語", text: "雨の夜、屋上に一人立つ少女。街の灯りがぼやけた背景に広がる。手にはスマホ、画面には古いメッセージ。ネオンの光が涙に反射する。シネマティック、感情的、ゆっくりカメラが寄っていく。サビではリップシンクで顔のクローズアップ。" },
      { label: "🌃 コンセプトMV", title: "ネオン東京パフォーマンス", text: "深夜の東京の路地裏、点滅するネオンサインの下でパフォーマンスするシンガー。色とりどりの光の中を煙が漂う。カメラがキャラクターの周りを回転。9:16縦型、サイバーパンク美学。" },
      { label: "🎨 アニメPV", title: "アニメ風リリックビデオ", text: "アニメ風MV。パステルカラーの空に浮かぶステージで歌うキャラクター。桜の花びらが舞い散る。シーン遷移：教室→屋上→星空の海。新海誠インスパイアのライティング。" },
      { label: "🎤 リップシンク", title: "スタジオ録音風", text: "薄暗いレコーディングスタジオ、ヘッドフォンをつけたシンガーがヴィンテージマイクに向かって歌う。暖かいアンバー色のライティング。すべてのショットをリップシンク。" },
    ],
    seoText: "TuneeのAIシンガー生成機能は、音楽制作の経験がなくても、オリジナルのAI歌声キャラクターを作成できるプラットフォームです。Pop、R&B、Hip-Hop、EDM、ロック、J-Popなど50以上のジャンルに対応。VOCALOIDやNEUTRINOとは異なり、チャット形式でAIエージェントと対話して楽曲を生成し、リップシンクMVまで一貫して制作。著作権フリー・商用利用OK、JASRAC登録不要、Content ID対策済み。",
    finalCtaTitle: "あなたのAIキャラクターが歌い出す時",
  },
  "dance-video": {
    slug: "dance-video",
    theme: "dark-neon",
    meta: {
      title: "AIキャラクターにダンスさせよう — AIダンス動画メーカー | Tunee",
      description: "写真1枚でAIダンス動画を作成。TikTokの人気ダンスを推しキャラやペットに踊らせよう。Motion Control AI搭載。著作権フリー。",
      keywords: "AIダンス動画,Motion Control,ダンス動画 作成,写真 ダンス AI,TikTok ダンス AI,踊ってみた AI",
    },
    badge: "Motion Control AI搭載",
    h1: ["AIキャラクターに", "ダンスさせよう"],
    subtitle: "あなたのAIキャラクターにTikTokで人気のダンスを踊らせよう。写真をアップロードするだけ。しかもTuneeなら、踊るだけでなく歌も歌えます。",
    trustLine: "著作権フリー・商用利用OK ／ Motion Control対応 ／ Content ID対策済み",
    cta: "AIキャラクターを踊らせる →",
    demoSectionTitle: "こんなAIキャラクターが踊り出す",
    demos: [
      { src: "/images/char-01.png", name: "HINA", sub: "K-Pop ダンスカバー", genre: "K-Pop" },
      { src: "/images/char-04.png", name: "MOMO", sub: "TikTokトレンドダンス", genre: "TikTok" },
      { src: "/images/char-03.png", name: "SAKURA", sub: "アニメPVダンス", genre: "アニメ" },
      { src: "/images/char-12.png", name: "モコ", sub: "ペットダンスショート", genre: "ペット" },
    ],
    stepsSectionTitle: "AIキャラクターを3ステップで踊らせる",
    steps: [
      { n: "01", t: "ダンステンプレートを選ぶ", d: "Tunee内蔵のバイラルショート動画テンプレートから選択。または好きなダンス動画をアップロードしてMotion Controlの参照元に。" },
      { n: "02", t: "キャラクターを選ぶ", d: "自撮り写真、推しの画像、ペットの写真をアップロード。AIが顔と身体を自動抽出し、Motion Controlでダンスの動きをマッピング。" },
      { n: "03", t: "生成 → 投稿", d: "Motion Control AIがキャラクターを参照動画と同じように動かしダンス動画を生成。TikTok・Reels・Shortsに即投稿。" },
    ],
    prompts: [
      { label: "💜 推しダンス", title: "推しキャラをステージで踊らせる", text: "コンサートステージで激しいK-Popの振付をパフォーマンスするキャラクター。巨大LEDスクリーンとレーザーライトの演出。ダイナミックなカメラアングル。9:16縦型。" },
      { label: "🐶 ペットダンス", title: "うちの犬/猫が踊るショート動画", text: "かわいいゴールデンレトリバーが後ろ足で立ち上がり、カラフルなリビングルームで楽しそうに踊っている。紙吹雪、パーティーデコレーション。9:16縦型。" },
      { label: "🏙️ ストリートダンス", title: "渋谷ストリートでフリースタイル", text: "夕暮れの渋谷スクランブル交差点でフリースタイルダンスをするキャラクター。アーバンファッション。ゴールデンアワーの光、シネマティックなスローモーション。" },
      { label: "✨ コスプレダンス", title: "コスプレキャラのダンスカバー", text: "アニメコスプレ衣装のキャラクターが、浮遊する提灯に囲まれたファンタジーガーデンでシンクロダンスを披露。魔法のパーティクルエフェクト。" },
    ],
    seoText: "TuneeのAIダンス動画メーカーは、写真1枚からリアルなダンス動画を生成する先進的なMotion Control AIを搭載。TikTokで話題のダンスチャレンジに参加したい方、推しキャラやペットを踊らせたい方に最適。Tuneeのキャラクターは踊るだけでなく歌も歌える。著作権フリー・商用利用OK・Content ID対策済み。",
    finalCtaTitle: "AIキャラクターが踊り出す 🕺",
  },
  "ai-influencer": {
    slug: "ai-influencer",
    theme: "dark-cyan",
    meta: {
      title: "AIキャラクターをインフルエンサーに — バーチャルアーティスト構築 | Tunee",
      description: "Tuneeで歌えるAIインフルエンサーを作成。見た目・声・楽曲・MVまで一貫したバーチャルアーティストを構築。著作権フリー・商用利用OK。",
      keywords: "AIインフルエンサー,バーチャルインフルエンサー 作成,バーチャルアーティスト,VTuber 音楽,AI キャラクター 収益化",
    },
    badge: "AI Character × Influencer",
    h1: ["AIキャラクターを", "インフルエンサーにしよう"],
    subtitle: "あなたのAIキャラクターをバーチャルインフルエンサーとして活躍させましょう。楽曲、MV、ダンス、日常Vlog — 一貫したアイデンティティで、SNSコンテンツを量産。",
    trustLine: "著作権フリー・商用利用OK ／ Content ID対策済み ／ いつでも解約可能",
    cta: "AIキャラクターを活躍させる →",
    demoSectionTitle: "こんなAIキャラクターが活躍中",
    demos: [
      { src: "/images/char-06.png", name: "MIKU", sub: "ライフスタイル系", genre: "INS" },
      { src: "/images/char-09.png", name: "RENA", sub: "ビューティー系", genre: "YouTube" },
      { src: "/images/char-07.png", name: "NANA", sub: "3Dアバター系", genre: "TikTok" },
      { src: "/images/char-08.png", name: "YUKI", sub: "アニメ系バーチャルアーティスト", genre: "Spotify" },
    ],
    stepsSectionTitle: "AIキャラクターで 制作 → 公開 → 収益化",
    steps: [
      { n: "01", t: "キャラクターデザイン", d: "写真アップロードまたはゼロから生成。見た目・スタイル・パーソナリティを設定。" },
      { n: "02", t: "楽曲を生成", d: "Tuneeとチャットしてオリジナル楽曲を制作。声をクローンまたはライブラリから選択。" },
      { n: "03", t: "コンテンツ制作", d: "リップシンクMV、ダンス動画、パフォーマンスクリップを生成 — すべてブランド統一。" },
      { n: "04", t: "公開＆収益化", d: "TikTok、YouTube、Instagramへ投稿。商用利用OK。著作権問題ゼロ。" },
    ],
    prompts: [
      { label: "🚀 デビューMV", title: "バーチャルアーティストの初投稿MV", text: "バーチャルアーティストのグランドデビュー。ミニマルな白いステージが銀河へ変わる。カメラに向かって進み感情を込めてパフォーマンス。リップシンクあり。" },
      { label: "🛍️ 商品紹介", title: "新商品プロモ × 音楽", text: "モダンアパートメントで商品を開封・紹介するキャラクター。商品クローズアップとダンス・歌唱を交互に。ライフスタイル感。9:16縦型。" },
      { label: "☀️ SNS日常", title: "おはよう日常ルーティンMV", text: "モーニングルーティンモンタージュ。目覚め、窓辺でストレッチ、コーヒーを淹れる。温かい朝の光。美的なVlogスタイル。" },
      { label: "🎆 ライブ風", title: "バーチャルライブパフォーマンス", text: "巨大ホログラフィックステージでパフォーマンス。音楽に反応するビジュアルエフェクト。フルリップシンク、コンサートのエネルギー。" },
    ],
    seoText: "TuneeのAIインフルエンサー作成機能は、静止画アバターにとどまらないバーチャルアーティストプラットフォームです。歌声・楽曲・リップシンクMV・ダンスコンテンツまで。日常Vlog、バイラルダンスショート、Spotifyへの楽曲リリースまで — すべて著作権フリー・商用利用OK・Content ID対策済み。",
    finalCtaTitle: "AIキャラクターの活躍は今日から",
  },
  "theme-song": {
    slug: "theme-song",
    theme: "light-warm",
    meta: {
      title: "AIキャラクターのテーマソングを作ろう — 推し・ペット・オリキャラの専属曲 | Tunee",
      description: "推し、ペット、オリキャラ、ブランドに専属テーマソングを。Tuneeに性格やストーリーを伝えるだけで、AIがオリジナル楽曲とMVを生成。著作権フリー。",
      keywords: "テーマソング メーカー,テーマソング 作成 AI,推し 曲 作る,オリキャラ BGM,ペット 歌 作成",
    },
    badge: "AI Character × Theme Song",
    h1: ["AIキャラクターに", "テーマソングを作ろう"],
    subtitle: "推し、ペット、大切な家族、憧れのアイドル、自分自身 — 専属のテーマソングとMVを。写真や思い出からキャラクターを生み出しましょう。",
    trustLine: "著作権フリー・商用利用OK ／ Content ID対策済み ／ いつでも解約可能",
    cta: "AIキャラクターの曲を作る →",
    demoSectionTitle: "こんなAIキャラクターにテーマソングを",
    demos: [
      { src: "/images/char-15.png", name: "REN", sub: "ストリート系 × ヒップホップ", genre: "Hip-Hop" },
      { src: "/images/char-11.png", name: "ぽんた", sub: "マスコットキャラ × ほのぼのPop", genre: "Pop" },
      { src: "/images/char-13.png", name: "DOGE将軍", sub: "ペットIP × エピックテーマ", genre: "Epic" },
      { src: "/images/char-03.png", name: "ひめ", sub: "アイドル系 × かわいいPop", genre: "Kawaii" },
    ],
    stepsSectionTitle: "AIキャラクターのテーマソングを3ステップで",
    steps: [
      { n: "01", t: "キャラクターを伝える", d: "AIキャラクターの性格、ムード、ストーリーをTuneeに伝えます。写真があればアップロード。" },
      { n: "02", t: "AIが作曲", d: "Tuneeの音楽エージェントが歌詞を書き、ジャンルを選び、ボーカル付きの楽曲を生成。" },
      { n: "03", t: "楽曲 + 映像を受け取る", d: "テーマソング、リップシンクMV、ダンス動画、SNS用ショート素材まで。まるごと受け取れます。" },
    ],
    prompts: [
      { label: "⚔️ オリキャラ登場", title: "キャラクターの壮大な登場シーン", text: "壮大なキャラクター登場。霧の中を歩くシルエットがバックライトで姿を現す。山々とオーロラのファンタジー風景。シネマティック、オーケストラ感。" },
      { label: "🐱 ペットソング", title: "うちの子のかわいいMV", text: "ふわふわの猫が日当たりの良い部屋でくつろぎ、毛糸で遊び、カメラを直視。暖かいライティング、ボケ背景。日常の瞬間のモンタージュ。" },
      { label: "🎂 バースデーギフト", title: "サプライズ誕生日ソングMV", text: "風船が上がり紙吹雪が舞い、キャンドル付き誕生日ケーキ。笑顔でカメラに手を振る。暖かいゴールドのライティング。" },
      { label: "🏢 ブランドロゴ", title: "ブランドのサウンドロゴ映像", text: "洗練されたロゴアニメーション。幾何学シェイプが暗い背景で集まりブランドマークを形成。メタリック反射。5〜15秒ループ。" },
    ],
    seoText: "TuneeのAIテーマソングメーカーは、あらゆるキャラクター・人物・ペット・ブランドのためにオリジナルのカスタムソングを作成できるプラットフォーム。楽曲は著作権フリー・商用利用OK・JASRAC登録不要。",
    finalCtaTitle: "すべてのAIキャラクターに歌を 🎵",
  },
}

export const slugs = Object.keys(pages)
