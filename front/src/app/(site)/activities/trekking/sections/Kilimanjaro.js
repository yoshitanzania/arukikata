"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Kilimanjaro.module.css";
import {
  FiClock,
  FiTrendingUp,
  FiExternalLink,
  FiChevronDown,
} from "react-icons/fi";

const MAP_IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272206.5593534905!2d37.328334996870446!3d-3.067784653672309!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839fc5a396ea805%3A0x8e741c478eea6c01!2sMt%20Kilimanjaro!5e0!3m2!1sen!2srw!4v1770556157778!5m2!1sen!2srw";
const ROUTES = [
  {
    key: "marangu",
    no: "01",
    name: "マラングルート",
    alias: "コカ・コーラルート",
    metaTags: ["5–6日", "山小屋泊", "やさしめ", "混雑しやすい"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "最も古く整備された定番ルート。唯一の山小屋泊で、初めてでも検討しやすい。",
    detail:
      "比較的登りやすい一方、日程が短いため高度順応はしにくめ。登りも下りも同じ側を使うので、景観の変化はやや少なめ。",
    pros: ["唯一の山小屋泊", "比較的わかりやすい王道", "費用を抑えやすい"],
    cons: ["順応しにくい", "景観の変化は少なめ", "混雑しやすい"],
    bestFor: ["山小屋泊が安心", "初挑戦", "費用重視"],
    mapPath:
      "M 804 572 C 789 544 778 505 766 466 C 749 409 729 362 700 330 C 668 294 621 284 586 284",
    itinerary: [
      {
        day: "1",
        start: "マラング門",
        overnight: "マンダラハット",
        time: "4-5時間",
        km: "8km",
      },
      {
        day: "2",
        start: "マンダラハット",
        overnight: "ホロンボ小屋",
        time: "6-8時間",
        km: "12km",
      },
      {
        day: "3",
        start: "ホロンボハット",
        stop: "ゼブラロック",
        overnight: "ホロンボハット",
        time: "1-1.5時間 / 1-1.5時間",
        km: "2km / 2km",
      },
      {
        day: "4",
        start: "ホロンボ小屋",
        overnight: "キボハット",
        time: "6-8時間",
        km: "10km",
      },
      {
        day: "5",
        start: "キボハット",
        summit: "ウフルピーク",
        overnight: "ホロンボ小屋",
        time: "6-8時間 / 4-5時間",
        km: "6km / 16km",
      },
      {
        day: "6",
        start: "ホロンボ小屋",
        finish: "マラング門",
        time: "5-7時間",
        km: "20km",
      },
    ],
  },
  {
    key: "machame",
    no: "02",
    name: "マチャメルート",
    alias: "ウィスキールート",
    metaTags: ["6–7日", "テント泊", "中〜高", "混雑しやすい"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "景観の良さで人気が高い王道ルート。ややチャレンジングだが、景色と順応のバランスがいい。",
    detail:
      "景観が美しく有名なルート。急峻で難しさはあるものの、順応しやすさと登頂のしやすさのバランスがよく、王道として選ばれやすい。",
    pros: ["景観がきれい", "順応しやすい", "人気が高く情報も多い"],
    cons: ["ややハード", "混雑しやすい"],
    bestFor: ["景色重視", "王道ルート", "順応も重視"],
    mapPath:
      "M 230 582 C 232 540 242 494 258 448 C 276 398 306 364 347 342 C 392 317 444 316 486 331 C 516 341 544 331 566 300 C 573 291 579 286 586 284 C 597 305 607 327 617 354 C 628 389 636 428 642 474 C 648 520 657 565 676 626",
    itinerary: [
      {
        day: "1",
        start: "マチャメ門",
        overnight: "マチャメキャンプ",
        time: "5-6時間",
        km: "11km",
      },
      {
        day: "2",
        start: "マチャメキャンプ",
        overnight: "シラ2キャンプ",
        time: "4-6時間",
        km: "5km",
      },
      {
        day: "3",
        start: "シラ2キャンプ",
        stop: "ラバタワー",
        overnight: "バランコキャンプ",
        time: "4-5時間 / 2-3時間",
        km: "7km / 3km",
      },
      {
        day: "4",
        start: "バランコキャンプ",
        overnight: "カランガキャンプ",
        time: "4-5時間",
        km: "6km",
      },
      {
        day: "5",
        start: "カランガキャンプ",
        overnight: "バラフキャンプ",
        time: "4-5時間",
        km: "4km",
      },
      {
        day: "6",
        start: "バラフキャンプ",
        summit: "ウフルピーク",
        overnight: "ムウェカキャンプ",
        time: "7-8時間 / 4-6時間",
        km: "5km / 12km",
      },
      {
        day: "7",
        start: "ムウェカキャンプ",
        finish: "ムウェカ門",
        time: "3-4時間",
        km: "10km",
      },
    ],
  },
  {
    key: "lemosho",
    no: "03",
    name: "レモショルート",
    alias: "西側パノラマルート",
    metaTags: ["7–8日", "テント泊", "中", "少ない"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "西から入り、パノラマの景色を見ながら回り込む人気ルート。混雑が少なく、順応もしやすい。",
    detail:
      "西からシラ高原に入り、サザンサーキットを回ってムウェカへ下る流れ。景色・順応・混雑の少なさのバランスが良いルート。",
    pros: ["パノラマが美しい", "順応の時間を取りやすい", "混雑が少ない"],
    cons: ["日数が長め", "短いルートより高め"],
    bestFor: ["景色を楽しみたい", "順応重視", "混雑を避けたい"],
    mapPath:
      "M 112 406 C 150 387 190 375 234 371 C 286 366 329 372 372 381 C 422 391 464 395 501 390 C 537 384 563 368 581 340 C 589 327 594 307 586 284 C 596 306 609 333 620 367 C 632 405 641 451 648 503 C 655 548 662 586 676 626",
    itinerary: [
      {
        day: "1",
        start: "ロンドロッシ門",
        overnight: "ムティ・ムクブワ",
        time: "3-4時間",
        km: "6km",
      },
      {
        day: "2",
        start: "ムティ・ムクブワ",
        overnight: "シラ1キャンプ",
        time: "5-6時間",
        km: "8km",
      },
      {
        day: "3",
        start: "シラ1キャンプ",
        overnight: "シラ2キャンプ",
        time: "5-7時間",
        km: "11km",
      },
      {
        day: "4",
        start: "シラ2キャンプ",
        stop: "ラバタワー",
        overnight: "バランコキャンプ",
        time: "4-5時間 / 2-3時間",
        km: "7km / 3km",
      },
      {
        day: "5",
        start: "バランコキャンプ",
        overnight: "カランガキャンプ",
        time: "4-5時間",
        km: "5km",
      },
      {
        day: "6",
        start: "カランガキャンプ",
        overnight: "バラフキャンプ",
        time: "4-5時間",
        km: "4km",
      },
      {
        day: "7",
        start: "バラフキャンプ",
        summit: "ウフルピーク",
        overnight: "ムウェカキャンプ",
        time: "7-8時間 / 4-6時間",
        km: "5km / 12km",
      },
      {
        day: "8",
        start: "ムウェカキャンプ",
        finish: "ムウェカ門",
        time: "3-4時間",
        km: "10km",
      },
    ],
  },
  {
    key: "shira",
    no: "04",
    name: "シラルート",
    alias: "シラ高原ルート",
    metaTags: ["7日+", "テント泊", "中〜高", "中くらい"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "シラ高原側から始まる、レモショに近いルート。高い位置から始まるぶん、順応面は少しシビア。",
    detail:
      "レモショと非常によく似たルートで、シラ尾根付近からスタートする。景色は素晴らしい一方、出発標高が高いので、レモショよりややシビア。",
    pros: ["景色がよい", "やや静か", "高原感が強い"],
    cons: ["スタート標高が高い", "レモショより順応しにくい"],
    bestFor: ["静かに歩きたい", "西側の景観が好き", "経験者向き"],
    mapPath:
      "M 175 314 C 212 308 252 308 295 314 C 344 322 395 331 440 334 C 486 337 529 331 560 314 C 571 308 580 298 586 284 C 597 305 609 333 620 367 C 632 405 641 451 648 503 C 655 548 662 586 676 626",
    itinerary: [
      {
        day: "1",
        start: "シラゲート",
        overnight: "シンバキャンプ",
        time: "1時間〜",
        km: "4km",
      },
      {
        day: "2",
        start: "シンバキャンプ",
        overnight: "シラ2キャンプ",
        time: "2時間",
        km: "6km",
      },
      {
        day: "3",
        start: "シラ2キャンプ",
        stop: "ラバタワー",
        overnight: "バランコキャンプ",
        time: "4-5時間 / 2-3時間",
        km: "7km / 3km",
      },
      {
        day: "4",
        start: "バランコキャンプ",
        overnight: "カランガキャンプ",
        time: "4-5時間",
        km: "5km",
      },
      {
        day: "5",
        start: "カランガキャンプ",
        overnight: "バラフキャンプ",
        time: "4-5時間",
        km: "4km",
      },
      {
        day: "6",
        start: "バラフキャンプ",
        summit: "ウフルピーク",
        overnight: "ムウェカキャンプ",
        time: "7-8時間 / 4-6時間",
        km: "5km / 12km",
      },
      {
        day: "7",
        start: "ムウェカキャンプ",
        finish: "ムウェカゲート",
        time: "3-4時間",
        km: "10km",
      },
    ],
  },
  {
    key: "northern",
    no: "05",
    name: "ノーザンサーキット",
    alias: "北回りルート",
    metaTags: ["8–9日", "テント泊", "中〜高", "かなり少ない"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "山を大きく北側へ回り込む最長ルート。360度の景色と順応のしやすさが魅力。",
    detail:
      "山の北側まで大きく回る最長ルート。人が少なく、時間をかけて順応したい人に向いている。",
    pros: ["360度の景色", "順応しやすい", "成功率が高い", "人が少ない"],
    cons: ["日数が長い", "費用も上がりやすい", "短期日程には向かない"],
    bestFor: ["成功率重視", "混雑を避けたい", "長めの日程OK"],
    mapPath:
      "M 112 406 C 150 355 201 304 274 264 C 343 226 421 206 503 210 C 576 214 654 236 715 271 C 736 283 738 292 723 301 C 695 318 660 322 633 318 C 611 315 596 305 586 284 C 601 313 615 344 626 381 C 639 423 647 471 653 522 C 658 564 665 596 676 626",
    itinerary: [
      {
        day: "1",
        start: "ロンドロッシ門",
        overnight: "ムティ・ムクブワ",
        time: "3-4時間",
        km: "6km",
      },
      {
        day: "2",
        start: "ムティ・ムクブワ",
        overnight: "シラ1キャンプ",
        time: "5-6時間",
        km: "8km",
      },
      {
        day: "3",
        start: "シラ1キャンプ",
        overnight: "シラ2キャンプ",
        time: "3-4時間",
        km: "7km",
      },
      {
        day: "4",
        start: "シラ2キャンプ",
        stop: "ラバタワー",
        overnight: "モアハット",
        time: "3-4時間 / 2-3時間",
        km: "7km / 7km",
      },
      {
        day: "5",
        start: "モアハット",
        overnight: "バッファローキャンプ",
        time: "5-7時間",
        km: "12km",
      },
      {
        day: "6",
        start: "バッファローキャンプ",
        overnight: "第三洞窟",
        time: "5-7時間",
        km: "8km",
      },
      {
        day: "7",
        start: "第三洞窟",
        overnight: "学校小屋",
        time: "4-5時間",
        km: "5km",
      },
      {
        day: "8",
        start: "スクールハット",
        summit: "ウフルピーク",
        overnight: "ムウェカキャンプ",
        time: "6-8時間 / 4-6時間",
        km: "6km / 12km",
      },
      {
        day: "9",
        start: "ムウェカキャンプ",
        finish: "ムウェカゲート",
        time: "3-4時間",
        km: "10km",
      },
    ],
  },
  {
    key: "rongai",
    no: "06",
    name: "ロンガイルート",
    alias: "北側アプローチ",
    metaTags: ["6–7日", "テント泊", "中", "少ない"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "ケニア側に近い北側から登る唯一のルート。傾斜が比較的緩やかで、静かな雰囲気。",
    detail:
      "キリマンジャロを北から登る唯一のルート。混雑が少なく、他ルートより傾斜も緩やかで、比較的静かに歩きやすい。",
    pros: ["北側からの唯一のルート", "混雑が少ない", "傾斜が比較的緩やか"],
    cons: ["景観の変化はやや少なめ"],
    bestFor: ["静かな登山", "北側から登りたい", "傾斜ゆるめ希望"],
    mapPath:
      "M 815 200 C 782 212 747 233 712 263 C 678 293 650 309 621 316 C 604 320 592 310 586 284 C 610 310 638 344 657 395 C 672 436 682 486 692 537 C 701 563 723 572 804 572",
    itinerary: [
      {
        day: "1",
        start: "ロンガイ門",
        overnight: "シンバキャンプ",
        time: "3-4時間",
        km: "8km",
      },
      {
        day: "2",
        start: "シンバキャンプ",
        stop: "第2洞窟",
        overnight: "キケレワキャンプ",
        time: "3-4時間 / 3-4時間",
        km: "6km / 6km",
      },
      {
        day: "3",
        start: "キケレワキャンプ",
        overnight: "マウェンジ・ターン",
        time: "3-4時間",
        km: "5km",
      },
      {
        day: "4",
        start: "マウェンジ・ターン",
        overnight: "キボキャンプ",
        time: "5-6時間",
        km: "8km",
      },
      {
        day: "5",
        start: "キボキャンプ",
        summit: "ウフルピーク",
        overnight: "ホロンボキャンプ",
        time: "6-8時間 / 4-5時間",
        km: "6km / 16km",
      },
      {
        day: "6",
        start: "ホロンボキャンプ",
        finish: "マラング門",
        time: "5-7時間",
        km: "20km",
      },
    ],
  },
  {
    key: "umbwe",
    no: "07",
    name: "ウンブウェルート",
    alias: "最難関ルート",
    metaTags: ["5–6日", "テント泊", "高い", "かなり少ない"],
    metaLabels: ["日数目安", "宿泊", "難易度", "混雑感"],
    summary:
      "急登で一気に高度を上げる、最も過酷なルート。静かだが、経験者向け。",
    detail:
      "急激に高度を上げるため順応が難しく、登頂率も低め。そのぶん人が少なく、経験がある人には挑戦的な選択肢になる。",
    pros: ["人が少ない", "とてもダイレクト"],
    cons: ["急登", "順応が難しい", "難易度が高い"],
    bestFor: ["経験者", "静かなルート", "急登OK"],
    mapPath:
      "M 318 620 C 327 572 340 522 357 476 C 376 425 407 390 446 365 C 478 345 521 345 549 327 C 568 315 580 301 586 284 C 600 309 613 338 624 374 C 638 418 647 470 654 523 C 660 566 666 596 676 626",
    itinerary: [
      {
        day: "1",
        start: "ウンブウェゲート",
        overnight: "ウンブウェキャンプ",
        time: "5-7時間",
        km: "11km",
      },
      {
        day: "2",
        start: "ウンブウェキャンプ",
        overnight: "バランコキャンプ",
        time: "4-5時間",
        km: "6km",
      },
      {
        day: "3",
        start: "バランコキャンプ",
        overnight: "カランガキャンプ",
        time: "4-5時間",
        km: "5km",
      },
      {
        day: "4",
        start: "カランガキャンプ",
        overnight: "バラフキャンプ",
        time: "4-5時間",
        km: "4km",
      },
      {
        day: "5",
        start: "バラフキャンプ",
        summit: "ウフルピーク",
        overnight: "ムウェカキャンプ",
        time: "7-8時間 / 4-6時間",
        km: "5km / 12km",
      },
      {
        day: "6",
        start: "ムウェカキャンプ",
        finish: "ムウェカゲート",
        time: "3-4時間",
        km: "10km",
      },
    ],
  },
];

function ReadMore({ text, previewChars = 108 }) {
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
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          続きを読む
        </button>
      ) : (
        <button
          type="button"
          className={styles.readMoreInlineClose}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
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

function MetaTags({ labels = [], values = [] }) {
  return (
    <div className={styles.metaTags}>
      {values.map((value, index) => (
        <div key={`${labels[index]}-${value}`} className={styles.metaTag}>
          <span className={styles.metaTagLabel}>{labels[index]}</span>
          <span className={styles.metaTagValue}>{value}</span>
        </div>
      ))}
    </div>
  );
}

function ItineraryTimelineRow({ item }) {
  const steps = [];

  if (item.start) steps.push({ label: "出発", value: item.start });
  if (item.stop) steps.push({ label: "立ち寄り", value: item.stop });
  if (item.summit) steps.push({ label: "山頂", value: item.summit });
  if (item.overnight) steps.push({ label: "宿泊", value: item.overnight });
  if (item.finish) steps.push({ label: "下山", value: item.finish });

  return (
    <div className={styles.timelineRow}>
      <div className={styles.timelineDay}>Day {item.day}</div>

      <div className={styles.timelineBody}>
        <div className={styles.timelineTrack}>
          {steps.map((step, idx) => (
            <div
              key={`${item.day}-${step.label}-${step.value}`}
              className={styles.timelineStep}
            >
              <div className={styles.timelineDotWrap}>
                <span className={styles.timelineDot} />
                {idx !== steps.length - 1 ? (
                  <span className={styles.timelineLine} />
                ) : null}
              </div>

              <div className={styles.timelineLabelCol}>{step.label}</div>
              <div className={styles.timelineValueCol}>{step.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.timelineMeta}>
          <span>
            <FiClock /> {item.time}
          </span>
          <span>
            <FiTrendingUp /> {item.km}
          </span>
        </div>
      </div>
    </div>
  );
}

function ItineraryAccordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        className={styles.accordionButton}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        aria-expanded={open}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <FiChevronDown
          className={`${styles.accordionIcon} ${open ? styles.accordionIconOpen : ""}`}
        />
      </button>

      <div className={`${styles.accordionPanel} ${open ? styles.accordionPanelOpen : ""}`}>
        <div className={styles.timelineList}>
          {items.map((item) => (
            <ItineraryTimelineRow key={item.day} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Kilimanjaro() {
  const [activeKey, setActiveKey] = useState("lemosho");

  const active = useMemo(
    () => ROUTES.find((route) => route.key === activeKey) ?? ROUTES[0],
    [activeKey]
  );

  const scrollerRef = useRef(null);
  const cardRefs = useRef({});
  const suppressScrollSyncRef = useRef(false);

  const openInMapsUrl = "https://www.google.com/maps?q=Mt+Kilimanjaro";

  const updateArrows = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const max = scroller.scrollWidth - scroller.clientWidth;
    const x = scroller.scrollLeft;
    const leftBtn = document.querySelector(`.${styles.navLeft}`);
    const rightBtn = document.querySelector(`.${styles.navRight}`);
    if (leftBtn) leftBtn.disabled = x <= 2;
    if (rightBtn) rightBtn.disabled = x >= max - 2;
  };

  const goToRoute = (key, behavior = "auto") => {
    setActiveKey(key);

    const scroller = scrollerRef.current;
    const el = cardRefs.current[key];
    if (!scroller || !el) return;

    suppressScrollSyncRef.current = true;

    const left = el.offsetLeft;
    scroller.scrollTo({
      left,
      behavior,
    });

    window.setTimeout(() => {
      suppressScrollSyncRef.current = false;
      updateArrows();
    }, behavior === "smooth" ? 350 : 50);
  };

  const scrollByDir = (dir) => {
    const currentIndex = ROUTES.findIndex((route) => route.key === activeKey);
    const nextIndex = Math.max(0, Math.min(ROUTES.length - 1, currentIndex + dir));
    const nextKey = ROUTES[nextIndex]?.key;
    if (!nextKey) return;
    goToRoute(nextKey, "smooth");
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    const onScroll = () => {
      if (suppressScrollSyncRef.current) return;

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

        if (bestKey && bestKey !== activeKey) {
          setActiveKey(bestKey);
        }

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const activeEl = cardRefs.current[activeKey];
    if (!activeEl) return;

    if (Math.abs(scroller.scrollLeft - activeEl.offsetLeft) > 4) {
      goToRoute(activeKey, "auto");
    }
  }, []);

  return (
    <section className={styles.section} aria-labelledby="kilimanjaro-routes-title">
      <div className="inner">
        <div className="head">
          <div className="kicker">Routes</div>
          <h2 id="kilimanjaro-routes-title" className="title">
            キリマンジャロ 7ルート比較
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.mapWrap}>
              <div className={styles.mapCard}>
                <div className={styles.mapTop}>
                  <div className={styles.mapHeading}>
                    <div className={styles.mapKicker}>Route Map</div>
                    <h3 className={styles.mapTitle}>{active.name}</h3>
                    <p className={styles.mapSub}>{active.alias}</p>
                  </div>

                  <a
                    className={styles.openLink}
                    href={openInMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                    <span>地図を開く</span>
                  </a>
                </div>

                <div className={styles.mapFrame}>
                  <iframe
                    title="Mount Kilimanjaro (Google Maps Embed)"
                    src={MAP_IFRAME_SRC}
                    className={styles.iframe}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  <svg
                    className={styles.overlay}
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="none"
                    aria-label="キリマンジャロ主要ルート"
                  >
                    <g className={styles.summit}>
                      <circle cx="586" cy="284" r="8" />
                      <text x="586" y="314" textAnchor="middle">
                        UHURU PEAK
                      </text>
                    </g>

                    {ROUTES.map((route) => (
                      <g key={route.key}>
                        <path
                          d={route.mapPath}
                          className={styles.routePath}
                          data-active={route.key === activeKey}
                          onClick={() => goToRoute(route.key, "auto")}
                        />
                        <path
                          d={route.mapPath}
                          className={styles.routeHit}
                          onClick={() => goToRoute(route.key, "auto")}
                        />
                      </g>
                    ))}
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
                      onClick={() => goToRoute(route.key, "auto")}
                    >
                      <span className={styles.routeSwitchNo}>{route.no}</span>
                      <span className={styles.routeSwitchName}>{route.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.carousel} aria-label="Kilimanjaro routes carousel">
              <button
                type="button"
                className={`${styles.navArrow} ${styles.navLeft}`}
                onClick={() => scrollByDir(-1)}
                aria-label="前へ"
              >
                ‹
              </button>

              <button
                type="button"
                className={`${styles.navArrow} ${styles.navRight}`}
                onClick={() => scrollByDir(1)}
                aria-label="次へ"
              >
                ›
              </button>

              <div ref={scrollerRef} className={styles.scroller}>
                {ROUTES.map((route) => {
                  const isActive = route.key === activeKey;

                  return (
                    <article
                      key={route.key}
                      ref={(el) => {
                        if (el) cardRefs.current[route.key] = el;
                      }}
                      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                      aria-label={`${route.no}. ${route.name}`}
                    >
                      <div className={styles.cardTop}>
                        <div className={styles.badge}>{route.no}</div>
                        <div>
                          <div className={styles.name}>{route.name}</div>
                          <div className={styles.alias}>{route.alias}</div>
                          <div className={styles.short}>{route.summary}</div>
                        </div>
                      </div>

                      <MetaTags labels={route.metaLabels} values={route.metaTags} />

                      <ReadMore text={route.detail} />

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

                      <ItineraryAccordion
                        title={`参考日程（${route.name}）`}
                        items={route.itinerary}
                      />
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