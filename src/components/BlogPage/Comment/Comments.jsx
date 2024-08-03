import Comment from "./Comment";
import { individualBlog } from "../../../data/individualBlog";

export default function Comments() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Comments <span>(70)</span>
      </h1>
      <div className="overflow-y-auto h-96">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <Comment />
          </div>
        ))}
      </div>

      <div>
        <textarea
          className="w-full mt-4 resize-none h-24 bg-transparent border border-black hover:outline-none active:outline-none focus:outline-none p-2"
          placeholder={`Write your thought about this blog by ${individualBlog.blog.author.name}`}
        ></textarea>
        <button
          className="bg-custom-orange text-white filter active:saturate-200 hover:saturate-200 w-full p-2 transition
        duration-200 ease-in-out mt-1"
        >
          Comment
        </button>
      </div>
    </div>
  );
}
