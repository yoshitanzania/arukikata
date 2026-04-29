
import ActivityKV from "@/components/ActivityKV";
import ActivityIntro from "@/components/ActivitiyIntro";
import Kilimanjaro from "./sections/Kilimanjaro";
import KilimanjaroSchedule from "./sections/KilimanjaroSchedule";
import Meru from "./sections/Meru";

export default function Page() {
  return (
    <main className="bg" data-page="trekking">

      <ActivityKV
        imgSrc="/images/trekking/kv.webp"
        imgAlt="Tanzania safari key visual"
        lines={[
          { text: "アフリカ最高峰", offset: "high", delay: 800, white: true },
          { text: "キリマンジャロへ", offset: "mid", delay: 1500, white: true },
          { text: "挑む旅", offset: "low", delay: 2000, white: true },
        ]}
        scrollStyle="white"
      />
      <ActivityIntro
            kicker="Kilimanjaro"
            title="キリマンジャロ登山"
            accent="アフリカ最高峰を、無理なく安全に"
            lead="アフリカ最高峰（単独峰としては世界最高峰）であるキリマンジャロ（5,895m）は、技術的な登攀を必要としないことから、適切な準備と計画を行えば、登山経験が多くない方でも挑戦できる山として知られています。一方で、高度順応やルート選び、日程設計を誤ると、「想像以上にきつかった」「体調不良で途中下山になった」というケースも少なくありません。タンザニア旅行のトリセツでは、現地事情を理解した日本人の視点で、体力・日数・目的に合わせた無理のないキリマンジャロ登山計画づくりをサポートしています。"
            items={[
              {
                label: "特徴",
                value: "技術的なロープワークは不要",
              },
              {
                label: "登山環境",
                value: "登山道・山小屋（またはテント）が整備されている",
              },
              {
                label: "成功の鍵",
                value: "高度順応 × 日程 × ルート選び",
              },
            ]}
          />
      <Kilimanjaro />

      <Meru />
    </main>
  );
}
