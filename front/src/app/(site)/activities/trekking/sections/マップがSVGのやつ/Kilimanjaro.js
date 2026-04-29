"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Kilimanjaro.module.css";

const ROUTES = [
  {
    key: "marangu",
    no: "01",
    name: "マラングルート",
    alias: "コカ・コーラルート",
    days: "5–6日",
    stay: "山小屋泊",
    difficulty: "やさしめ",
    traffic: "多い",
    summary:
      "最も古く整備された定番ルート。唯一の山小屋泊で、初心者にも説明しやすい王道。",
    detail:
      "Easy Travel の説明では、マラングは最も古く整備されたルートで、7ルートの中でも比較的登りやすい一方、日程が短いため高度順応はしにくめ。登りも下りも同じ側を使うので、景観の変化はやや少なめです。",
    pros: ["唯一の山小屋泊", "比較的わかりやすい王道", "費用を抑えやすい"],
    cons: ["順応しにくい", "景観の変化は少なめ", "混雑しやすい"],
    bestFor: ["山小屋泊が安心", "初挑戦", "費用重視"],
    mapPath:
      "M 804 572 C 789 544 778 505 766 466 C 749 409 729 362 700 330 C 668 294 621 284 586 284",
    start: { x: 804, y: 572, label: "Marangu Gate", tag: "START / END" },
    end: null,
  },
  {
    key: "machame",
    no: "02",
    name: "マチャメルート",
    alias: "ウィスキールート",
    days: "6–7日",
    stay: "テント泊",
    difficulty: "中〜高",
    traffic: "多い",
    summary:
      "景観の良さで人気が高い王道ルート。ややチャレンジングだが、景色と順応のバランスがいい。",
    detail:
      "Easy Travel では、マチャメは景観が美しく有名なルートとして紹介されています。急峻で難しさはあるものの、順応しやすさと登頂のしやすさのバランスがよく、王道として選ばれやすいルートです。",
    pros: ["景観がきれい", "順応しやすい", "人気が高く情報も多い"],
    cons: ["ややハード", "混雑しやすい"],
    bestFor: ["景色重視", "王道ルート", "順応も重視"],
    mapPath:
      "M 230 582 C 232 540 242 494 258 448 C 276 398 306 364 347 342 C 392 317 444 316 486 331 C 516 341 544 331 566 300 C 573 291 579 286 586 284 C 597 305 607 327 617 354 C 628 389 636 428 642 474 C 648 520 657 565 676 626",
    start: { x: 230, y: 582, label: "Machame Gate", tag: "START" },
    end: { x: 676, y: 626, label: "Mweka Gate", tag: "END" },
  },
  {
    key: "lemosho",
    no: "03",
    name: "レモショルート",
    alias: "西側パノラマルート",
    days: "7–8日",
    stay: "テント泊",
    difficulty: "中",
    traffic: "少なめ",
    summary:
      "西から入り、パノラマの景色を見ながら回り込む人気ルート。混雑が少なく、順応もしやすい。",
    detail:
      "Easy Travel では、レモショは最も壮観なパノラマを楽しめるおすすめルートの一つとされています。西からシラ高原に入り、サザンサーキットを回ってムウェカへ下る流れで、景色・順応・混雑の少なさのバランスが良いルートです。",
    pros: ["パノラマが美しい", "順応の時間を取りやすい", "混雑が少ない"],
    cons: ["日数が長め", "短いルートより高め"],
    bestFor: ["景色を楽しみたい", "順応重視", "混雑を避けたい"],
    mapPath:
      "M 112 406 C 150 387 190 375 234 371 C 286 366 329 372 372 381 C 422 391 464 395 501 390 C 537 384 563 368 581 340 C 589 327 594 307 586 284 C 596 306 609 333 620 367 C 632 405 641 451 648 503 C 655 548 662 586 676 626",
    start: { x: 112, y: 406, label: "Londorossi Gate", tag: "START" },
    end: { x: 676, y: 626, label: "Mweka Gate", tag: "END" },
  },
  {
    key: "shira",
    no: "04",
    name: "シラルート",
    alias: "シラ高原ルート",
    days: "7日+",
    stay: "テント泊",
    difficulty: "中〜高",
    traffic: "中くらい",
    summary:
      "シラ高原側から始まる、レモショに近いルート。高い位置から始まるぶん、静かだが順応面は少しシビア。",
    detail:
      "Easy Travel の説明では、シラはレモショと非常によく似たルートで、シラ尾根付近からスタートします。景色は素晴らしい一方、出発標高が高いので、レモショよりややシビアな印象です。",
    pros: ["景色がよい", "やや静か", "高原感が強い"],
    cons: ["スタート標高が高い", "レモショより順応しにくい"],
    bestFor: ["静かに歩きたい", "西側の景観が好き", "経験者向き"],
    mapPath:
      "M 175 314 C 212 308 252 308 295 314 C 344 322 395 331 440 334 C 486 337 529 331 560 314 C 571 308 580 298 586 284 C 597 305 609 333 620 367 C 632 405 641 451 648 503 C 655 548 662 586 676 626",
    start: { x: 175, y: 314, label: "Shira Gate", tag: "START" },
    end: { x: 676, y: 626, label: "Mweka Gate", tag: "END" },
  },
  {
    key: "northern",
    no: "05",
    name: "ノーザンサーキット",
    alias: "北回りルート",
    days: "8–9日",
    stay: "テント泊",
    difficulty: "中〜高",
    traffic: "かなり少ない",
    summary:
      "山を大きく北側へ回り込む最長ルート。360度の景色と順応のしやすさが魅力。",
    detail:
      "Easy Travel では、ノーザンサーキットは最も長いルートで、360度の景色と高い登頂成功率が魅力とされています。北斜面まで回り込むので人が少なく、時間をかけて順応したい人に向いています。",
    pros: ["360度の景色", "順応しやすい", "成功率が高い", "人が少ない"],
    cons: ["日数が長い", "費用も上がりやすい", "短期日程には向かない"],
    bestFor: ["成功率重視", "混雑を避けたい", "長めの日程OK"],
    mapPath:
      "M 112 406 C 150 355 201 304 274 264 C 343 226 421 206 503 210 C 576 214 654 236 715 271 C 736 283 738 292 723 301 C 695 318 660 322 633 318 C 611 315 596 305 586 284 C 601 313 615 344 626 381 C 639 423 647 471 653 522 C 658 564 665 596 676 626",
    start: { x: 112, y: 406, label: "Londorossi Gate", tag: "START" },
    end: { x: 676, y: 626, label: "Mweka Gate", tag: "END" },
  },
  {
    key: "rongai",
    no: "06",
    name: "ロンガイルート",
    alias: "北側アプローチ",
    days: "6–7日",
    stay: "テント泊",
    difficulty: "中",
    traffic: "少ない",
    summary:
      "ケニア側に近い北側から登る唯一のルート。傾斜が比較的緩やかで、静かな雰囲気。",
    detail:
      "Easy Travel では、ロンガイはキリマンジャロを北から登る唯一のルートとして紹介されています。混雑が少なく、他ルートより傾斜も緩やか。雨が比較的少ない時期に歩きやすいルートとしても挙げられています。",
    pros: ["北側からの唯一のルート", "混雑が少ない", "傾斜が比較的緩やか"],
    cons: ["景観の変化はやや少なめ"],
    bestFor: ["静かな登山", "北側から登りたい", "傾斜ゆるめ希望"],
    mapPath:
      "M 815 200 C 782 212 747 233 712 263 C 678 293 650 309 621 316 C 604 320 592 310 586 284 C 610 310 638 344 657 395 C 672 436 682 486 692 537 C 701 563 723 572 804 572",
    start: { x: 815, y: 200, label: "Rongai Gate", tag: "START" },
    end: { x: 804, y: 572, label: "Marangu Gate", tag: "END" },
  },
  {
    key: "umbwe",
    no: "07",
    name: "ウンブウェルート",
    alias: "最難関ルート",
    days: "5–6日",
    stay: "テント泊",
    difficulty: "高い",
    traffic: "かなり少ない",
    summary:
      "急登で一気に高度を上げる、最も過酷なルート。静かだが、経験者向け。",
    detail:
      "Easy Travel では、ウンブウェは最も過酷なルートとして紹介されています。急激に高度を上げるため順応が難しく、登頂率も低め。そのぶん人が少なく、経験がある人には挑戦的な選択肢になります。",
    pros: ["人が少ない", "とてもダイレクト"],
    cons: ["急登", "順応が難しい", "難易度が高い"],
    bestFor: ["経験者", "静かなルート", "急登OK"],
    mapPath:
      "M 318 620 C 327 572 340 522 357 476 C 376 425 407 390 446 365 C 478 345 521 345 549 327 C 568 315 580 301 586 284 C 600 309 613 338 624 374 C 638 418 647 470 654 523 C 660 566 666 596 676 626",
    start: { x: 318, y: 620, label: "Umbwe Gate", tag: "START" },
    end: { x: 676, y: 626, label: "Mweka Gate", tag: "END" },
  },
];

