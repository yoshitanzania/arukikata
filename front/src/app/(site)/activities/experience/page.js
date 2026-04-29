
import ActivityKV from "@/components/ActivityKV";


export default function Page() {
  return (
    <main className="bg" data-page="experience">
      <ActivityKV
        imgSrc="/images/experience/kv.webp"
        imgAlt="Tanzania safari key visual"
        lines={[
          { text: "見るだけでなく", offset: "high", delay: 800, white: true },
          { text: "文化と自然を", offset: "mid", delay: 1500, white: true },
          { text: "体験する旅", offset: "low", delay: 2000, white: true },
        ]}
        scrollStyle="white"
      />

    </main>
  );
}
