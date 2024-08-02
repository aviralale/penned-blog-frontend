import AllTimeBest from "../components/Home/Sections/AllTimeBest/AllTimeBest";
import BestOfMonth from "../components/Home/Sections/BestOfMonth/BestOfMonth";
import BlogByAuthor from "../components/Home/Sections/BlogByAuthor/BlogByAuthor";
import Hero from "../components/Home/Sections/Hero/Hero";
import Popular from "../components/Home/Sections/Popular/Popular";
import Recent from "../components/Home/Sections/Recent/Recent";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-16">
      <Hero />
      <Popular />
      <Recent />
      <BestOfMonth />
      <BlogByAuthor />
      <AllTimeBest />
    </div>
  );
}
