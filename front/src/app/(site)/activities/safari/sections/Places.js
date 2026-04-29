"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Places.module.css";
import SlideShow from "@/components/SlideShow";
const PLACES = [
  {
    id: "serengeti",
    name: "セレンゲティ国立公園",
    short: "王道の草原。アフリカの原風景を体感できる場所。",
    detail:
      "セレンゲティは、タンザニアを代表するサファリエリアであり、「これぞアフリカ」と言われる原風景が広がる場所です。見渡す限り続くサバンナと地平線、点在するアカシアの木、その中で野生動物たちが日常を送る姿を、車で走りながら間近に観察します。ヌーの大移動に代表されるような圧倒的なスケールの自然現象はもちろん、ライオンやチーター、ゾウ、キリンなどの大型動物に出会える確率も高く、エリアや季節を変えることで表情が大きく変わるのも魅力です。移動距離が長いため、日数に余裕を持って巡ることで、単なる『動物観察』ではなく、自然の中で過ごす時間そのものを味わうサファリになります。",
    bestFor: [
      "王道サファリ",
      "大草原",
      "動物数重視",
      "本格派"
    ],
    animals: ["lion", "elephant", "giraffe", "cheetah", "zebra", "wildebeest", "leopard"],

    x: 48,
    y: 18,
  },
  {
    id: "ngorongoro",
    name: "ンゴロンゴロ保全地域",
    short: "短時間でも密度高く出会える、特別なクレーター。",
    detail:
      "ンゴロンゴロは、巨大な火山跡（クレーター）の中でサファリを行う、世界的にも非常に珍しいエリアです。クレーター内は自然の地形によって外界と隔てられており、限られた空間に多くの野生動物が生息しているため、短い時間でも高い確率で動物に出会えるのが大きな特徴です。ライオン、ゾウ、バッファロー、カバなどの大型動物が比較的コンパクトな範囲に集まりやすく、初めてのサファリでも『見られた』という満足感を得やすい場所と言えます。また、クレーター縁から見下ろす景色や、内部の湖や草原が織りなす景観の美しさも魅力で、セレンゲティとは異なる凝縮された自然体験ができます。",
    bestFor: [
      "初サファリ",
      "短時間OK",
      "高遭遇率",
      "景観重視"
    ],
    animals: ["lion", "elephant", "buffalo", "hippo", "rhino", "flamingo"],
    x: 53,
    y: 22,
  },
  {
    id: "tarangire",
    name: "タランギーレ国立公園",
    short: "組み合わせで真価を発揮する、落ち着いたサファリ。",
    detail:
      "タランギーレは、セレンゲティやンゴロンゴロと組み合わせて訪れることで真価を発揮するサファリエリアです。ゾウの生息数が多いことで知られ、季節によっては川沿いに多くの動物が集まる姿を観察できます。観光客の数が比較的少なく、全体的に落ち着いた雰囲気があるため、混雑を避けながらゆったりとサファリを楽しみたい方に向いています。派手さよりも『雰囲気の良さ』や『旅程全体のバランス』を重視する場合に、旅の完成度を高めてくれる存在です。",
    bestFor: [
      "落ち着き派",
      "組み合わせ向き",
      "混雑少なめ",
      "旅程バランス"
    ],
     animals: ["elephant", "giraffe", "zebra", "wildebeest"],
    x: 58,
    y: 29,
  },
  {
    id: "manyara",
    name: "マニャラ湖国立公園",
    short: "短時間で雰囲気を掴める、旅のスパイス。",
    detail:
      "マニャラ湖国立公園は、比較的コンパクトなエリアながら、湖・森林・草原といった異なる景観が凝縮されたサファリです。時間をかけて巡るというよりも、旅程の途中に組み込むことで、サファリ全体に変化を与えてくれる存在です。条件が合えば木登りライオンが見られることもあり、景色と雰囲気を楽しむ要素が強いのが特徴です。『サファリの数を増やしたい』というより、『旅の印象を豊かにしたい』場合に向いています。",
    bestFor: [
      "短時間",
      "旅のスパイス",
      "景色重視",
      "＋1公園"
    ],
    animals: ["giraffe", "elephant", "zebra", "flamingo"],
    x: 54,
    y: 27,
  },
  {
    id: "mkomazi",
    name: "ムコマジ国立公園",
    short: "レア動物狙いの、静かな通好みサファリ。",
    detail:
        "ムコマジ国立公園はタンザニア北東部に位置する比較的知られていない国立公園で、観光地化が進んでいない静かなサファリが特徴です。最大の魅力は、保護区として管理されているクロサイやリカオン（アフリカン・ワイルドドッグ）といった希少動物の存在です。セレンゲティのような圧倒的な動物量はありませんが、人の少なさと原始的な景観により、『探すサファリ』『自然と向き合うサファリ』を体験できます。王道ではなく、もう一歩踏み込んだタンザニアを見たい人向けの公園です。",
    bestFor: [
      "通好み",
      "希少動物",
      "静かな旅",
      "探すサファリ"
    ],
    animals: ["rhino", "wilddog", "giraffe", "elephant", "zebra"],
    x: 78,
    y: 32,
    },

  {
    id: "arusha",
    name: "アルーシャ（起点）",
    short: "北部サファリの拠点。旅の流れを整える街。",
    detail:
      "アルーシャは、北部タンザニアのサファリにおける拠点となる街で、多くのツアーがここを起点に出発します。国立公園そのものではありませんが、前後泊の設計によって旅の疲労や移動効率が大きく変わるため、非常に重要な存在です。無理のないスケジュールを組むことで、サファリ中の体験の質が向上し、全体の満足度も高まります。キリマンジャロ登山や他地域との組み合わせを考える際にも、ハブとして機能します。",
    bestFor: [
      "旅の拠点",
      "移動効率",
      "前後泊",
      "日程調整"
    ],
    x: 70,
    y: 29,
  },
];


