"use client";
import { useEffect, useRef, useState } from "react"
import TypeWriterAnimation from "@/components/TypeWriterAnimation"
import styles from "./KV.module.css"
import ScrollDownButton from "@/components/ScrollDownButton"
import DelayedTitle from "@/components/DelayedTitle"

export default function KV() {
  const [showTitle, setShowTitle] = useState(false)
  const [startNote, setStartNote] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 500);
    const t2 = setTimeout(() => setStartNote(true), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

/*
useEffect(() => {
  const root = document.querySelector(".bg");
  if (!root) return;

  const TL_IMAGES = [
    "/images/bg/zebra.svg",
    "/images/bg/giraffe.svg",
    "/images/bg/hippo.svg",
    "/images/bg/lion.svg",
  ];

  const BR_IMAGES = [
    "/images/bg/elephant.svg",
  ];

  let tlIndex = 0;
  let brIndex = 0;

  // 左上：4秒ごと
  const tlTimer = setInterval(() => {
    tlIndex = (tlIndex + 1) % TL_IMAGES.length;

    // 一瞬消す → 差し替え → 出す（ふわっと）
    root.style.setProperty("--tl-img", `url("${TL_IMAGES[tlIndex]}")`);
  }, 4000);

  // 右下：2秒遅れて開始 → 4秒ごと
  const brStart = setTimeout(() => {
    setInterval(() => {
      brIndex = (brIndex + 1) % BR_IMAGES.length;
      root.style.setProperty("--br-img", `url("${BR_IMAGES[brIndex]}")`);
    }, 4000);
  }, 2000);

  return () => {
    clearInterval(tlTimer);
    clearTimeout(brStart);
  };
}, []);

*/


  return (
    <section className={styles.hero} ref={heroRef}>
      {/* 背景動画（タンザニア形マスク） */}
      <div className={styles.heroMedia} aria-hidden="true">
        <div className={styles.heroShapeWrap}>
          <video
            className={styles.heroVideoTz}
            src="/movies/hero.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          />
          <div className={styles.heroShapeShade} />
        </div>
      </div>

      {/* 上に載るテキストレイヤー */}
      <div className={styles.heroCenter}>
        <div className={styles.heroStage}>
          {/* 左：注釈 */}
          <div className={`${styles.heroSide} ${styles.heroSideLeft}`}>
            {startNote && (
            <p className={styles.heroVNote}>
              <TypeWriterAnimation
                start={startNote}
                text={"その旅に 納得という安心を"}
              />
            </p>
            )}
          </div>

          {/* 中央：空のカラム（grid用） */}
          <div className={styles.heroMap} aria-hidden="true" />

         
          <DelayedTitle delay={800} >
            タンザニア旅行の<br/>トリセツ
          </DelayedTitle>
        </div>
      </div>
      <ScrollDownButton />
    </section>
  );
}
/*

const fadeSwap = (root, keyCurrent, keyNext, className, nextUrl) => {
  root.style.setProperty(keyNext, `url("${nextUrl}")`);
  root.classList.add(className);

  setTimeout(() => {
    root.style.setProperty(keyCurrent, `url("${nextUrl}")`);
    root.style.setProperty(keyNext, "none");
    root.classList.remove(className);
  }, 700); // CSS transition と合わせる
};

*/