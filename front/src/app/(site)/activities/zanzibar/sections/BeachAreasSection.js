import Image from "next/image";
import styles from "./BeachAreasSection.module.css";

export default function BeachAreasSection({
  imageSrc = "/images/zanjibar/beach.webp",
}) {
  return (
    <section className={styles.section} id="beach-areas">
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <p className={styles.kicker}>Beach Areas</p>
            <h2 className={styles.h2}>「どこに泊まるか」で体験が変わる</h2>
            <p className={styles.lead}>
              静けさ/体験/夕景。目的が決まると、エリア選びは一気にラクになる。
            </p>
          </div>

          <div className={styles.media}>
            <Image
              src={imageSrc}
              alt="Zanzibar beach area"
              fill
              sizes="(max-width: 920px) 100vw, 44vw"
              className={styles.img}
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.caption}>Tip: 目的 → エリア → 日数</div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.badge}>Quiet</span>
              <h3 className={styles.h3}>静かに過ごせる</h3>
            </div>
            <p className={styles.p}>休養が主役。読書・昼寝・散歩で旅の疲れを抜く。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.badgeSoft}>Active</span>
              <h3 className={styles.h3}>アクティビティ重視</h3>
            </div>
            <p className={styles.p}>短期滞在ほど効く。動いて満足度を上げる選び方。</p>
          </div>

          <div className={styles.cardSoft}>
            <div className={styles.cardHead}>
              <span className={styles.badge}>Sunset</span>
              <h3 className={styles.h3}>夕景（サンセット）</h3>
            </div>
            <p className={styles.p}>夕方を主役にする。日中は軽めで余白を残す。</p>
            <div className={styles.note}>「映える」より「残る」景色を取りにいく。</div>
          </div>
        </div>
      </div>
    </section>
  );
}