const MAP_TEXTS = [
  { id: "dodoma", label: "ドドマ", type: "city", x: 45, y: 45 },
  { id: "dar_city", label: "ダルエスサラーム", type: "city", x: 87, y: 53 },
  { id: "キリマンジャロ空港", label: "キリマンジャロ空港", type: "airport", x: 75, y: 25 },
  { id: "dar", label: "DAR", type: "airport", x: 70, y: 80 },
  { id: "znz", label: "ザンジバル", type: "airport", x: 90, y: 48 },
];
const ANIMAL_LABEL = {
  lion: "ライオン",
  elephant: "ゾウ",
  giraffe: "キリン",
  cheetah: "チーター",
  leopard: "ヒョウ",
  zebra: "シマウマ",
  wildebeest: "ヌー",
  buffalo: "バッファロー",
  hippo: "カバ",
  rhino: "サイ",
  flamingo: "フラミンゴ",
  wilddog: "リカオン",
};
const ANIMAL_SCALE = {
  giraffe: 1.3,
  cheetah: 1.4,
  wildebeest: 1.3,
  wilddog:1.3,
};
function AnimalRow({ animals = [] }) {
  if (!animals.length) return null;

  return (
    <div className={styles.animals} aria-label="見られる確率が高い動物">
      <div className={styles.animalsTitle}>見られる確率が高い動物</div>

      <div className={styles.animalsRow}>
        {animals.map((key) => {
          const label = ANIMAL_LABEL[key] ?? key;

          return (
            <button
              key={key}
              type="button"
              className={styles.animalIconWrap}
              data-label={label}
              aria-label={label}
            >
              <img
                className={styles.animalIcon}
                src={`/images/safari/${key}.webp`}
                alt=""
                loading="lazy"
                style={{ transform: `scale(${ANIMAL_SCALE[key] ?? 1})` }}

              />

              {/* ✅ SPでだけ表示（CSSで制御） */}
              <span className={styles.animalName}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BestForTags({ items = [] }) {
  if (!items.length) return null;

  return (
    <div aria-label="こんな人向き">
      <div className={styles.tags}>
        {items.map((text) => (
          <span key={text} className={styles.tag}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}


const PLACE_IMAGES = {
  serengeti: [
    "/images/safari/serengeti-01.webp",
    "/images/safari/serengeti-02.webp",
    "/images/safari/serengeti-03.webp",
    "/images/safari/serengeti-04.webp",
    "/images/safari/serengeti-05.webp",
  ],
  ngorongoro: [
    "/images/safari/ngorongoro-01.webp",
    "/images/safari/ngorongoro-02.webp",
    "/images/safari/ngorongoro-03.webp",
    "/images/safari/ngorongoro-04.webp",
    "/images/safari/ngorongoro-05.webp",
  ],
  tarangire: [
    "/images/safari/tarangire-01.webp",
    "/images/safari/tarangire-02.webp",
    "/images/safari/tarangire-03.webp",
    "/images/safari/tarangire-04.webp",
    "/images/safari/tarangire-05.webp",
  ],
  manyara: [
    "/images/safari/manyara-01.webp",
    "/images/safari/manyara-02.webp",
    "/images/safari/manyara-03.webp",
    "/images/safari/manyara-04.webp",
    "/images/safari/manyara-05.webp",
  ],
  mkomazi: [
    "/images/safari/mkomazi-01.webp",
    "/images/safari/mkomazi-02.webp",
    "/images/safari/mkomazi-03.webp",
    "/images/safari/mkomazi-04.webp",
    "/images/safari/mkomazi-05.webp",
  ],
  arusha: [
    "/images/safari/arusha-01.webp",
    "/images/safari/arusha-02.webp",
    "/images/safari/arusha-03.webp",
  ],
};

function ReadMore({ text, previewChars = 90, onToggle }) {
  const [open, setOpen] = useState(false);

  if (text.length <= previewChars) {
    return <p className={styles.detailLine}>{text}</p>;
  }

  const preview = text.slice(0, previewChars).trim();
  const rest = text.slice(previewChars).trim();

  const openNow = () => {
    setOpen(true);
    onToggle?.(true);
  };
  const closeNow = () => {
    setOpen(false);
    onToggle?.(false);
  };

  return (
    <p className={styles.detailLine}>
      {preview}
      <span className={styles.dots} style={{ display: open ? "none" : "inline" }}>
        …
      </span>

      <span className={`${styles.moreWrap} ${open ? styles.moreOpen : ""}`}>
        {rest}
      </span>

      {!open ? (
        <button type="button" className={styles.readMoreInline} onClick={openNow}>
          続きを読む
        </button>
      ) : (
        <button type="button" className={styles.readMoreInlineClose} onClick={closeNow}>
          閉じる
        </button>
      )}
    </p>
  );
}







function useIsMobile(breakpointPx = 520) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpointPx]);
  return isMobile;
}

export default function Places() {
  const isMobile = useIsMobile(520);

  const [activeId, setActiveId] = useState(PLACES[0].id);
  const [hoverId, setHoverId] = useState(null);
  const shownId = hoverId ?? activeId;
  const [expanded, setExpanded] = useState(false);
  const activePlace = useMemo(
    () => PLACES.find((p) => p.id === shownId) ?? PLACES[0],
    [shownId]
  );

  // --- Carousel sync (PCもモバイルも同じカルーセルで連動) ---
  const scrollerRef = useRef(null);
  const cardRefs = useRef({}); // id -> element
  const indexById = useMemo(() => Object.fromEntries(PLACES.map((p, i) => [p.id, i + 1])), []);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const scrollToCard = (id) => {
    const el = cardRefs.current[id];
    const scroller = scrollerRef.current;
    if (!el || !scroller) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta =
      elRect.left + elRect.width / 2 - (scrollerRect.left + scrollerRect.width / 2);

    scroller.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleSelect = (id) => {
    setActiveId(id);
    // PCもモバイルも “選択” したらカードを寄せる
    scrollToCard(id);
  };
    

  const updateArrows = () => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const x = scroller.scrollLeft;

      // 端の判定は少し余裕を持たせる
      setCanLeft(x > 2);
      setCanRight(x < max - 2);
    };

    const getStep = () => {
      // “1カードぶん”に近い距離を動かしたいので、
      // まずアクティブカードの幅を優先。なければscroller幅の0.85
      const scroller = scrollerRef.current;
      const active = cardRefs.current[activeId];
      if (active) return Math.round(active.getBoundingClientRect().width + 16); // gapぶん適当に
      if (!scroller) return 320;
      return Math.round(scroller.getBoundingClientRect().width * 0.85);
    };

    const scrollByDir = (dir) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const step = getStep();
      scroller.scrollBy({ left: dir * step, behavior: "smooth" });
    };

  // カード横スクロール -> 中央カードを active に（PC/モバイル共通）
    useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = scroller.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        let bestId = activeId;
        let bestDist = Infinity;

        for (const p of PLACES) {
          const el = cardRefs.current[p.id];
          if (!el) continue;
          const r = el.getBoundingClientRect();
          const c = r.left + r.width / 2;
          const d = Math.abs(c - centerX);
          if (d < bestDist) {
            bestDist = d;
            bestId = p.id;
          }
        }

        if (bestId && bestId !== activeId) setActiveId(bestId);

        // ✅ 追加：矢印の有効/無効更新
        updateArrows();
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });

    // ✅ 初期表示とリサイズでも更新
    updateArrows();
    window.addEventListener("resize", updateArrows);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
      cancelAnimationFrame(raf);
    };
  }, [activeId]);


  return (
    <section className={styles.section} aria-labelledby="places-title">
      <div className="inner">
        <div className="head">
          <div className="kicker">Places</div>
          <h2 id="places-title" className="title">
            主なサファリ
          </h2>
        </div>

        <div className={`${styles.grid} ${expanded ? styles.gridExpanded : ""}`}>
            {/* LEFT: MAP */}
            <div className={styles.leftCol}>
                <div className={styles.mapWrap}>
                <div className={styles.map} role="group" aria-label="Tanzania map with pins">
                    <div className={styles.mapMask} aria-hidden="true" />

                    {/* 都市・空港 */}
                    {MAP_TEXTS.map((t) => (
                    <div
                        key={t.id}
                        className={`${styles.mapText} ${
                        t.type === "airport" ? styles.mapTextAirport : styles.mapTextCity
                        }`}
                        style={{ left: `${t.x}%`, top: `${t.y}%` }}
                    >
                        <span className={styles.mapDot} aria-hidden="true" />
                        <span className={styles.mapLabel}>{t.label}</span>
                    </div>
                    ))}

                    {/* PC pins */}
                    {PLACES.map((p) => {
                    const isActive = p.id === activeId;
                    const isShown = p.id === shownId;
                    return (
                        <button
                        key={p.id}
                        type="button"
                        className={`${styles.pin} ${isActive ? styles.pinActive : ""} ${
                            isShown ? styles.pinShown : ""
                        }`}
                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        aria-pressed={isActive}
                        aria-label={`${p.name} を表示`}
                        onClick={() => handleSelect(p.id)}
                        onMouseEnter={() => setHoverId(p.id)}
                        onMouseLeave={() => setHoverId(null)}
                        onFocus={() => setHoverId(p.id)}
                        onBlur={() => setHoverId(null)}
                        >
                        <span className={styles.pinDot} aria-hidden="true" />
                        <span className={styles.pinRing} aria-hidden="true" />
                        <span className={styles.pinLabel}>{p.name}</span>
                        </button>
                    );
                    })}

                    {/* Mobile numbers */}
                    {PLACES.map((p) => {
                    const isActive = p.id === activeId;
                    const no = indexById[p.id];
                    return (
                        <button
                        key={`m-${p.id}`}
                        type="button"
                        className={`${styles.mPin} ${isActive ? styles.mPinActive : ""}`}
                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        aria-label={`${no}. ${p.name}`}
                        aria-pressed={isActive}
                        onClick={() => handleSelect(p.id)}
                        >
                        <span className={styles.mPinNo}>{no}</span>
                        </button>
                    );
                    })}
                </div>

                </div>
            </div>

            {/* RIGHT: CARDS */}
            <div className={styles.rightCol}>
                <div className={styles.carousel} aria-label="Safari places carousel">
                <button
                  type="button"
                  className={`${styles.navArrow} ${styles.navLeft} ${!canLeft ? styles.navDisabled : ""}`}
                  onClick={() => scrollByDir(-1)}
                  aria-label="前へ"
                  disabled={!canLeft}
                >
                  ‹
                </button>

                <button
                  type="button"
                  className={`${styles.navArrow} ${styles.navRight} ${!canRight ? styles.navDisabled : ""}`}
                  onClick={() => scrollByDir(1)}
                  aria-label="次へ"
                  disabled={!canRight}
                >
                  ›
                </button>
                <div ref={scrollerRef} className={styles.scroller}>
                    {PLACES.map((p) => {
                    const isActive = p.id === activeId;
                    const no = indexById[p.id];

                    return (
                        <article
                        key={`card-${p.id}`}
                        ref={(el) => {
                            if (el) cardRefs.current[p.id] = el;
                        }}
                        className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                        aria-label={`${no}. ${p.name}`}
                        onClick={() => handleSelect(p.id)}
                        >
                        <div className={styles.cardTop}>
                            <div className={styles.badge}>{no}</div>
                            <div>
                            <div className={styles.name}>{p.name}</div>
                            <div className={styles.short}>{p.short}</div>
                            </div>
                        </div>
                         <ReadMore
                            text={p.detail}
                            previewChars={92}
                            onToggle={(isOpen) => setExpanded(isOpen)}
                          />
                        <BestForTags items={p.bestFor} />
                        <AnimalRow animals={p.animals ?? []} />

                        <SlideShow title={p.name} images={PLACE_IMAGES[p.id] ?? []} />

                        </article>
                    );
                    })}
                </div>
                </div>
            </div>
            </div>

      </div>
    </section>
  );
}
