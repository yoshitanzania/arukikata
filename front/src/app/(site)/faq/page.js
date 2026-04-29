import FaqClient from "./FaqClient";
import CommonKV from "@/components/CommonKV";
import styles from "./Faq.module.css";

export const metadata = {
  title: "よくある質問 | タンザニア旅行のトリセツ",
  description: "タンザニア旅行のトリセツのよくある質問ページ。",
};

export default function Page() {
  return (
    <main className={styles.page}>
      <CommonKV
        title="FAQ"
        subtitle="サービス内容・料金・契約について、よくいただくご質問をまとめました。ご不安な点があればお気軽にお問い合わせください。"
      />

      <div className={styles.wrap}>
        <FaqClient />
      </div>
    </main>
  );
}