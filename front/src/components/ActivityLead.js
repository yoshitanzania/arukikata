"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ActivityLead.module.css";

// ✅ SSR無効で読み込み（Next.jsで一番安全）
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const PageCover = React.forwardRef(function PageCover(props, ref) {
  return (
    <div className={`${styles.page} ${styles.pageCover}`} ref={ref} data-density="hard">
      <div className={styles.pageContent}>
        <h2 className={styles.coverTitle}>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.pageContent}>
        <div className={styles.pageHeader}>Page header - {props.number}</div>

        {/* 画像を使いたいなら props.image を渡す */}
        <div className={styles.pageImage}>
          {props.image ? <img className={styles.img} src={props.image} alt="" /> : null}
        </div>

        <div className={styles.pageText}>{props.children}</div>
        <div className={styles.pageFooter}>{props.number + 1}</div>
      </div>
    </div>
  );
});

export default function ActivityLead() {
  const flipBookRef = useRef(null);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [state, setStateValue] = useState("-");
  const [orientation, setOrientation] = useState("-");

  const nextButtonClick = () => {
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const prevButtonClick = () => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  };

  const onFlip = (e) => {
    setPage(e.data);
  };

  const onChangeState = (e) => {
    // e.data: "read" | "fold_corner" | "user_fold" など
    setStateValue(e.data);
  };

  const onChangeOrientation = (e) => {
    // e.data: "portrait" | "landscape"
    setOrientation(e.data);
  };

  // ✅ マウント後に総ページ数取得
  useEffect(() => {
    const timer = setTimeout(() => {
      const count = flipBookRef.current?.pageFlip()?.getPageCount?.();
      if (typeof count === "number") setTotalPage(count);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrap}>
      <HTMLFlipBook
        width={550}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        height={580}
        minHeight={350}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onFlip}
        onChangeOrientation={onChangeOrientation}
        onChangeState={onChangeState}
        className={styles.demoBook}
        ref={flipBookRef}
      >

        <Page number={1} image="/images/zanjibar/beach.webp">
          ザンジバルは、タンザニア本土とはまったく異なる表情をもつ島です。
          白い砂浜とターコイズブルーの海、
           アラブ・アフリカ・ヨーロッパ文化が交差する歴史ある街並み。
        </Page>
        <Page number={1} image="/images/zanjibar/stone-town.webp">
          サファリやキリマンジャロ登山の後に訪れることで、
          旅全体に「余白」と「余韻」を加えてくれる場所でもあります。
        </Page>
        <Page number={1} image="/images/zanjibar/stone-town.webp">
          サファリやキリマンジャロ登山の後に訪れることで、
          旅全体に「余白」と「余韻」を加えてくれる場所でもあります。
        </Page> 
      

      </HTMLFlipBook>


    </div>
  );
}