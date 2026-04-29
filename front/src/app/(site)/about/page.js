import Image from "next/image";
import styles from "./About.module.css";
import CommonKV from "@/components/CommonKV";

import {
  FiMessageCircle,
  FiShuffle,
  FiShield,
  FiFileText,
  FiHeart,
} from "react-icons/fi";

export const metadata = {
  title: "運営について | Karibuu TZ",
  description:
    "Karibuu TZが運営する「タンザニア旅行のトリセツ」について。運営方針、連携体制、サポート範囲、安心して相談できる理由を紹介します。",
};

const PROMISES = [
  {
    title: "売りません",
    text: "特定のツアーを販売せず、比較と整理で選べる状態をつくります。",
  },
  {
    title: "隠しません",
    text: "良い面だけでなく、難しい点やリスクも先に共有します。",
  },
  {
    title: "迷わせません",
    text: "条件と違いを短く見える形にして、判断しやすくします。",
  },
];

const STEPS = [
  { n: "01", title: "無料相談", text: "目的・日程・予算感をヒアリングします。" },
  { n: "02", title: "条件整理", text: "ルート・日数・優先順位を一緒に整えます。" },
  { n: "03", title: "比較提案", text: "複数の現地パートナーの条件を並べてご提案します。" },
  { n: "04", title: "調整→確定", text: "条件を明示し、ご納得のうえで進めます。" },
];

const REASONS = [
  {
    title: "日本語で一貫サポート",
    text: "ご相談からご出発まで、日本語で丁寧に伴走します。",
    icon: <FiMessageCircle aria-hidden />,
  },
  {
    title: "比較して選べる",
    text: "複数の信頼できる現地パートナーと連携し、違いを整理してご提案します。",
    icon: <FiShuffle aria-hidden />,
  },
  {
    title: "無料相談で判断材料を揃える",
    text: "現地事情や起こりうることも含め、正直に共有します。無理なおすすめはしません。",
    icon: <FiShield aria-hidden />,
  },
  {
    title: "条件を事前に明示",
    text: "料金・支払い・キャンセル条件を先にわかりやすくお伝えします。",
    icon: <FiFileText aria-hidden />,
  },
  {
    title: "「相談してよかった」を大切に",
    text: "旅の前から旅の後まで、不安なく相談できる関係を目指します。",
    icon: <FiHeart aria-hidden />,
  },
];


