"use client";
import styles from "./Header.module.css";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "サファリ", href: "/activities/safari" },
      { label: "トレッキング", href: "/activities/trekking" },
      { label: "ザンジバル", href: "/activities/zanzibar" },
      { label: "デイツアー", href: "/activities/experience" },
      { label: "私達について", href: "/about" },
      { label: "よくある質問", href: "/faq" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setShow(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${show ? styles.isVisible : ""}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.headerLeft}>
            <span className={styles.logo}>
              <Image
                src="/logo.ico"
                alt="タンザニア旅行のトリセツ"
                fill
                className={styles.logoImg}
              />
            </span>
            <span className={styles.siteTitle}>タンザニア旅行のトリセツ</span>
          </Link>

          <nav className={styles.headerNav}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(true)}
            aria-label="menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`${styles.spMenu} ${open ? styles.isOpen : ""}`}>
        <div className={styles.spMenuBg} onClick={() => setOpen(false)} />
        <div className={styles.spMenuPanel}>
          <div className={styles.spMenuHeader}>
            <span className={styles.spTitle}>タンザニア旅行のトリセツ</span>
            <button className={styles.spClose} onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <nav className={styles.spMenuNav}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.spLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}