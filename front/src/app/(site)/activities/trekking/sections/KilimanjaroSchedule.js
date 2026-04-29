import styles from "./KilimanjaroSchedule.module.css";
import {
  FiArrowUpRight,
  FiCompass,
  FiMoon,
  FiSun,
  FiMapPin,
  FiWind,
} from "react-icons/fi";

const DAYS = [
  {
    day: "Day 1",
    title: "入山・慣らし",
    desc: "登山口へ。森林帯を歩きながら、体と呼吸を山に合わせていく。",
    icon: <FiCompass />,
  },
  {
    day: "Day 2",
    title: "高度を上げる",
    desc: "歩行時間を確保しつつ、ゆっくりと標高を上げる。",
    icon: <FiWind />,
  },
  {
    day: "Day 3",
    title: "高度順応",
    desc: "短く登って下るなど、順応を意識した行動が入りやすい。",
    icon: <FiArrowUpRight />,
  },
  {
    day: "Day 4",
    title: "休養・準備",
    desc: "山頂アタック前日。無理をせず、早めに休む。",
    icon: <FiMoon />,
  },
  {
    day: "Day 5",
    title: "山頂アタック",
    desc: "深夜〜早朝に出発。登頂後は一気に下山する。",
    icon: <FiSun />,
  },
];

export default function Schedule() {
  return (
    <section className={styles.scheduleSection}>
      <div className="inner">
        <header className="head">
          <p className="kicker">Schedule</p>
          <h3 className="title">登山日数とスケジュールの考え方</h3>
          <p className="lead">
            キリマンジャロ登山の一般的な日数は <strong>5〜8日間</strong>。
            <br />
            日数は、そのまま <strong>高度順応のしやすさ</strong> と
            <strong>登頂率</strong> に影響します。
          </p>
        </header>

        <div className={styles.decision}>
          <div className={`${styles.decisionCard} surfaceCard`}>
            <p className={styles.decisionTag}>Short</p>
            <p className={styles.decisionTitle}>短い日程</p>
            <p className={styles.decisionText}>
              高度順応が追いつかず、体調を崩しやすい。
              「想像以上にきつい」と感じやすい行程。
            </p>
          </div>

          <div className={`${styles.decisionCard} surfaceCard`}>
            <p className={styles.decisionTag}>Flexible</p>
            <p className={styles.decisionTitle}>余裕のある日程</p>
            <p className={styles.decisionText}>
              体が高度に慣れやすく、登頂率も上がる。
              ペースが穏やかで、体への負担も軽い。
            </p>
          </div>
        </div>

        <div className={`${styles.timelineWrap} surfaceCard`}>
          <p className={styles.timelineTitle}>行程イメージ（例：5日間）</p>

          <div className={styles.timeline}>
            {DAYS.map((d, i) => (
              <div key={d.day} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <span className={styles.timelineDot} />
                  {i !== DAYS.length - 1 && <span className={styles.timelineLine} />}
                </div>

                <div className={styles.timelineRight}>
                  <div className={styles.timelineTop}>
                    <span className={styles.timelineDay}>{d.day}</span>
                    <span className={styles.timelineIcon}>{d.icon}</span>
                  </div>
                  <p className={styles.timelineItemTitle}>{d.title}</p>
                  <p className={styles.timelineDesc}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.timelineNote}>
            ※ 6〜8日行程では、途中に高度順応日や短距離移動日が追加され、
            より安全寄りのスケジュールになります。
          </p>
        </div>

        <div className={`${styles.tripBox} surfaceCard`}>
          <p className={styles.tripTitle}>登山＋旅程アレンジ</p>
          <p className={styles.tripText}>
            登山だけで終わらせず、旅全体として組み立てることも可能です。
          </p>

          <div className={styles.tripChips}>
            <span className={styles.tripChip}>
              <FiMapPin /> サファリと組み合わせる
            </span>
            <span className={styles.tripChip}>
              <FiMapPin /> 下山後にザンジバルで休養
            </span>
          </div>

          <p className={styles.tripNote}>
            移動日や休養日を含めて設計すると、登山の体感難易度は大きく変わります。
          </p>
        </div>
      </div>
    </section>
  );
}