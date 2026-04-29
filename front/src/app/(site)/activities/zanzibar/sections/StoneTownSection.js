import Image from "next/image";
import styles from "./StoneTownSection.module.css";

export default function StoneTownSection({
  imageSrc = "/images/zanjibar/stone-town.webp",
}) {
  return (
    <section className={styles.section} id="stone-town">
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.kicker}>Stone Town</p>
            <h2 className={styles.h2}>路地を歩くほど、背景が見えてくる</h2>
            <p className={styles.lead}>
              島の中心部にあるストーンタウンは世界遺産にも登録された歴史地区。
              短時間でも、文化のレイヤーが肌で分かる。
            </p>

            <div className={styles.info}>
              <div className={styles.infoRow}>
                <div className={styles.badge}>見どころ</div>
                <ul className={styles.list}>
                  <li>迷路のような路地</li>
                  <li>アラブ建築の扉や建物</li>
                  <li>奴隷貿易の歴史を伝える史跡</li>
                </ul>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.badgeSoft}>コツ</div>
                <p className={styles.p}>
                  “効率”より“体験”。迷う時間が街の理解になる。
                </p>
              </div>
            </div>
          </div>

          <div className={styles.media}>
            <Image
              src={imageSrc}
              alt="Stone Town"
              fill
              sizes="(max-width: 920px) 100vw, 46vw"
              className={styles.img}
            />
            <div className={styles.overlay} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}