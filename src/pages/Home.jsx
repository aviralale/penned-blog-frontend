import BestOfMonth from "../components/Home/BestOfMonth";
import Hero from "../components/Home/Hero";
import Popular from "../components/Home/Popular";
import Recent from "../components/Home/Recent";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-16">
      <Hero />
      <Popular />
      <Recent />
      <BestOfMonth />
    </div>
  );
}
