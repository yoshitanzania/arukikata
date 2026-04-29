
import ActivityKV from "@/components/ActivityKV";
import ActivityIntro from "@/components/ActivitiyIntro";
import Essentials from "./sections/Essentials";
import Places from "./sections/Places";
import PlanExample from "./sections/PlanExample";
export default function Safari() {
  return (
     <main className="bg" data-page="safari">
        <ActivityKV
          imgSrc="/images/safari/kv.webp"
          imgAlt="Tanzania safari key visual"
          lines={[
            { text: "大自然の中で", offset: "high", delay: 800, white: true },
            { text: "動物たちの日常と", offset: "mid", delay: 1500, white: true },
            { text: "出会う旅", offset: "low", delay: 2000, white: true },
          ]}
          scrollStyle="white"
        />
    <ActivityIntro
      kicker="Tanzania Safari"
      title="サファリは、野生動物を探しに行く旅だけでなく"
      accent="自然のリズムを感じに行く旅でもある。"
      lead="Safariはスワヒリ語で「旅」。専用車で草原を走り、野生動物を観察する。でも本当の贅沢は、動物が出た瞬間だけじゃなくて、待っている時間にある。遠くの群れ、車の揺れ、空の広さ——その全部が“体験”になる。"
      items={[
        { label: "基本", value: "専用車で巡る野生動物観察" },
        { label: "魅力", value: "景色・空気・沈黙まで含めて記憶に残る" },
        { label: "コツ", value: "「探す」より「出会う」気持ちで" },
      ]}
      tone="cool"
    />
       <Essentials />
       <Places />
       <PlanExample />
    </main>
   
  );
}
