

// app/components/SquareGrid.jsx
import Image from "next/image"
import styles from "./Gallery.module.css"

const images = [
  "/images/about01.webp",
  "/images/about02.webp",
  "/images/about03.webp",
  "/images/about04.webp",
  "/images/about05.webp",
  "/images/about-sm01.webp",
  "/images/about-sm02.webp",
  "/images/about-sm03.webp",
  "/images/about-sm04.webp",
]

export default function Gallery() {
  return (
    <section className="section containerUnified" id="gallery">
      <div className="head">
        <p className="enTitle">Colors of Tanzania</p>
        <h2 className="jpTitle">旅の記憶</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {images.map((src, i) => (
            <div key={i} className={styles.item}>
              <Image
                src={src}
                alt={`photo ${i + 1}`}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}
