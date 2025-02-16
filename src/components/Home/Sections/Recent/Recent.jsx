import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight03Icon } from "../../../../assets/icons/Icons";
import Post from "../../../Post";

export default function Recent() {
  return (
    <div className="bg-custom-bg-dark pb-16">
      <div className="mx-6 ">
        <div className="flex justify-between items-baseline mb-6">
          <h1 className="text-8xl text-custom-text-dark mt-4 ThunderHC font-extrabold">
            RECENTS
          </h1>
          <Link
            to="/all"
            className="text-custom-text-dark text-3xl hover:underline group flex gap-1 items-center"
          >
            VIEW ALL{" "}
            <ArrowUpRight03Icon
              width={40}
              height={40}
              className="group-hover:text-custom-orange"
              color="#E3E3E3"
            />
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <>
                <div key={item} className="flex ">
                  <Post imgHeight={24} hasImages />
                </div>
              </>
            ))}
          </div>
          <Link className="flex flex-col gap-8 flex-1">
            <div className=" h-full">
              <img
                src="https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover w-full aspect-[3/4]"
                alt=""
              />
              <div className="flex gap-6 mt-8">
                <button className="px-4 uppercase rounded-full border text-custom-text-dark border-custom-text-dark hover:bg-custom-text-dark hover:text-custom-bg-dark">
                  Science
                </button>
                <span className="text-custom-text-dark">OCT 11, 2004</span>
              </div>
            </div>
            <h1 className="text-5xl text-custom-text-dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              odit corrupti nesciunt!
            </h1>
            <p className=" text-custom-text-dark">
              Written by <b>Aviral Ale</b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
