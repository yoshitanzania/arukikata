import Image from "next/image";
import styles from "./AppealSection.module.css";

export default function AppealSection({
  imageSrc = "/images/zanjibar/appeal.webp",
}) {
  return (
    <section className={styles.section} id="appeal">
      <div className={styles.wrap}>
        <div className={styles.head}>
          <p className={styles.kicker}>Highlights</p>
          <h2 className={styles.h2}>ザンジバル島の魅力</h2>
          <p className={styles.lead}>
            「何もしない贅沢」も「街歩きと文化体験」も両立する、旅の“余白”担当。
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              src={imageSrc}
              alt="Zanzibar beach"
              fill
              sizes="(max-width: 920px) 100vw, 52vw"
              className={styles.img}
              priority={false}
            />
            <div className={styles.mediaOverlay} aria-hidden="true" />
            <div className={styles.mediaTag}>
              <span className={styles.tag}>Resort</span>
              <span className={styles.tagSoft}>余白と余韻</span>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.dot} aria-hidden="true" />
                <h3 className={styles.h3}>インド洋に浮かぶリゾート</h3>
              </div>
              <p className={styles.p}>
                白い砂浜とターコイズブルー。視界の情報量が減って、頭が静かになる。
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.dot} aria-hidden="true" />
                <h3 className={styles.h3}>歴史地区×ビーチの両立</h3>
              </div>
              <p className={styles.p}>
                「街で文化、海で休養」を同じ旅でやれるのが強い。
              </p>
            </div>

            <div className={styles.cardSoft}>
              <div className={styles.cardTop}>
                <span className={styles.dot2} aria-hidden="true" />
                <h3 className={styles.h3}>組み合わせやすい立地</h3>
              </div>
              <p className={styles.p}>
                サファリ/登山のあとに入れると、旅全体の完成度が上がる。
              </p>

              <div className={styles.chips}>
                <span className={styles.chip}>サファリ → 海</span>
                <span className={styles.chip}>登山 → 休養</span>
                <span className={styles.chip}>本土 → 余韻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}