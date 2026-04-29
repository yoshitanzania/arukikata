import Link from "next/link"
import styles from './Footer.module.css'
const Footer = ({ title }) => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} ${styles.footerInner}`}>
            <div className={styles.footerBrand}>
                <div className={`${styles.logo} ${styles.small}`}>タンザニア旅行のトリセツ</div>
                <p className="p small dim">その旅に、納得という安心を。</p>
            </div>

            <div className={styles.footerLinks}>
                <Link href="/reasons">安心の理由</Link>
                <Link href="/activities">タンザニアでできること</Link>
                <Link href="/faq">よくある質問</Link>
                <Link href="/terms">利用規約</Link>
                <Link href="/privacy">プライバシーポリシー</Link>
                <Link href="/contact">お問い合わせ</Link>
                <Link href="/about">運営について</Link>
            </div>

            <div className={styles.footerLinks}>
                <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noreferrer">TikTok</a>
            </div>
            </div>

            <div className={`${styles.copyright} ${styles.container}`}>
            © {new Date().getFullYear()} タンザニア旅行のトリセツ
            </div>
        </footer>
    )
}

export default Footer