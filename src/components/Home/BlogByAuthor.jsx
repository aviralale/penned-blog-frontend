import React from "react";
import AuthorImg from "../../assets/images/author.png";
import { NavLink } from "react-router-dom";

export default function BlogByAuthor() {
  const getNavLinkClass = ({ isActive }) =>
    `p-1 rounded-full ${
      isActive ? " bg-custom-orange" : "hover:bg-custom-orange"
    }`;
  return (
    <div className="bg-custom-bg-dark pb-16">
      <div className="mx-6 ">
        <h1 className="text-9xl ThunderHC text-center text-custom-text-dark mt-4 font-extrabold">
          BLOGS <span className="my-8">BY</span> AUTHOR
        </h1>
        <div className="authors flex justify-evenly my-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <NavLink
              className={getNavLinkClass}
              to={`${item == 5 ? "" : `/date${item + 1}`}`}
              key={item}
            >
              <img
                src={AuthorImg}
                alt="author"
                className="w-20 h-20 rounded-full"
              />
            </NavLink>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-3/5">
            <div className="z-10 text-custom-text-dark flex flex-col">
              <h1 className="text-9xl inline-block translate-y-52 font-extrabold">
                AVIRAL
              </h1>
              <h1 className="text-9xl inline-block translate-y-52 italic">
                ALE
              </h1>
              <div>
                <button className="text-2xl translate-y-52 text-custom-orange transition-all duration-200 ease font-bold hover:bg-custom-orange hover:text-white">
                  VIEW MORE
                </button>
              </div>
            </div>
            <img
              src={AuthorImg}
              alt="author"
              className=" aspect-[3/4] object-cover w-[42rem] h-[62rem] transform translate-x-56 -translate-y-72"
            />
          </div>
          <div className=" flex justify-between w-2/5">
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((item) => (
                <>
                  <div key={item} className="flex gap-6">
                    <div className="h-full w-1/4">
                      <img
                        src={`https://images.unsplash.com/photo-1722104628969-6c7961f69b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&item=${item}`}
                        className="object-cover w-72 h-full aspect-[3/4]"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-6 w-3/4">
                      <div className="flex gap-6">
                        <button className="px-4 uppercase rounded-full border text-custom-text-dark border-custom-text-dark hover:bg-custom-text-dark hover:text-custom-bg-dark">
                          Science
                        </button>
                        <span className="text-custom-text-dark">
                          OCT 11, 2004
                        </span>
                      </div>
                      <div>
                        <h1 className="text-5xl text-custom-text-dark">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Suscipit tempore dolore aliquid!
                        </h1>
                      </div>
                      <div>
                        <p className=" text-custom-text-dark">
                          Written by <b>Aviral Ale</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  {item < 3 ? <hr className="p-4 w-full" /> : <></>}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
