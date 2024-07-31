import React from "react";
import AuthorImg from "../../assets/images/author.png";

export default function Subscribe() {
  return (
    <div className="flex h-[80vh] bg-custom-bg-dark text-custom-text-dark">
      <div className="flex flex-col pt-32 justify-between w-3/5 h-full ">
        <div className="p-8">
          <div className="">
            <h1 className="text-[12rem] ThunderLC">SUBSCRIBE</h1>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-[12rem] ThunderLC">NOW</h1>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="h-[6.5rem] text-3xl bg-transparent border-t border-b hover:outline-none active:outline-none focus:outline-none"
                placeholder="E-MAIL ADDRESS"
              />
              <button className="h-[6.5rem] text-3xl px-4  text-custom-orange  bg-custom-orange text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="flex border-t border-t-custom-text-dark border-b border-b-black p-8">
          <div className="w-1/2">
            <h1 className="text-9xl ThunderHC text-custom-orange">PENNED</h1>
          </div>
          <div className="w-1/2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              voluptates tempora tempore assumenda placeat nesciunt consectetur,
              nostrum quas. Facere perspiciatis quidem totam molestiae.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-2/5">
        <img src={AuthorImg} alt="" className="h-full" />
      </div>
    </div>
  );
}
