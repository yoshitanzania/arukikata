"use client";

import styles from "./Service.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  const activities = [
    {
      key: "safari",
      image: "/images/safari.webp",
      alt: "Safari",
      title: "Safari",
      description:
        "野生動物と広大な景色に出会う、タンザニアを代表する体験。",
      href: "/activities/safari",
    },
    {
      key: "trekking",
      image: "/images/kilimanjaro.webp",
      alt: "Trekking",
      title: "Trekking",
      description:
        "キリマンジャロや高地の自然を歩きながら楽しむアクティビティ。",
      href: "/activities/kilimanjaro",
    },
    {
      key: "zanzibar",
      image: "/images/zanzibar.webp",
      alt: "Zanzibar",
      title: "Zanzibar",
      description:
        "青い海と白い砂浜、歴史ある街並みを味わう島での滞在。",
      href: "/activities/zanzibar",
    },
    {
      key: "daytour",
      image: "/images/experience.webp",
      alt: "Day Tour",
      title: "Day Tour",
      description:
        "文化体験や日帰り観光を気軽に楽しめる、旅に追加しやすいプラン。",
      href: "/activities/experience",
    },
  ];

  return (
    <section className={`${styles.activities} containerUnified`} id="services">
      <div className="head">
        <p className="enTitle">Tour Activities</p>
        <h2 className="jpTitle">アクティビティ</h2>
      </div>

      <div className={styles.sliderWrap}>
        <div className={styles.slider} aria-label="Tour activities slider">
          {activities.map((activity) => (
            <Link
              key={activity.key}
              href={activity.href}
              className={styles.cardLink}
            >
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={activity.image}
                    alt={activity.alt}
                    fill
                    sizes="(max-width: 900px) 78vw, 25vw"
                    className={styles.image}
                  />
                </div>

                <div className={styles.textArea}>
                  <h3 className={styles.cardTitle}>{activity.title}</h3>
                  <p className={styles.cardDesc}>{activity.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}