"use client";

import { useMemo, useState } from "react";
import styles from "./StayModelSection.module.css";

const PLANS = [
  {
    id: "safari",
    tag: "Safari → Zanzibar",
    title: "サファリの“熱”を、海で冷ます",
    lead: "移動後は休養優先。体力回復が、旅全体の満足度に直結する。",
    points: ["休養を先に確保", "翌日に余裕を残す", "“何もしない”を肯定する"],
    steps: [
      { t: "到着日", h: "移動 → チェックイン", d: "まずは休む。夕方は海沿いで呼吸を戻す。" },
      { t: "Day 2", h: "ビーチで回復（ゆっくり）", d: "動かない日を1日入れると、疲労が抜ける。" },
      { t: "Day 3", h: "気分で街 or 海", d: "体力があれば軽く街歩き。無理なら海に戻る。" },
      { t: "最終日", h: "余白を残して出発", d: "朝をバタつかせないと“余韻”が残る。" },
    ],
  },
  {
    id: "climb",
    tag: "Kilimanjaro → Zanzibar",
    title: "登山後は“回復設計”がすべて",
    lead: "筋肉痛・疲労を前提に、移動と滞在をゆるく組むのが正解。",
    points: ["初日は完全休養", "階段/移動を減らす", "夕方の散歩くらいが丁度いい"],
    steps: [
      { t: "到着日", h: "移動 → 完全休養", d: "登山後は回復最優先。無理に予定を入れない。" },
      { t: "Day 2", h: "海＋ストレッチ", d: "海でぼーっとする＋軽いストレッチで回復を促す。" },
      { t: "Day 3", h: "余力が出たら街歩き", d: "短時間でOK。疲れたら即撤退できる計画にする。" },
      { t: "最終日", h: "ゆっくり出発", d: "最終日も“余白”。旅の締めが綺麗になる。" },
    ],
  },
  {
    id: "mainland",
    tag: "Mainland + Beach",
    title: "観光の密度を保ちつつ、海で整える",
    lead: "本土観光の後半にザンジバルを置くと、旅が“締まる”。",
    points: ["街（文化）と海（休養）を分ける", "移動日は軽く", "夕方を主役にする"],
    steps: [
      { t: "到着日", h: "移動 → 夕方だけ海", d: "到着日は軽めに。サンセットで満足度を稼ぐ。" },
      { t: "Day 2", h: "ストーンタウン（文化）", d: "街歩きの日を1日確保。迷路の路地を楽しむ。" },
      { t: "Day 3", h: "ビーチ休養（仕上げ）", d: "旅の疲れを抜く日。何もしないをちゃんとやる。" },
      { t: "最終日", h: "余韻を残して帰路", d: "朝の時間を残すと、最後がバタつかない。" },
    ],
  },
];

export default function StayModelSection() {
  const [activeId, setActiveId] = useState("safari");
  const active = useMemo(() => PLANS.find((p) => p.id === activeId) ?? PLANS[0], [activeId]);

  return (
    <section className={styles.section} id="stay-model">
      <div className={styles.wrap}>
        <header className={styles.head}>
          <p className={styles.kicker}>Stay Plan</p>
          <h2 className={styles.h2}>滞在プラン（タイプ別）</h2>
          <p className={styles.lead}>
            泊数で分けるより、「何を楽しんだ後か / 旅の主軸は何か」で組むと失敗しにくい。
          </p>
        </header>

        <div className={styles.layout}>
          {/* 左：タイプ選択 */}
          <aside className={styles.aside}>
            {PLANS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`${styles.planBtn} ${p.id === activeId ? styles.planBtnActive : ""}`}
                onClick={() => setActiveId(p.id)}
              >
                <div className={styles.planTag}>{p.tag}</div>
                <div className={styles.planTitle}>{p.title}</div>
                <div className={styles.planLead}>{p.lead}</div>

                <div className={styles.planPoints}>
                  {p.points.map((x) => (
                    <span key={x} className={styles.point}>
                      {x}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </aside>

          {/* 右：タイムライン */}
          <div className={styles.timelineCard}>
            <div className={styles.timelineHead}>
              <span className={styles.pill}>{active.tag}</span>
              <div className={styles.timelineTitle}>{active.title}</div>
              <div className={styles.timelineLead}>{active.lead}</div>
            </div>

            <div className={styles.timeline}>
              {active.steps.map((s, idx) => (
                <div key={`${s.t}-${idx}`} className={styles.item}>
                  <div className={styles.rail} aria-hidden="true">
                    <div className={styles.node} />
                    {idx !== active.steps.length - 1 ? (
                      <div className={styles.line} />
                    ) : (
                      <div className={styles.lineEnd} />
                    )}
                  </div>

                  <div className={styles.body}>
                    <div className={styles.time}>{s.t}</div>
                    <div className={styles.stepTitle}>{s.h}</div>
                    <div className={styles.desc}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footerNote}>
              ※ ここは「目安の流れ」。実際は移動/体力/滞在エリアで微調整する前提。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}