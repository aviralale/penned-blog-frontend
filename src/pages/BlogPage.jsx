import React from "react";
import { individualBlog } from "../data/individualBlog";
import {
  ArrowLeft02Icon,
  Facebook02Icon,
  InstagramIcon,
  NewTwitterIcon,
  Share08Icon,
} from "../assets/icons/Icons";

export default function BlogPage() {
  return (
    <div className="px-2 flex flex-col gap-10 justify-center items-center my-5 w-[calc(100vw-1rem)]">
      <div className=" w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ArrowLeft02Icon width={30} height={30} />
          <h1 className="text-3xl">{individualBlog.blog.category}</h1>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="ThunderLC">SHARE</h1>
          <ul className="flex items-center gap-1">
            <a className="rounded-full border border-black p-2">
              <Share08Icon width={16} height={16} />
            </a>
            <a className="rounded-full border border-black p-2">
              <Facebook02Icon width={16} height={16} />
            </a>
            <a className="rounded-full border border-black p-2">
              <NewTwitterIcon width={16} height={16} />
            </a>
            <a className="rounded-full border border-black p-2">
              <InstagramIcon width={16} height={16} />
            </a>
          </ul>
        </div>
      </div>
      <div className="quote1 border-b-2 border-t-2 border-black py-7">
        <p className="text-3xl italic">
          "{individualBlog.blog.quotes[0].text}"
        </p>
        <span className="italic">- {individualBlog.blog.quotes[0].author}</span>
      </div>
      <div className="intro flex gap-2 justify-between items-center">
        <div className="w-2/5">
          <img
            src={individualBlog.blog.photos[0].url}
            alt={individualBlog.blog.photos[0].description}
            className="aspect-square w-3/4 object-cover"
          />
        </div>
        <div className="w-3/5">
          <h1 className="text-9xl ThunderLC">{individualBlog.blog.title}</h1>
          <div className="quote1 border-b-2 border-t-2 border-black py-7">
            <p className="text-3xl italic">
              "{individualBlog.blog.quotes[1].text}"
            </p>
            <span className="italic">
              - {individualBlog.blog.quotes[1].author}
            </span>
          </div>
        </div>
      </div>
      <div className="description flex w-full justify-between">
        <div className="flex flex-col w-2/5">
          <div className="flex items-center gap-4">
            <button className="px-2 rounded-full border border-black">
              {individualBlog.blog.category}
            </button>
            <p>{individualBlog.blog.date}</p>
          </div>
          <div>
            <p>
              <span className="text-gray-600">Written By</span> |{" "}
              <b className="uppercase">{individualBlog.blog.author.name}</b>
            </p>
          </div>
        </div>
        <div className="w-4/5">
          <p>{individualBlog.blog.content}</p>
        </div>
      </div>
      <div className="flex flex-col photogrid w-full">
        <div className="flex">
          <img
            src={individualBlog.blog.photos[1].url}
            alt=""
            className="w-1/2 border-2 border-custom-orange"
          />
          <img
            src={individualBlog.blog.photos[2].url}
            alt=""
            className="w-1/2 border-2 border-custom-orange"
          />
        </div>
        <div className="flex">
          <img
            src={individualBlog.blog.photos[2].url}
            alt=""
            className="w-1/2 border-2 border-custom-orange"
          />
          <img
            src={individualBlog.blog.photos[1].url}
            alt=""
            className="w-1/2 border-2 border-custom-orange"
          />
        </div>
      </div>
      <div className="quote1 border-b-2 border-t-2 border-black py-7">
        <p className="text-3xl italic">
          "{individualBlog.blog.quotes[2].text}"
        </p>
        <span className="italic">- {individualBlog.blog.quotes[2].author}</span>
      </div>
    </div>
  );
}
