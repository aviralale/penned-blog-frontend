import { individualBlog } from "../../../../data/individualBlog";
import Reply from "./Reply";

export default function Replies() {
  return (
    <div className="mx-10 border-t border-b border-b-gray-600">
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <Reply />
        </div>
      ))}
      <div>
        <textarea
          className="w-full mt-4 resize-none h-24 bg-transparent border border-black hover:outline-none active:outline-none focus:outline-none p-2"
          placeholder={`Discuss thoughts about this blog by ${individualBlog.blog.author.name}`}
        ></textarea>
        <button
          className="bg-custom-orange text-white filter active:saturate-200 hover:saturate-200 w-full p-2 transition
        duration-200 ease-in-out mt-1"
        >
          Reply
        </button>
      </div>
    </div>
  );
}
