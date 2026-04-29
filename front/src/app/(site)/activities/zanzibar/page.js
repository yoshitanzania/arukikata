
import ActivityKV from "@/components/ActivityKV";
import ActivityLead from "@/components/ActivityLead";
import ActivityIntro from "@/components/ActivitiyIntro";
import AppealSection from "./sections/AppealSection";
import StoneTownSection from "./sections/StoneTownSection";
import BeachAreasSection from "./sections/BeachAreasSection";
import StayModelSection from "./sections/StayModelSection";


export default function Page() {
  return (
    <main className="bg" data-page="zanjibar">

      <ActivityKV
        imgSrc="/images/zanjibar/kv.webp"
        imgAlt="Tanzania safari key visual"
        lines={[
          { text: "海のきらめきの中で", offset: "high", delay: 800, white: true },
          { text: "ザンジバルの歴史を", offset: "mid", delay: 1500, white: true },
          { text: "忘れない旅", offset: "low", delay: 2000, white: true },
        ]}
        scrollStyle="white"
      />
      <ActivityIntro
        kicker="Zanzibar"
        title="ザンジバル島"
        accent="インド洋に浮かぶ、癒しと異国情緒の楽園"
        lead="タンザニア沖のインド洋に浮かぶザンジバル島は、透き通る海と白い砂浜、そして歴史あるストーンタウンの街並みが魅力のリゾートアイランドです。のんびりとしたビーチ滞在を楽しみたい方はもちろん、異国情緒あふれる街歩きやスパイス農園など、自然と文化の両方を味わいたい方にもおすすめです。タンザニア旅行のトリセツでは、現地事情を踏まえながら、滞在日数や目的に合わせた無理のないザンジバル旅行プランづくりをサポートしています。"
        items={[
          {
            label: "魅力",
            value: "白砂のビーチとエメラルドブルーの海",
          },
          {
            label: "楽しみ方",
            value: "街歩き・リゾート滞在・スパイスツアー",
          },
          {
            label: "おすすめ",
            value: "ゆったり過ごしたい人やハネムーンにも最適",
          },
        ]}
      />
      
      <ActivityLead
        eyebrow="Zanzibar"
        title="本土とは違う時間が流れる"
        lines={[
          "ザンジバルは、タンザニア本土とはまったく異なる表情をもつ島です。",
          "白い砂浜とターコイズブルーの海、",
          "アラブ・アフリカ・ヨーロッパ文化が交差する歴史ある街並み。",
          "サファリやキリマンジャロ登山の後に訪れることで、",
          "旅全体に「余白」と「余韻」を加えてくれる場所でもあります。",
        ]}
        emphasis={["余白", "余韻"]}
        autoplay={true}
        intervalMs={1100}   // 速ければ 1400〜1600 に
        loop={false}
      />
      <AppealSection />
      <StoneTownSection />
      <BeachAreasSection />
      <StayModelSection />
    </main>
  );
}
