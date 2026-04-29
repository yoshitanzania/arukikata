import Link from "next/link"
import styles from './PageLinks.module.css'
export default function PageLinkPrimary({text,destination}){
    return(
         <div className={styles.pageLink}>
            <Link className={styles.pageLinkPrimary} href={`${destination}`}>
               {text}
               <span aria-hidden="true">→</span>
            </Link>
         </div>
    )
}