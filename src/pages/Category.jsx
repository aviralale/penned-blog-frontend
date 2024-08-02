import React from "react";
import Post from "../components/Post";

export default function Category() {
  return (
    <div className="flex justify-between gap-8 mt-10">
      <div>
        <div className="w-1/4">
          <h1 className="text-9xl ThunderLC">SCI-</h1>
          <h1 className="text-9xl ThunderLC">ENCE</h1>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31"
            alt=""
            className="aspect-[9/16] w-96 object-cover"
          />
        </div>
      </div>
      <div className="w-2/4 flex gap-2 flex-col">
        <div className="flex flex-col gap-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1475906089153-644d9452ce87"
              alt=""
              className="aspect-square object-cover"
            />
          </div>
        </div>
        <div className="flex">
          <p className="px-2 py-1 rounded-full border border-black">
            AUG 02, 2022
          </p>
        </div>
        <div className="">
          <h1 className="text-7xl ThunderLC">
            The Mysteries of Space Exploration
          </h1>
          <p>
            <p className="mt-2">
              Written by <b>Aviral Ale</b>
            </p>
          </p>
        </div>
      </div>
      <div className="w-1/4">
        <div className="">
          <h1 className="text-7xl ThunderLC">LATEST</h1>
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <>
                <div key={item} className="flex gap-6 ">
                  <Post imgHeight={8} textColor="black" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
