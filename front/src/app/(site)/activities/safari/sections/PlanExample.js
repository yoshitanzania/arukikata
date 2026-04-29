"use client";
import React, { useMemo, useState } from "react";
import styles from "./PlanExample.module.css";
import PageLinkPrimary from "@/components/PageLinks";


const PLANS = [
  {
    id: "a",
    label: "PLAN A",
    title: "One-Day Safari",
    subtitle: "気軽に体験。サファリの空気を感じる1日",
    days: "1 day",
    from: { amount: 220, currency: "USD", unit: "/ person" },
    tags: [
        "1パーク",
        "1日完結",
        "超気軽",
        "短時間",
        "移動最小",
        "初体験",
        "時間重視",
        "旅の合間に",
    ],
    itinerary: [
      {
        day: 1,
        title: "One-Day Safari",
        blocks: [
          { label: "8:00", text: "アルーシャ周辺を早朝出発, 国立公園へ" },
          { label: "10:00", text: "ゲームドライブ" },
          { label: "12:00", text: "ピクニックランチ or ロッジで昼食" },
          { label: "13:00", text: "短めのゲームドライブまたは景色を楽しむ" },
          { label: "17:00", text: "アルーシャへ戻る" },
        ],
      },
    ],
  },

  {
    id: "b",
    label: "PLAN B",
    title: "First Safari / Classic",
    subtitle: "まずは1カ所。無理なくサファリの流れを体験",
    days: "2–4 days",
    from: { amount: 950, currency: "USD", unit: "/ person" },
    tags: [  "1パーク", "初サファリ", "王道","短め","移動少なめ","無理なし","初心者向け","まず体験"],
    itinerary: [
      {
        day: 1,
        title: "Arrival Day",
        blocks: [
          { label: "16:00", text: "アルーシャ到着 → ロッジへ移動" },
          { label: "17:30", text: "チェックイン後、休憩）" },
          { label: "18:30", text: "街や土産店を軽く散策" }
        ],
      },
      {
        day: 2,
        title: "Safari Day (1 park)",
        blocks: [
          { label: "6:00", text: "国立公園へ出発" },
          { label: "7:30", text: "ゲームドライブ" },
          { label: "12:00", text: "ロッジで休憩" },
          { label: "16:00", text: "ゲームドライブ）" },
        ],
      },
      {
        day: 3,
        title: "Departure",
        blocks: [
          { label: "7:30", text: "短めのドライブ" },
          { label: "11:00", text: "チェックアウト" },
          { label: "14:00", text: "アルーシャへ戻る" },
        ],
      },
    ],
  },

  {
    id: "c",
    label: "PLAN C",
    title: "Balanced Safari (2 parks)",
    subtitle: "2つの公園で“違い”まで楽しむ。景色と動物のバランス型",
    days: "4–5 days",
    from: { amount: 1350, currency: "USD", unit: "/ person" },
   tags: [
        "2パーク以上",
        "じっくり派",
        "比較体験",
        "旅慣れ向け",
        "深掘りサファリ",
        "余裕日程",
        "景色と動物",
        "違いを味わう",
        "通好み",
        "満足度重視"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Prep",
        blocks: [
          { label: "16:00", text: "アルーシャ到着" },
          { label: "18:30", text: "街や土産店を軽く散策" }
        ],
      },
      {
        day: 2,
        title: "Safari Day (Park #1)",
        blocks: [
          { label: "6:00", text: "出発）" },
          { label: "7:30", text: "ゲームドライブ" },
          { label: "12:00", text: "ロッジ休憩" },
          { label: "16:00", text: "ゲームドライブ" },
          { label: "19:30", text: "ロッジでゆっくり" },
        ],
      },
      {
        day: 3,
        title: "Transfer Day",
        blocks: [
          { label: "8:00", text: "次のサファリへ移動" },
          { label: "12:30", text: "展望スポット/写真ポイント" },
          { label: "16:30", text: "次のロッジ到着" }
        ],
      },
      {
        day: 4,
        title: "Safari Day (Park #2)",
        blocks: [
          { label: "6:00", text: "出発" },
          { label: "7:30", text: "ゲームドライブ" },
          { label: "12:00", text: "休憩" },
          { label: "16:00", text: "ゲームドライブ）" },
          { label: "19:30", text: "ロッジで余韻" },
        ],
      },
      {
        day: 5,
        title: "Departure",
        blocks: [
          { label: "7:30", text: "短めのドライブ" },
          { label: "11:00", text: "チェックアウト" },
          { label: "14:00", text: "アルーシャへ戻る" },
        ],
      },
    ],
  },
];