function ReadMore({ text, previewChars = 100 }) {
  const [open, setOpen] = useState(false);

  if (!text || text.length <= previewChars) {
    return <p className={styles.detailLine}>{text}</p>;
  }

  const preview = text.slice(0, previewChars).trim();
  const rest = text.slice(previewChars).trim();

  return (
    <p className={styles.detailLine}>
      {preview}
      {!open && <span className={styles.dots}>…</span>}
      <span className={`${styles.moreWrap} ${open ? styles.moreOpen : ""}`}>
        {" "}
        {rest}
      </span>
      {!open ? (
        <button
          type="button"
          className={styles.readMoreInline}
          onClick={() => setOpen(true)}
        >
          続きを読む
        </button>
      ) : (
        <button
          type="button"
          className={styles.readMoreInlineClose}
          onClick={() => setOpen(false)}
        >
          閉じる
        </button>
      )}
    </p>
  );
}

function BestForTags({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className={styles.tags}>
      {items.map((item) => (
        <span key={item} className={styles.tag}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Marker({ x, y, label, tag }) {
  return (
    <g className={styles.activeMarkerWrap} transform={`translate(${x}, ${y})`}>
      <circle className={styles.activeMarkerDot} r="8" />
      <text className={styles.activeMarkerTag} x="0" y="28" textAnchor="middle">
        {tag}
      </text>
      <text className={styles.activeMarkerText} x="0" y="45" textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

export default function Kilimanjaro() {
  const [activeKey, setActiveKey] = useState("machame");

  const active = useMemo(
    () => ROUTES.find((route) => route.key === activeKey) ?? ROUTES[0],
    [activeKey]
  );

  const scrollerRef = useRef(null);
  const cardRefs = useRef({});
  const indexByKey = useMemo(
    () => Object.fromEntries(ROUTES.map((route, i) => [route.key, i + 1])),
    []
  );

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const max = scroller.scrollWidth - scroller.clientWidth;
    const x = scroller.scrollLeft;
    setCanLeft(x > 2);
    setCanRight(x < max - 2);
  };

  const scrollToCard = (key) => {
    const el = cardRefs.current[key];
    const scroller = scrollerRef.current;
    if (!el || !scroller) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta =
      elRect.left + elRect.width / 2 - (scrollerRect.left + scrollerRect.width / 2);

    scroller.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleSelect = (key) => {
    setActiveKey(key);
    scrollToCard(key);
  };

  const getStep = () => {
    const scroller = scrollerRef.current;
    const activeEl = cardRefs.current[activeKey];
    if (activeEl) return Math.round(activeEl.getBoundingClientRect().width + 16);
    if (!scroller) return 320;
    return Math.round(scroller.getBoundingClientRect().width * 0.85);
  };

  const scrollByDir = (dir) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const step = getStep();
    scroller.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = scroller.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        let bestKey = activeKey;
        let bestDist = Infinity;

        for (const route of ROUTES) {
          const el = cardRefs.current[route.key];
          if (!el) continue;
          const r = el.getBoundingClientRect();
          const center = r.left + r.width / 2;
          const dist = Math.abs(center - centerX);
          if (dist < bestDist) {
            bestDist = dist;
            bestKey = route.key;
          }
        }

        if (bestKey && bestKey !== activeKey) setActiveKey(bestKey);
        updateArrows();
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    updateArrows();
    window.addEventListener("resize", updateArrows);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
      cancelAnimationFrame(raf);
    };
  }, [activeKey]);

  return (
    <section className={styles.section} aria-labelledby="kilimanjaro-routes-title">
      <div className="inner">
        <div className="head">
          <div className="kicker">Routes</div>
          <h2 id="kilimanjaro-routes-title" className="title">
            キリマンジャロ 7ルート比較
          </h2>
          <p className={styles.lead}>
            Easy Travel のルート図をもとに、7つの主要ルートを一枚の模式図に再構成。
            左のルート線か下のスイッチで選ぶと、右のカードが連動します。
          </p>
        </div>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.leftCol}>
            <div className={styles.mapWrap}>
              <div className={styles.mapCard}>
                <div className={styles.mapTop}>
                  <div className={styles.mapHeading}>
                    <div className={styles.mapKicker}>Route Map</div>
                    <h3 className={styles.mapTitle}>{active.name}</h3>
                    <p className={styles.mapSub}>{active.alias}</p>
                  </div>
                </div>

                <div className={styles.mapStage}>
                  <svg
                    className={styles.mapSvg}
                    viewBox="0 0 1000 700"
                    role="img"
                    aria-label="キリマンジャロ登山ルート模式図"
                  >
                    {/* background zones */}
                    <path
                      className={styles.zoneOuter}
                      d="M112,78 C176,18 330,28 456,50 C583,73 734,72 829,129 C918,182 956,276 951,393 C947,513 881,626 742,650 C594,677 420,652 292,592 C191,545 122,473 98,377 C76,288 73,124 112,78 Z"
                    />
                    <path
                      className={styles.zoneMid}
                      d="M171,161 C234,115 352,118 456,136 C567,156 678,152 765,196 C835,232 870,293 870,376 C870,462 826,541 722,575 C601,614 438,609 321,566 C237,535 192,479 175,409 C158,339 150,207 171,161 Z"
                    />
                    <path
                      className={styles.zoneInner}
                      d="M238,250 C292,207 395,202 489,214 C572,224 645,229 709,262 C764,290 791,343 789,399 C786,458 755,503 685,528 C598,558 471,561 379,536 C307,517 262,476 244,423 C224,366 210,286 238,250 Z"
                    />

                    {/* summit crater */}
                    <path
                      className={styles.craterOuter}
                      d="M520,238 C551,223 593,223 626,232 C658,241 679,257 684,277 C688,294 679,313 657,327 C627,344 579,347 545,335 C517,325 499,309 496,289 C493,270 500,248 520,238 Z"
                    />
                    <path
                      className={styles.craterInner}
                      d="M551,252 C573,243 603,243 626,251 C645,258 657,270 660,284 C663,298 656,309 641,318 C621,330 588,332 565,325 C546,319 533,307 531,293 C528,278 536,258 551,252 Z"
                    />

                    {/* Mawenzi */}
                    <path
                      className={styles.mawenziBlob}
                      d="M780,303 C792,283 814,282 827,298 C839,313 838,338 824,352 C810,366 787,361 777,344 C770,332 771,317 780,303 Z"
                    />

                    {/* labels */}
                    <text className={styles.labelPeak} x="588" y="286" textAnchor="middle">
                      UHURU
                    </text>
                    <text className={styles.labelPeak} x="588" y="307" textAnchor="middle">
                      PEAK
                    </text>
                    <text className={styles.labelPeakSmall} x="588" y="327" textAnchor="middle">
                      5,895m
                    </text>

                    <polygon
                      points="614,280 626,303 602,303"
                      className={styles.peakIcon}
                    />

                    <polygon
                      points="800,316 812,338 788,338"
                      className={styles.peakIcon}
                    />
                    <text className={styles.labelSide} x="845" y="329">
                      MAWENZI
                    </text>
                    <text className={styles.labelSide} x="861" y="348">
                      PEAK
                    </text>

                    {/* gates / references */}
                    <text className={styles.labelRef} x="72" y="400">
                      Londorossi
                    </text>
                    <text className={styles.labelRef} x="83" y="420">
                      Gate
                    </text>

                    <text className={styles.labelRef} x="170" y="296">
                      Shira
                    </text>
                    <text className={styles.labelRef} x="164" y="316">
                      Ridge
                    </text>

                    <text className={styles.labelRef} x="175" y="602">
                      Machame
                    </text>
                    <text className={styles.labelRef} x="193" y="622">
                      Gate
                    </text>

                    <text className={styles.labelRef} x="280" y="646">
                      Umbwe
                    </text>
                    <text className={styles.labelRef} x="294" y="666">
                      Gate
                    </text>

                    <text className={styles.labelRef} x="746" y="183">
                      Rongai
                    </text>
                    <text className={styles.labelRef} x="758" y="203">
                      Gate
                    </text>

                    <text className={styles.labelRef} x="768" y="560">
                      Marangu
                    </text>
                    <text className={styles.labelRef} x="780" y="580">
                      Gate
                    </text>

                    <text className={styles.labelRef} x="650" y="626">
                      Mweka
                    </text>
                    <text className={styles.labelRef} x="661" y="646">
                      Gate
                    </text>

                    {/* route lines */}
                    {ROUTES.map((route) => (
                      <g key={route.key}>
                        <path
                          d={route.mapPath}
                          className={styles.routePath}
                          data-active={route.key === activeKey}
                          onClick={() => handleSelect(route.key)}
                          onMouseEnter={() => setActiveKey(route.key)}
                        />
                        <path
                          d={route.mapPath}
                          className={styles.routeHit}
                          onClick={() => handleSelect(route.key)}
                          onMouseEnter={() => setActiveKey(route.key)}
                        />
                      </g>
                    ))}

                    {/* active start / end */}
                    {active.start ? (
                      <Marker
                        x={active.start.x}
                        y={active.start.y}
                        label={active.start.label}
                        tag={active.start.tag}
                      />
                    ) : null}

                    {active.end ? (
                      <Marker
                        x={active.end.x}
                        y={active.end.y}
                        label={active.end.label}
                        tag={active.end.tag}
                      />
                    ) : null}
                  </svg>
                </div>

                <div className={styles.routeSwitches} aria-label="ルート選択">
                  {ROUTES.map((route) => (
                    <button
                      key={route.key}
                      type="button"
                      className={`${styles.routeSwitch} ${
                        route.key === activeKey ? styles.routeSwitchActive : ""
                      }`}
                      onClick={() => handleSelect(route.key)}
                    >
                      <span className={styles.routeSwitchNo}>{route.no}</span>
                      <span className={styles.routeSwitchName}>{route.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.rightCol}>
            <div className={styles.carousel} aria-label="Kilimanjaro routes carousel">
              <button
                type="button"
                className={`${styles.navArrow} ${styles.navLeft} ${
                  !canLeft ? styles.navDisabled : ""
                }`}
                onClick={() => scrollByDir(-1)}
                aria-label="前へ"
                disabled={!canLeft}
              >
                ‹
              </button>

              <button
                type="button"
                className={`${styles.navArrow} ${styles.navRight} ${
                  !canRight ? styles.navDisabled : ""
                }`}
                onClick={() => scrollByDir(1)}
                aria-label="次へ"
                disabled={!canRight}
              >
                ›
              </button>

              <div ref={scrollerRef} className={styles.scroller}>
                {ROUTES.map((route) => {
                  const isActive = route.key === activeKey;
                  const no = indexByKey[route.key];

                  return (
                    <article
                      key={route.key}
                      ref={(el) => {
                        if (el) cardRefs.current[route.key] = el;
                      }}
                      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                      aria-label={`${no}. ${route.name}`}
                      onClick={() => handleSelect(route.key)}
                    >
                      <div className={styles.cardTop}>
                        <div className={styles.badge}>{route.no}</div>
                        <div>
                          <div className={styles.name}>{route.name}</div>
                          <div className={styles.alias}>{route.alias}</div>
                          <div className={styles.short}>{route.summary}</div>
                        </div>
                      </div>

                      <div className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>日数目安</div>
                          <div className={styles.metaValue}>{route.days}</div>
                        </div>
                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>宿泊</div>
                          <div className={styles.metaValue}>{route.stay}</div>
                        </div>
                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>難易度</div>
                          <div className={styles.metaValue}>{route.difficulty}</div>
                        </div>
                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>混雑感</div>
                          <div className={styles.metaValue}>{route.traffic}</div>
                        </div>
                      </div>

                      <ReadMore text={route.detail} previewChars={112} />

                      <div className={styles.prosCons}>
                        <div className={styles.listBlock}>
                          <div className={styles.listTitle}>メリット</div>
                          <ul className={styles.list}>
                            {route.pros.map((item) => (
                              <li key={item} className={styles.item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.listBlock}>
                          <div className={styles.listTitle}>注意点</div>
                          <ul className={styles.list}>
                            {route.cons.map((item) => (
                              <li key={item} className={styles.item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <BestForTags items={route.bestFor} />
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