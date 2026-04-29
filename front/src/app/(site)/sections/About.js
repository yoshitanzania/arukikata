import styles from "./About.module.css";
import PageLinkPrimary from "@/components/PageLinks";
import {
  FiMessageCircle,
  FiShuffle,
  FiShield,
  FiHeart,
} from "react-icons/fi";

export default function About() {
  const strengths = [
    {
      no: "01",
      title: "日本語で、意思疎通がズレない",
      description:
        "現地を知る日本人が対応し、内容や注意点まで日本語でわかりやすく案内する。",
      icon: FiMessageCircle,
    },
    {
      no: "02",
      title: "現地ツアー会社を比較できる",
      description:
        "複数社の提案を並べて見られるから、価格や内容を比べながら納得して選べる。",
      icon: FiShuffle,
    },
    {
      no: "03",
      title: "価格が明瞭で安心",
      description:
        "費用は内訳がわかる形で提示。不明瞭な手数料が入りにくく、判断しやすい。",
      icon: FiShield,
    },
    {
      no: "04",
      title: "相談・ヒアリング・見積もり案内は無料",
      description:
        "まずは状況整理だけでも大丈夫。無理に申し込みへ進めることなく、気軽に相談できる。",
      icon: FiHeart,
    },
  ];

  return (
    <section id="why" className={`${styles.whyWrap} containerUnified`}>
      <div className="head">
        <p className="enTitle">Why us</p>
        <h2 className="jpTitle">トリセツの強み</h2>
      </div>
      <div className={styles.grid}>
        {strengths.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.no} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <div className={styles.no}>{item.no}</div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </article>
          );
        })}
      </div>

      <div className={styles.ctaRow}>
        <PageLinkPrimary text="私たちについて" destination="/about" />
      </div>
    </section>
  );
}