/*
  {
    id: "c",
    label: "PLAN C",
    title: "Safari Journey (3–4 parks)",
    subtitle: "周遊で深く。サファリを旅の主役にする",
    days: "6–9 days",
    from: { amount: 1850, currency: "USD", unit: "/ person" },
    tags: ["3–4パーク", "周遊", "メリハリ"],
    itinerary: [
      {
        day: 1,
        title: "Arrival + Buffer",
        blocks: [
          { part: "morning", label: "朝", text: "到着日：無理に動かず体調調整" },
          { part: "noon", label: "昼", text: "必要なら：両替・買い足し・装備確認" },
          { part: "evening", label: "夕", text: "旅の全体像をガイドと共有（周遊のコツ）" },
          { part: "night", label: "夜", text: "翌日からの周遊に備えて休む" },
        ],
      },
      {
        day: 2,
        title: "Safari Day (Park #1)",
        blocks: [
          { part: "early", label: "早朝", text: "出発（朝の空気が最高）" },
          { part: "morning", label: "朝", text: "ゲームドライブ（王道の“見られる感”を作る）" },
          { part: "noon", label: "昼", text: "ロッジ休憩（回復）" },
          { part: "evening", label: "夕", text: "もう一走り（光がきれい）" },
          { part: "night", label: "夜", text: "翌日に備えて整える" },
        ],
      },
      {
        day: 3,
        title: "Transfer + Local Stop (Park #2 area)",
        blocks: [
          { part: "morning", label: "朝", text: "次のエリアへ移動（景色がガラッと変わる）" },
          { part: "noon", label: "昼", text: "途中：村/市場などローカル立ち寄り（希望があれば）" },
          { part: "evening", label: "夕", text: "ロッジ到着 → 休憩（疲れを残さない）" },
          { part: "night", label: "夜", text: "軽めに整えて休む" },
        ],
      },
      {
        day: 4,
        title: "Safari Day (Park #2)",
        blocks: [
          { part: "early", label: "早朝", text: "出発（別の地形・雰囲気へ）" },
          { part: "morning", label: "朝", text: "ゲームドライブ（違いが分かると面白い）" },
          { part: "noon", label: "昼", text: "休憩（撮影・観察を整理）" },
          { part: "evening", label: "夕", text: "探すサファリ（じっくり狙う）" },
          { part: "night", label: "夜", text: "星空/静けさ（余韻が残る）" },
        ],
      },
      {
        day: 5,
        title: "Safari Day (Park #3) / Optional",
        blocks: [
          { part: "early", label: "早朝", text: "出発（その日一番のチャンスを狙う）" },
          { part: "morning", label: "朝", text: "ゲームドライブ（メインどころをがっつり）" },
          { part: "noon", label: "昼", text: "休憩（体力と相談して調整）" },
          { part: "evening", label: "夕", text: "もう一走り or ロッジでゆっくり" },
          { part: "night", label: "夜", text: "回復を最優先（翌日以降に備える）" },
        ],
      },
    ],
  },
  */

function fmtMoney(v, cur = "USD") {
  const n = Number(v);
  if (!Number.isFinite(n)) return `${cur} —`;
  return `${cur} ${n.toLocaleString("en-US")}`;
}

function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

function DayBlocks({ blocks }) {
  return (
    <div className={styles.dayBlocks}>
      {blocks.map((b, i) => (
        <div key={i} className={styles.dayRow}>
          {/* 左：時間＋線 */}
          <div className={styles.timeline}>
            <span className={styles.time}>{b.label}</span>
          </div>

          {/* 右：内容 */}
          <div className={styles.content}>{b.text}</div>
        </div>
      ))}
    </div>
  );
}




function Itinerary({ days }) {
  // 最初は「先頭のDAYだけ」開いておく
  const firstDay = days?.[0]?.day ?? null;
  const [openDays, setOpenDays] = useState(
    firstDay != null ? new Set([firstDay]) : new Set()
  );

  // プラン切り替え時は、また先頭だけ開く
  React.useEffect(() => {
    setOpenDays(firstDay != null ? new Set([firstDay]) : new Set());
  }, [days, firstDay]);

  const toggleDay = (day) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day); // 開いてたら閉じる
      } else {
        next.add(day); // 閉じてたら開く（他はそのまま）
      }
      return next;
    });
  };

  return (
    <div className={styles.itinerary} aria-label="Day-by-day itinerary">
      {days.map((d) => {
        const isOpen = openDays.has(d.day);

        return (
          <div
            key={d.day}
            className={`${styles.day} ${isOpen ? styles.dayOpen : ""}`}
          >
            <button
              type="button"
              className={styles.daySummary}
              onClick={(e) => {
                e.stopPropagation();
                toggleDay(d.day);
              }}
              aria-expanded={isOpen}
            >
              <span className={styles.dayNo}>DAY {d.day}</span>
              <span className={styles.dayTitle}>{d.title}</span>
              <span className={styles.dayChevron} aria-hidden="true">
                ›
              </span>
            </button>

            <div className={`${styles.dayBody} ${isOpen ? styles.dayBodyOpen : ""}`}>
                <DayBlocks blocks={d.blocks ?? []} />
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default function PlanExample() {
  const [activeId, setActiveId] = useState(PLANS[0].id);
  const active = useMemo(
    () => PLANS.find((p) => p.id === activeId) ?? PLANS[0],
    [activeId]
  );

  return (
    <section className={styles.section} aria-labelledby="plan-title">
      <div className="inner">
        <div className="head">
          <div className="kicker">Journey Overview</div>
          <h2 id="plan-title" className="title">
            あなたに合うサファリのかたち
          </h2>
        </div>  

      

        <div className={styles.cards} aria-label="Plan cards">
          {PLANS.map((p) => {
            const on = p.id === activeId;
            return (
              <article
                key={p.id}
                className={`${styles.card} ${on ? styles.cardOn : ""}`}
                onClick={() => setActiveId(p.id)}
                aria-label={`${p.label}: ${p.title}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.planLabel}>{p.label}</div>

                  <div className={styles.price}>
                    <div className={styles.priceTop}>From</div>
                    <div className={styles.priceValue}>
                      {fmtMoney(p.from.amount, p.from.currency)}
                      <span className={styles.priceUnit}>{p.from.unit}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardTitleRow}>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.days}>{p.days}</div>
                </div>

                <div className={styles.subtitle}>{p.subtitle}</div>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className={styles.block}>
                  <div className={styles.blockTitle}>日程サンプル</div>
                  <Itinerary days={p.itinerary} />
                </div>

                
                <PageLinkPrimary text="相談する" destination="/contact" />
              </article>
            );
          })}
        </div>

        <p className={styles.fineprint}>
          ※ 旅程は一例です.サファリの組み合わせ・ロッジグレード・季節などで変更があります.
        </p>
      </div>
    </section>
  );
}
