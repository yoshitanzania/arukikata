"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SectionIndicator.module.css";

export function SectionIndicator() {
  const [activeId, setActiveId] = useState("about");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = ["about", "service", "contact", "gallery"];

    const sectionEls = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionEls.length) return;

    if (observerRef.current) observerRef.current.disconnect();

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
      }
    );

    observerRef.current = io;
    sectionEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = [
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "contact", label: "Contact" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
      <nav className={styles.secInd} aria-label="Section indicator">
        <ul className={styles.secIndList}>
          {items.map((s) => {
            const isActive = s.id === activeId;
            return (
              <li key={s.id} className={styles.secIndItem}>
                <button
                  type="button"
                  className={`${styles.secIndBtn} ${isActive ? styles.isActive : ""}`}
                  onClick={() => jump(s.id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.label}>{s.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
  );
}
