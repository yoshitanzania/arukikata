import styles from "./Meru.module.css";
import {
  FiTrendingUp,
  FiClock,
  FiMapPin,
  FiEye,
  FiCheckCircle,
  FiCompass,
} from "react-icons/fi";

export default function Meru() {
  return (
    <section className={styles.meruSection}>
      <div className="inner">
        <div className={styles.meruShell}>
          <header className={styles.meruHead}>
            <p className={styles.kicker}>For Travelers Who Want Another Choice</p>

            <h3 className={styles.meruTitle}>
              キリマンジャロはハードルが...
              <span>もうひとつの本格登山、メルー山という選択</span>
            </h3>

            <p className={styles.meruLead}>
              「標高も日程も少しハードルが高い」
              <br />
              そんな方におすすめなのが、
              <strong>メルー山（4,566m）</strong>だ。
              キリマンジャロほどの負荷ではない一方で、
              しっかりとした達成感と、東アフリカらしい自然体験を味わえる。
            </p>
          </header>

          <div className={styles.meruHeroCard}>
            <div className={styles.meruHeroMain}>
              <p className={styles.meruLabel}>Recommended for</p>
              <ul className={styles.recommendList}>
                <li>
                  <FiCheckCircle />
                  <span>キリマンジャロは少し不安だが、登山体験はしたい方</span>
                </li>
                <li>
                  <FiCheckCircle />
                  <span>日程や体力の負担を少し抑えたい方</span>
                </li>
                <li>
                  <FiCheckCircle />
                  <span>サファリと組み合わせて旅全体を楽しみたい方</span>
                </li>
              </ul>
            </div>

            <div className={styles.meruHeroAside}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Altitude</span>
                <strong>4,566m</strong>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Style</span>
                <strong>本格登山 × 自然体験</strong>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatLabel}>Impression</span>
                <strong>無理のない挑戦</strong>
              </div>
            </div>
          </div>

          <div className={styles.meruGrid}>
            <article className={styles.meruFeatureCard}>
              <div className={styles.iconWrap}>
                <FiTrendingUp />
              </div>
              <h4>前哨戦としても人気</h4>
              <p>
                キリマンジャロに向けたステップとして選ばれることも多く、
                「高山登山が自分に合うか試したい」という方にも向いている。
              </p>
            </article>

            <article className={styles.meruFeatureCard}>
              <div className={styles.iconWrap}>
                <FiClock />
              </div>
              <h4>旅程に組み込みやすい</h4>
              <p>
                長期日程が取りづらい方でも検討しやすく、
                タンザニア旅行の中で無理なく計画しやすいのが魅力だ。
              </p>
            </article>

            <article className={styles.meruFeatureCard}>
              <div className={styles.iconWrap}>
                <FiMapPin />
              </div>
              <h4>サファリとの相性がいい</h4>
              <p>
                メルー山はアルーシャ近郊にあり、
                登山とサファリを組み合わせた旅程にもなじみやすい。
              </p>
            </article>

            <article className={styles.meruFeatureCard}>
              <div className={styles.iconWrap}>
                <FiCompass />
              </div>
              <h4>景色と野生動物が魅力</h4>
              <p>
                国立公園内を歩くため、
                野生動物の気配を感じながら進む体験はメルー山ならでは。
                ただ登るだけでは終わらない楽しさがある。
              </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}