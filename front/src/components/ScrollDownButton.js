'use client'
import styles from './ScrollDownButton.module.css'

export default function ScrollDownButton({style}){
    return(

      <div
        className={`${styles.heroScroll} ${style && styles.white}`}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }
        }}
      > 
        <div className={`${styles.heroScrollDot} ${style && styles.white}`}>
          <span />
        </div>
        <div className={`${styles.heroScrollText} ${style && styles.white}`}>Scroll Down</div>
      </div>

    )
}