import React from "react";

export default function Post(props) {
  return (
    <>
      <div className=" h-full flex">
        <img
          src={`https://images.unsplash.com/photo-1722104628969-6c7961f69b8f`}
          className={`object-cover h-${
            props.imgHeight ? props.imgHeight : 72
          } aspect-square`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <button
            className={`px-4 uppercase rounded-full border text-${
              props.textColor ? props.textColor : "custom-text-dark"
            } border-${
              props.textColor ? props.textColor : "custom-text-dark"
            } hover:bg-${
              props.textColor ? props.textColor : "custom-text-dark"
            } hover:text-custom-bg-dark`}
          >
            Science
          </button>
          <span
            className={`text-${
              props.textColor ? props.textColor : "custom-text-dark"
            }`}
          >
            OCT 11, 2004
          </span>
        </div>
        <div>
          <div>
            <h1
              className={`text-5xl text-${
                props.textColor ? props.textColor : "custom-text-dark"
              } line-clamp-4`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              tempore dolore aliquid!
            </h1>
          </div>
          <div>
            <p
              className={` text-${
                props.textColor ? props.textColor : "custom-text-dark"
              }`}
            >
              Written by <b>Aviral Ale</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
