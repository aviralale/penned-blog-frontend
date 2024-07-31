import AllTimeBest from "../components/Home/AllTimeBest";
import BestOfMonth from "../components/Home/BestOfMonth";
import BlogByAuthor from "../components/Home/BlogByAuthor";
import Hero from "../components/Home/Hero";
import Popular from "../components/Home/Popular";
import Recent from "../components/Home/Recent";
import Subscribe from "../components/Home/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-16">
      <Hero />
      <Popular />
      <Recent />
      <BestOfMonth />
      <BlogByAuthor />
      <AllTimeBest />
      <Subscribe />
    </div>
  );
}
