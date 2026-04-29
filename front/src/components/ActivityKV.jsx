import React from "react";
import styles from "./ActivityKV.module.css";
import ScrollDownButton from "@/components/ScrollDownButton";
import DelayedTitle from "@/components/DelayedTitle";

export default function ActivityKV({
  imgSrc = "/images/safari/kv.webp",
  imgAlt = "Key visual",
  overlay = true,
  scrollStyle = "white",
  lines = [
    { text: "大自然の中で", offset: "high", delay: 800, white: true },
    { text: "動物たちの「日常」と", offset: "mid", delay: 1500, white: true },
    { text: "出会う旅", offset: "low", delay: 2000, white: true },
  ],
}) {
  return (
    <div className={styles.kv} aria-label="Key Visual">
      <img
        className={styles.kvImg}
        src={imgSrc}
        alt={imgAlt}
        loading="eager"
      />

      {overlay && <div className={styles.kvOverlay} aria-hidden="true" />}

      {lines.map((l, i) => (
        <DelayedTitle
          key={`${l.text}-${i}`}
          offset={l.offset}
          delay={l.delay}
          white={l.white}
        >
          {l.text}
        </DelayedTitle>
      ))}

      <ScrollDownButton style={scrollStyle} />
    </div>
  );
}
