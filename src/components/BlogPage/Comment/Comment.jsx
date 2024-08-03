import React, { useState } from "react";
import { individualBlog } from "../../../data/individualBlog";
import CommentAuthorImg from "../../../assets/images/author.png";
import { Link } from "react-router-dom";
import Replies from "./Replies/Replies";

export default function Comment() {
  const [showReplies, setShowReplies] = useState(false);

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="border-t border-t-black border-b border-b-black p-4 w-[70vw]">
      <div className="flex gap-2 ">
        <div>
          <img
            src={CommentAuthorImg}
            alt=""
            className="w-10 aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Link className="text-lg ">{individualBlog.blog.author.name}</Link>
          <span className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odio
            rerum culpa, exercitationem dolorum saepe, quaerat suscipit enim,
            magni facilis neque deserunt impedit?
          </span>
        </div>
      </div>
      <button className="text-sm" onClick={handleToggleReplies}>
        {showReplies ? "Hide Replies" : "Show Replies"}
      </button>
      {showReplies && <Replies />}
    </div>
  );
}
