// src/app/page.js
import Image from "next/image"
import Link from "next/link"
import '@/app/(site)/top.css'
import KV from "./sections/KV"
import About from "./sections/About"
import Service from "./sections/Service"
import Contact from "./sections/Contact"
import Gallery from './sections/Gallery'



const TRUST_POINTS = [
  { title: "現地を知る日本人が一緒に整理する", desc: "最初のご相談からご出発まで日本語でサポート。治安や移動、体調面の不安も含めて「よく分からない」を一つずつ整理して進める。" },
  { title: "比較できるから納得して選べる", desc: "特定の商品を売るのではなく、複数の信頼できる現地ツアー会社を比較して提案。違いを理解したうえで選べる状態をつくる。" },
  { title: "進め方と費用を明確にする", desc: "ご相談・比較検討の段階は無料。コーディネート料や支払い方法、キャンセル時の取り扱いなど事前に分かりやすく説明する。" },
];



export default function HomePage() {
  return (
    <main className="bg">
        
        <KV />
        
        <Service />
        <About/>
        <Contact />
        <Gallery />


{/*
        <section className="trust2 containerUnified" id="trust">
          <div className="trust2Inner">
            <div className="sectionHead">
              <div className="dualTitle">
                <div className="dualTitleBack" aria-hidden="true">RELIABILITY</div>
                <h2 className="dualTitleMain">安心してご相談いただくために</h2>
              </div>
              {/*}
              <p className="actsLead">
                サファリやキリマンジャロ登山、ザンジバル滞在など。<br className="brSP" />
                旅の目的に合わせて、無理のない選択肢を整理する。
              </p>
            
            </div>
            <div className="trust2Grid">
              <div className="trust2Cards">
                <article className="trust2Card">
                  <div className="trust2Meta">
                    <span className="trust2Num">01</span>
                    <span className="trust2Key">日本語で伴走</span>
                  </div>
                  <h3 className="trust2Title">現地を知る日本人が一緒に整理</h3>
                  <p className="trust2Text">
                    治安・移動・体調面も含めて「よく分からない」を一つずつ解像する。
                  </p>
                </article>

                <article className="trust2Card">
                  <div className="trust2Meta">
                    <span className="trust2Num">02</span>
                    <span className="trust2Key">比較できる提案</span>
                  </div>
                  <h3 className="trust2Title">複数社を比較して納得して選べる</h3>
                  <p className="trust2Text">
                    特定の商品を売らず、信頼できる現地ツアー会社を並べて違いを示す。
                  </p>
                </article>

                <article className="trust2Card">
                  <div className="trust2Meta">
                    <span className="trust2Num">03</span>
                    <span className="trust2Key">透明性</span>
                  </div>
                  <h3 className="trust2Title">進め方と費用を事前に明確に</h3>
                  <p className="trust2Text">
                    比較検討までは無料。料金・支払い・キャンセルも先に伝える。
                  </p>
                </article>

                 <div className="pageLinks">
                    <Link href="/reasons" className="pageLinkPrimary">安心の理由を詳しく見る<span aria-hidden="true">→</span></Link>
                 </div>
              </div>

              <div className="trust2Media">
                <div className="trust2MediaInner">
                  <Image
                    src={IMAGES.reliability}
                    alt="打ち合わせの雰囲気"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="trust2Img"
                  />
                  <div className="trust2Shade" />
                </div>

              </div>
            </div>
          </div>
        </section>
  */}


        
    </main>
  );
}
