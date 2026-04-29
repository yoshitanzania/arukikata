"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AboutFramesSlideshow.module.css";

function buildPaths(prefix, count) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/images/${prefix}${n}.webp`;
  });
}

export default function AboutFramesSlideshow({
  count = 5,
  intervalMain = 5000,
  intervalSub = 5200,
  initialDelaySub = 1200,
  fadeMs = 900,
}) {
  const mainImages = useMemo(() => buildPaths("about", count), [count]);
  const subImages = useMemo(() => buildPaths("about-sm", count), [count]);

  const [mainIndex, setMainIndex] = useState(0);
  const [mainPrev, setMainPrev] = useState(0);
  const [mainFading, setMainFading] = useState(false);

  const [subIndex, setSubIndex] = useState(0);
  const [subPrev, setSubPrev] = useState(0);
  const [subFading, setSubFading] = useState(false);

  // タイマーID保持
  const mainIntervalRef = useRef(null);
  const mainFadeRef = useRef(null);

  const subStartRef = useRef(null);
  const subIntervalRef = useRef(null);
  const subFadeRef = useRef(null);

  // Strict Mode 二重起動ガード
  const mainStarted = useRef(false);
  const subStarted = useRef(false);

  // === Main ===
  useEffect(() => {
    if (mainStarted.current) return; // 2回目のeffectを無視
    mainStarted.current = true;

    const tick = () => {
      setMainIndex((cur) => {
        setMainPrev(cur);
        const next = (cur + 1) % mainImages.length;

        setMainFading(true);
        if (mainFadeRef.current) clearTimeout(mainFadeRef.current);
        mainFadeRef.current = setTimeout(() => setMainFading(false), fadeMs);

        return next;
      });
    };

    mainIntervalRef.current = setInterval(tick, intervalMain);

    return () => {
      mainStarted.current = false;
      if (mainIntervalRef.current) clearInterval(mainIntervalRef.current);
      if (mainFadeRef.current) clearTimeout(mainFadeRef.current);
      mainIntervalRef.current = null;
      mainFadeRef.current = null;
    };
  }, [intervalMain, fadeMs, mainImages.length]);

  // === Sub (delay start) ===
  useEffect(() => {
    if (subStarted.current) return;
    subStarted.current = true;

    const start = () => {
      const tick = () => {
        setSubIndex((cur) => {
          setSubPrev(cur);
          const next = (cur + 1) % subImages.length;

          setSubFading(true);
          if (subFadeRef.current) clearTimeout(subFadeRef.current);
          subFadeRef.current = setTimeout(() => setSubFading(false), fadeMs);

          return next;
        });
      };

      subIntervalRef.current = setInterval(tick, intervalSub);
    };

    subStartRef.current = setTimeout(start, initialDelaySub);

    return () => {
      subStarted.current = false;
      if (subStartRef.current) clearTimeout(subStartRef.current);
      if (subIntervalRef.current) clearInterval(subIntervalRef.current);
      if (subFadeRef.current) clearTimeout(subFadeRef.current);

      subStartRef.current = null;
      subIntervalRef.current = null;
      subFadeRef.current = null;
    };
  }, [intervalSub, initialDelaySub, fadeMs, subImages.length]);

  return (
    <div className={styles.wrapper} style={{ ["--fade-ms"]: `${fadeMs}ms` }}>
      <div className={styles.frameMain}>
        <div className={styles.stack}>
          <Image
            src={mainImages[mainPrev]}
            alt="Main photo"
            fill
            className={styles.img}
            priority
          />
          <Image
            src={mainImages[mainIndex]}
            alt="Main photo"
            fill
            className={`${styles.img} ${styles.fadeTop} ${
              mainFading ? styles.isOn : ""
            }`}
          />
        </div>
      </div>

      <div className={styles.frameSub}>
        <div className={styles.stack}>
          <Image
            src={subImages[subPrev]}
            alt="Sub photo"
            fill
            className={styles.img}
          />
          <Image
            src={subImages[subIndex]}
            alt="Sub photo"
            fill
            className={`${styles.img} ${styles.fadeTop} ${
              subFading ? styles.isOn : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
