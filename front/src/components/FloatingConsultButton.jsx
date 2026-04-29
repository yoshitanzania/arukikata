"use client";

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styles from './FloatingConsultButton.module.css'

export default function FloatingConsultButton({
  href = "/contact", // 無料相談の遷移先
  label = "無料で相談",
  idleMs = 1200,
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const schedule = () => {
    clear();
    timerRef.current = window.setTimeout(() => {
      setShow(true);
    }, idleMs);
  };

  useEffect(() => {
    // 初期：2秒後に出す（スクロールしてなければ）
    schedule();

    const onScroll = () => {
      // スクロール中は隠す
      setShow(false);
      // スクロールが止まってから2秒で出す
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idleMs]);

  return (
    <div className={`${styles.floatConsult} ${show ? styles.isShow : ""}`}>
      <a className={`${styles.floatConsultBtn} ${styles.isLink}`} href="/consult">
        <span className={styles.consultText}>無料で相談する</span>
      </a>
    </div>


  );
}
