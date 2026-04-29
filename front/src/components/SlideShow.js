'use client'
import styles from './SlideShow.module.css'
import { useRef,useState,useEffect } from 'react';

export default function SlideShow({ title, images = [] }) {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);

  const clamp = (n) => Math.max(0, Math.min(images.length - 1, n));

  const go = (next) => {
    const n = clamp(next);
    setIdx(n);
    const track = trackRef.current;
    if (!track) return;
    const el = track.querySelector(`[data-i="${n}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  // スワイプ（スクロール）したとき、中央に近い画像を active にする
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = track.getBoundingClientRect();
        const cx = r.left + r.width / 2;

        let best = idx;
        let bestDist = Infinity;

        track.querySelectorAll("[data-i]").forEach((node) => {
          const rr = node.getBoundingClientRect();
          const x = rr.left + rr.width / 2;
          const d = Math.abs(x - cx);
          if (d < bestDist) {
            bestDist = d;
            best = Number(node.getAttribute("data-i"));
          }
        });

        if (best !== idx) setIdx(best);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [idx]);

  if (!images.length) return null;

  return (
    <div className={styles.gallery} aria-label={`${title} の写真`}>
     

      <div ref={trackRef} className={styles.galleryTrack}>
        {images.map((src, i) => (
          <div key={src} data-i={i} className={styles.gallerySlide}>
            <img className={styles.galleryImg} src={src} alt={`${title} 写真 ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className={styles.galleryDots} role="tablist" aria-label="写真のページ切替">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.galleryDot} ${i === idx ? styles.galleryDotActive : ""}`}
            onClick={() => go(i)}
            aria-label={`写真 ${i + 1}`}
            aria-pressed={i === idx}
          />
        ))}
      </div>
    </div>
  );
}
