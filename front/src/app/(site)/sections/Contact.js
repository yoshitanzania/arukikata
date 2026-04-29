import Link from "next/link";
import styles from "./contact.module.css";
import PageLinkPrimary from "@/components/PageLinks";
export default function Contact() {
    const FLOW = [
        { step: "1", title: "お問い合わせ", desc: "フォーム / メール / Instagram DM から連絡。" },
        { step: "2", title: "ヒアリング", desc: "ご希望・日程・ご予算・不安点を日本語で確認。" },
        { step: "3", title: "プラン提案", desc: "現地パートナーと調整し最適な案を提案。" },
        { step: "4", title: "ご判断", desc: "内容に納得いただけた場合のみ手配を進める。" },
    ];
  return (
    <section className={`${styles.section} containerUnified`} id="contact">
      <div className="head">
        <p className="enTitle">Start Your Trip</p>
        <h2 className="jpTitle">ご相談の流れ</h2>
      </div>

      <div className={styles.flow}>
        {FLOW.map((f) => (
          <div key={f.step} className={styles.flowItem}>
            <div className={styles.flowNum}>{f.step}</div>

            <div className={styles.flowBody}>
              <div className={styles.flowTitle}>{f.title}</div>
              <div className={styles.flowDesc}>{f.desc}</div>
            </div>
          </div>
        ))}

        
      </div>
      <PageLinkPrimary text="無料で相談" destination="/contact" />
    </section>
  );
}
