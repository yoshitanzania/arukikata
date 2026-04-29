"use client";
import { useEffect, useState } from "react";
import styles from "./DelayedTitle.module.css";
export default function DelayedTitle({
  as: Tag = "h1",
  delay = 500,
  children,
  white = false,
  offset = "", // low | mid | high
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className={styles.sideRight}>
      <Tag
        className={[
          styles.title,
          styles[offset],   // ← ここ
          show && styles.isShown,
          white && styles.white,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </Tag>
    </div>
  );
}
