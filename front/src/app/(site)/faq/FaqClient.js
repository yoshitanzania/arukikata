"use client";

import { useMemo, useState } from "react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "どんなサービスですか？",
    a: `Karibuu TZが運営する「タンザニア旅行のトリセツ」は、タンザニア旅行に特化した旅行コーディネートサービスです。

既存のパッケージツアーを販売するのではなく、複数の信頼できる現地ツアー会社と連携しながら、ご希望やご予算に合わせて旅の内容を一緒に組み立てていきます。

旅行内容のご相談、プラン比較、現地手配先のご紹介、予約までの調整サポートを主なサービスとしております。`,
  },
  {
    q: "対応しているエリアを教えてください",
    a: `主に以下のエリアを中心に対応しております。

・キリマンジャロ周辺  
・北部サファリ（セレンゲティ、ンゴロンゴロ ほか）  
・ザンジバル  

そのほかの地域につきましても、内容によっては対応可能な場合がございます。  
まずはお気軽にご相談ください。`,
  },
  {
    q: "誰でも相談できますか？",
    a: `はい、どなたでもご相談いただけます。

初めての海外旅行の方、アフリカ旅行が初めての方、具体的な日程がまだ決まっていない方でも問題ございません。

情報収集段階でのご相談も歓迎しております。  
無理にお申し込みをおすすめすることはございませんので、安心してご連絡ください。`,
  },
  {
    q: "相談や見積もりは本当に無料ですか？",
    a: `はい、初回のご相談、ご希望のヒアリング、プランの方向性整理までは無料で対応しております。

具体的な手配調整へ進む段階でコーディネート料が発生する場合には、必ず事前にご説明いたします。

内容にご納得いただいたうえで、進めるかどうかをご判断いただいております。`,
  },
  {
    q: "コーディネート料には何が含まれますか？",
    a: `コーディネート料には、以下のようなサポートが含まれます。

・ご希望内容の整理  
・現地ツアー会社とのやり取り代行  
・複数プランの比較整理  
・内容調整や条件交渉のサポート  
・予約確定までの進行管理  

含まれる内容はご相談内容によって異なりますので、事前に分かりやすくご説明いたします。`,
  },
  {
    q: "支払い方法と支払いタイミングを教えてください",
    a: `「タンザニア旅行のトリセツ」では、ご相談・ヒアリング・お見積もりのご案内や比較検討の段階までは費用は一切かかりません。

複数の現地ツアー会社の内容を整理し、条件や違いを分かりやすくご説明したうえでご判断いただくところまでを無料でサポートしております。

そのうえで、「この内容で現地ツアー会社へ依頼する」と決定されたタイミング（ツアー成約時）にコーディネート料が発生いたします。金額やお支払い方法につきましては、成約前に必ずご説明し、ご納得いただいたうえで進めております。

なお、現地ツアー会社への旅行代金のお支払いは、各社の定める方法（クレジットカード決済・国際送金など）に従い、お客様ご自身で直接お支払いいただきます。

支払い先・金額・タイミングについては、手配内容が確定した段階で事前に明確にご説明いたします。  
ご不明点が残ったままお支払いいただくことはございません。`,
  },
  {
    q: "現地ツアー会社との契約はどうなりますか？",
    a: `実際の旅行サービス提供契約は、お客様と現地ツアー会社との間で直接締結されます。

「タンザニア旅行のトリセツ」は特定のツアー商品を販売する立場ではなく、現地手配先のご紹介および予約までの調整をサポートする立場です。

そのため、契約内容や条件について事前に十分ご確認いただけるよう、丁寧にサポートいたします。`,
  },
  {
    q: "特定のツアーを強く勧められることはありませんか？",
    a: `いいえ、そのようなことはございません。

「タンザニア旅行のトリセツ」は特定の商品を販売する立場ではないため、複数の選択肢を比較したうえで、ご自身に合った内容をお選びいただくことを大切にしております。

メリットだけでなく、注意点や違いについても含めてご説明いたします。`,
  },
  {
    q: "安全面についての相談もできますか？",
    a: `はい、安全面についてのご相談も可能です。

治安、移動手段、体調管理、服装や持ち物などについても事前にご案内しております。

ただし、すべてのリスクを完全に排除できるものではありませんので、現地事情として注意が必要な点についても正直にお伝えしております。`,
  },
  {
    q: "キャンセルした場合はどうなりますか？",
    a: `現地ツアー会社との契約後の変更・キャンセル条件につきましては、各ツアー会社の規定が適用されます。

一方、コーディネート料はツアー成約までの総合的なサポートに対する対価のため、原則として返金は行っておりません。

内容や進行状況により例外的な対応が可能な場合につきましては、事前に個別でご説明いたします。

いずれの場合も、成約前に費用や条件を必ずご案内し、ご納得いただいたうえで進めております。`,
  },
  {
    q: "どこから問い合わせればよいですか？",
    a: `お問い合わせページより、以下の方法でご連絡いただけます。

・お問い合わせフォーム  
・メール  
・InstagramのDM  

内容に応じて、最適な方法で対応いたします。`,
  },
];

