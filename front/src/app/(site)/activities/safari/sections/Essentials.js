import styles from "./Essentials.module.css";
import { FaRedhat } from "react-icons/fa";
import { GiMonclerJacket } from "react-icons/gi";
import { ImBinoculars } from "react-icons/im";
import { IoIosSunny } from "react-icons/io";
import { IoBatteryCharging, IoCamera } from "react-icons/io5";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const ESSENTIALS = [
  {
    icon: <GiMonclerJacket />,
    title: "薄手の長袖",
    desc: "朝夕の冷え・日差し・虫対策。色はベージュ系が無難。",
  },
  {
    icon: <IoIosSunny />,
    title: "日焼け止め",
    desc: "赤道付近は想像以上。首・耳・手の甲も忘れずに。",
  },
  {
    icon: <FaRedhat />,
    title: "帽子",
    desc: "つば広＋風で飛ばないものが快適。",
  },
  {
    icon: <ImBinoculars />,
    title: "双眼鏡",
    desc: "遠くの群れがちゃんと見える。体験の質が変わる。",
  },
  {
    icon: <IoBatteryCharging />,
    title: "モバイルバッテリー",
    desc: "写真・動画で電池が減りやすい。1万mAh以上あると安心。",
  },
  {
    icon: <IoCamera />,
    title: "カメラ／スマホ",
    desc: "望遠がなくてもOK。記録用として十分価値がある。",
  },
  {
    icon: <BiSolidShoppingBagAlt />,
    title: "ジップ袋",
    desc: "砂埃対策。地味だけど現地でかなり役立つ。",
  },
];

export default function Essentials() {
  return (
    <section className={styles.section} aria-labelledby="essentials-title">
      <div className="inner">
        <div className="head">
          <p className="kicker">Essentials</p>
          <h2 id="essentials-title" className="title">
            旅支度
          </h2>
        </div>

        <article className={styles.card}>
          <div className={styles.grid}>
            {ESSENTIALS.map((item) => (
              <div className={styles.item} key={item.title}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.body}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}