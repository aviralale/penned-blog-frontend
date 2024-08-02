import React from "react";
import Photo1 from "../../../../assets/images/Photo1.jpg";
import { Link } from "react-router-dom";
export default function AllTimeBest() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-16">
        <h1 className="text-center ThunderHC text-9xl uppercase font-bold">
          All time best
        </h1>
      </div>
      <div className="flex gap-10 mx-40">
        <Link className="flex flex-1 flex-col gap-2">
          <img src={Photo1} alt="" className="aspect-[3/4] object-cover" />
          <h1 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            repellendus nam?
          </h1>
        </Link>
        <Link className="flex flex-1 flex-col gap-2">
          <img
            src="https://images.unsplash.com/photo-1722078141103-70ca6f653b76"
            alt=""
            className="aspect-[3/4] object-cover"
          />
          <h1 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            repellendus nam?
          </h1>
        </Link>
        <Link className="flex flex-1 flex-col gap-2">
          <img
            src="https://images.unsplash.com/photo-1722218530083-06fa15ca2e31"
            alt=""
            className="aspect-[3/4] object-cover"
          />
          <h1 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            repellendus nam?
          </h1>
        </Link>
      </div>
      <div className="mt-8">
        <button className="text-6xl uppercase text-custom-orange transition-all duration-200 ease font-bold hover:bg-custom-orange hover:text-white">
          View ALL
        </button>
      </div>
    </div>
  );
}
