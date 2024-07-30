import { Link } from "react-router-dom";
import { ArrowUpRight03Icon } from "../../assets/icons/Icons";

export default function BestOfMonth() {
  return (
    <div className="flex flex-col mb-16">
      <h1 className="text-center text-9xl uppercase font-bold">
        Best of month
      </h1>
      <ul className="flex justify-between border  border-black">
        <Link className="py-2 w-full text-center text-4xl hover:bg-black hover:text-custom-text-dark">
          11.10.2004
        </Link>
        <Link className="py-2 w-full text-center text-4xl hover:bg-black hover:text-custom-text-dark">
          10.11.2004
        </Link>
        <Link className="py-2 w-full text-center text-4xl hover:bg-black hover:text-custom-text-dark">
          11.10.2004
        </Link>
        <Link className="py-2 w-full text-center text-4xl hover:bg-black hover:text-custom-text-dark">
          10.11.2004
        </Link>
        <Link className="py-2 w-full text-center text-4xl hover:bg-black hover:text-custom-text-dark">
          11.10.2004
        </Link>
        <Link className="py-2 w-full justify-center text-4xl border-l border-black hover:bg-black group hover:text-custom-orange flex gap-1">
          VIEW ALL{" "}
          <ArrowUpRight03Icon className="group-hover:text-custom-orange" />
        </Link>
      </ul>
      <div className="w-full h-[60vh] mt-8 flex justify-center ">
        <div className="flex w-[90vw] gap-2 justify-center ">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover h-full aspect-square"
              alt=""
            />
          </div>
          <div className="flex">
            <div className="flex flex-col gap-8 justify-center bg-custom-bg-dark px-8">
              <h2 className="uppercase text-4xl text-custom-text-dark">
                11.10.2004
              </h2>
              <div>
                <h1 className="text-8xl text-custom-text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <p className="text-custom-text-dark">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  beatae ipsam eaque! Maxime, commodi.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <button className="text-5xl text-custom-orange transition-all duration-200 ease font-bold hover:bg-custom-orange hover:text-white">
                  READ MORE
                </button>
              </div>
            </div>
            <h1 className="bg-custom-orange vertical-rl text-2xl pl-4 pr-3 text-nowrap overflow-hidden">
              ● AVIRAL ALE ● AVIRAL ALE ● AVIRAL ALE ● AVIRAL ALE ● AVIRAL ALE ●
              AVIRAL ALE ● AVIRAL ALE ● AVIRAL ALE ● AVIRAL ALE ●
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