function highlight(text, query) {
  if (!query) return text;
  const q = query.trim();
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${escaped})`, "gi");
  return text.split(re).map((part, i) => {
    if (part.toLowerCase() === q.toLowerCase()) {
      return (
        <mark key={i} className={styles.mark}>
          {part}
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function FaqClient() {
  const [query, setQuery] = useState("");
 
  const [openSet, setOpenSet] = useState(() => new Set([0])); // 初期でQ1だけ開くなら

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter((item) => (`${item.q}\n${item.a}`).toLowerCase().includes(q));
  }, [query]);



  return (
    <section className={styles.section}>
      {/* Search */}
      <div className={styles.searchCard}>
        <div className={styles.searchRow}>
          <div className={styles.searchMeta}>
            <p className={styles.searchTitle}>検索</p>
            <p className={styles.searchHelp}>質問・回答のキーワードで絞り込めます</p>
          </div>

          <div className={styles.searchBox}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="例：無料 / キリマンジャロ / 支払い"
              className={styles.input}
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className={styles.clearBtn}>
                Clear
              </button>
            )}
          </div>
        </div>

        <div className={styles.searchFooter}>
          <p>
            表示中: <span className={styles.countStrong}>{filtered.length}</span> 件
          </p>
          
        </div>
      </div>

      {/* Empty */}
      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>見つかりませんでした</p>
          <p className={styles.emptyText}>別のキーワードでもう一度お試しください。</p>
        </div>
      ) : (
        <div className={styles.listCard}>
          <ul className={styles.list}>
            {filtered.map((item, i) => {
              const isOpen = openSet.has(i);

              return (
                <li key={item.q} className={styles.item}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenSet((prev) => {
                        const next = new Set(prev);
                        if (next.has(i)) next.delete(i);
                        else next.add(i);
                        return next;
                      });
                    }}
                    className={styles.qBtn}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.qLeft}>
                      <p className={styles.qText}>
                        <span className={styles.qBadge}>Q{i + 1}</span>
                        {highlight(item.q, query)}
                      </p>
                    </div>

                    <span className={`${styles.chevWrap} ${isOpen ? styles.chevWrapOpen : ""}`}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                        aria-hidden="true"
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
                    <div className={styles.aOuter}>
                      <div className={styles.aInner}>
                        <p className={styles.aLabel}>回答</p>
                        <div className={styles.aText}>{highlight(item.a, query)}</div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Footer hint */}
      <div className={styles.footerCard}>
        <p className={styles.footerTitle}>まだ不安が残るとき</p>
        <p className={styles.footerText}>
          お問い合わせページからご連絡ください。状況に合わせて、最適な方法でご案内いたします。
        </p>
      </div>
    </section>
  );
}