const FAQ = [
  {
    q: "まだ日程も内容も決まっていません。相談できますか？",
    a: "もちろんです。情報整理の段階からご相談いただけます。",
  },
  {
    q: "現地パートナーはどう選びますか？",
    a: "ご希望・ご予算・旅行スタイルに合わせて、条件を比較しながらご提案します。",
  },
  {
    q: "どこまでが無料ですか？",
    a: "無料相談の段階で、判断材料を揃えることを重視しています。料金が発生するタイミングは事前に明示します。",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ===== HERO / KV ===== */}
        <CommonKV
          title="ABOUT"
          subtitle="タンザニア旅行を、安心して自由に組み立てられるように。現地パートナーと連携し、比較・検討から予約まで丁寧にサポートしています。"
        />

      {/* ===== PROMISES ===== */}
      <section className={styles.sectionTight} aria-labelledby="promiseTitle">
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <p className={styles.sectionKicker}>WHAT WE PROMISE</p>
            <h2 className={styles.h2} id="promiseTitle">
              3つの約束
            </h2>
            <p className={styles.pCenter}>
              説明を増やすより、判断しやすい形に整えることを大切にしています。
            </p>
          </div>

          <div className={styles.promiseGrid}>
            {PROMISES.map((p) => (
              <article className={styles.promiseCard} key={p.title}>
                <p className={styles.promiseTitle}>{p.title}</p>
                <p className={styles.promiseText}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className={styles.section} id="who" aria-labelledby="whoTitle">
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.copy}>
              <p className={styles.sectionKicker}>WHO WE ARE</p>
              <h2 className={styles.h2} id="whoTitle">
                ツアーを売りません。整えます。
              </h2>

              <p className={styles.p}>
                私たちは特定のツアーを販売する立場ではありません。
                複数の現地パートナーと連携し、比較・整理・調整を行い、
                ご納得いただける選択をつくります。
              </p>

              <div className={styles.pills} aria-label="keywords">
                <span className={styles.pill}>比較</span>
                <span className={styles.pill}>整理</span>
                <span className={styles.pill}>調整</span>
                <span className={styles.pill}>日本語伴走</span>
              </div>

              {/* ここに「実施は現地パートナーが担当」を統合 */}
              <div className={styles.partnerNote} role="note" aria-label="実施について">
                <p className={styles.partnerNoteTitle}>
                  実施は現地パートナーが担当します
                </p>
                <p className={styles.partnerNoteText}>
                  実際の登山実施・ガイド・装備提供などは、信頼できる現地登山会社が担当します。
                </p>
                <p className={styles.partnerNoteSmall}>
                  ※ 当方は旅行業者ではなく、登山計画づくりと調整を行う立場です。
                </p>
              </div>
            </div>

            <div className={styles.mediaCard}>
              <Image
                src="/images/about/about_01.webp"
                alt="タンザニアの風景"
                width={1200}
                height={900}
                className={styles.cardImg}
              />
              <div className={styles.mediaCaption}>
                現地を理解した上で、準備と判断を支えます。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className={styles.sectionAlt} id="work" aria-labelledby="workTitle">
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <p className={styles.sectionKicker}>HOW WE WORK</p>
            <h2 className={styles.h2} id="workTitle">
              相談〜提案までの流れ
            </h2>
            <p className={styles.pCenter}>長文で説明せず、手順でわかるようにします。</p>
          </div>

          <div className={styles.stepGrid}>
            {STEPS.map((s) => (
              <article className={styles.step} key={s.n}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                </div>
                <p className={styles.stepText}>{s.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.splitReverse} style={{ marginTop: 26 }}>
            <div className={styles.mediaCard}>
              <Image
                src="/images/about/about_02.webp"
                alt="サファリの車"
                width={1200}
                height={900}
                className={styles.cardImg}
              />
              <div className={styles.mediaCaption}>
                複数の現地パートナーと連携し、条件を整理します。
              </div>
            </div>

            <div className={styles.copy}>
              <p className={styles.sectionKicker}>PARTNERS</p>
              <h2 className={styles.h2}>現地で信頼できる選択肢を</h2>
              <p className={styles.p}>
                タンザニア国内で実績と信頼のある複数の現地ツアー会社・宿泊施設と連携しています。
                ご要望に応じて最適なパートナーを選定し、内容・価格・条件を比較したうえでご提案します。
              </p>

              <div className={styles.miniGrid}>
                <div className={styles.mini}>
                  <p className={styles.miniTitle}>条件比較</p>
                  <p className={styles.miniText}>価格・日程・含まれる内容を整理します。</p>
                </div>
                <div className={styles.mini}>
                  <p className={styles.miniTitle}>調整</p>
                  <p className={styles.miniText}>旅程の噛み合わせを丁寧に整えます。</p>
                </div>
                <div className={styles.mini}>
                  <p className={styles.miniTitle}>提案</p>
                  <p className={styles.miniText}>目的から逆算してプランをご提案します。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCOPE ===== */}
      <section className={styles.section} id="scope" aria-labelledby="scopeTitle">
        <div className={styles.container}>
          <div className={styles.centerHeadLeft}>
            <p className={styles.sectionKicker}>SCOPE</p>
            <h2 className={styles.h2} id="scopeTitle">
              サポート範囲
            </h2>
            <p className={styles.p}>
              「タンザニア旅行のトリセツ」では、計画と調整を中心にサポートします。
            </p>
          </div>

          <div className={styles.scopeGrid}>
            <div className={styles.scopeCard}>
              <p className={styles.scopeTitle}>対応内容</p>
              <ul className={styles.list}>
                <li>ルート・日数の整理</li>
                <li>複数の現地登山会社の条件比較</li>
                <li>スケジュール調整のサポート</li>
              </ul>
            </div>

            <div className={styles.scopeCardSoft}>
              <p className={styles.scopeTitle}>大切にしていること</p>
              <p className={styles.scopeText}>
                画一的なパッケージではなく、「なぜその旅をしたいのか」を大切にしています。
                初めてのタンザニア旅行でも、不安なく準備を進められるよう伴走します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REASONS ===== */}
      <section className={styles.sectionAlt} id="reasons" aria-labelledby="reasonsTitle">
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <p className={styles.sectionKicker}>WHY SAFE</p>
            <h2 className={styles.h2} id="reasonsTitle">
              安心してご相談いただくために
            </h2>
            <p className={styles.pCenter}>
              海外旅行、しかもアフリカ・タンザニア。楽しみな反面、不安もあるはずです。
              その不安をできる限り減らし、納得したうえで旅を選べる状態をつくります。
            </p>
          </div>

          <div className={styles.reasonIconGrid}>
            {REASONS.map((r) => (
              <article className={styles.reasonIconCard} key={r.title}>
                <div className={styles.reasonIcon}>
                  {r.icon}
                </div>
                <div className={styles.reasonBody}>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonText}>{r.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaInner}>
              <p className={styles.ctaLead}>まだ具体的に決まっていなくても大丈夫です。</p>
              <p className={styles.ctaSub}>
                情報収集の段階から、お気軽にご相談ください。判断材料を整えるところから始めます。
              </p>
              <div className={styles.ctaBtns}>
                <a className={styles.btnPrimary} href="/contact">
                  無料で相談する
                </a>
                <a className={styles.btnGhost} href="#top">
                  上に戻る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FAQ ===== */}
      <section className={styles.section} id="faq" aria-labelledby="faqTitle">
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <p className={styles.sectionKicker}>FAQ</p>
            <h2 className={styles.h2} id="faqTitle">
              よくあるご質問
            </h2>
            <p className={styles.pCenter}>短く、わかりやすくお答えします。</p>
          </div>

          <div className={styles.faqGrid}>
            {FAQ.map((item) => (
              <details className={styles.faq} key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>Karibuu TZ / タンザニア旅行のトリセツ</p>
        </div>
      </footer>
    </main>
  );
}
