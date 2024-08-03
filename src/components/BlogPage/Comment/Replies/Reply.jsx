import React from "react";
import CommentAuthorImg from "../../../../assets/images/author.png";
import { Link } from "react-router-dom";
import { individualBlog } from "../../../../data/individualBlog";

export default function Reply() {
  return (
    <div className="flex gap-2  py-2">
      <div>
        <img
          src={CommentAuthorImg}
          alt=""
          className="w-10 aspect-square rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <Link className="">{individualBlog.blog.author.name}</Link>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odio
          rerum culpa, exercitationem dolorum saepe, quaerat suscipit enim,
          magni facilis neque deserunt impedit?
        </span>
      </div>
    </div>
  );
}
