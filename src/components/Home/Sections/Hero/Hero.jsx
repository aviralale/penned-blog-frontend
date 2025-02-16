import HeroImg from "../../../../assets/images/Hero.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col place-items-center relative w-full">
      <div className="relative flex">
        <h1 className="text-[40rem] text-custom-orange ThunderHC font-bold">
          PENNED
        </h1>
        <h1 className="text-5xl mt-4 text-custom-orange ThunderLC font-bold">
          BLOG
        </h1>
      </div>
      <div className="-z-20 w-full transform -translate-y-1/4">
        <img className="w-full h-[80vh] object-cover" src={HeroImg} alt="" />
      </div>
    </div>
  );
}
