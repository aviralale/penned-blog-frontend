import React, { useState } from "react";
import {
  ArrowLeft,
  Share,
  Facebook,
  Twitter,
  Instagram,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

export default function BlogPage() {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const [blog, setBlog] = useState({
    title: "Distant ship, smoke on the horizon",
    category: "Philosophy",
    date: "March 18, 2025",
    content:
      "The sun was setting on the distant horizon, casting long shadows across the water. I stood at the edge of the cliff, watching as a ship slowly made its way across the vast expanse of ocean. A trail of smoke billowed from its stack, a dark smudge against the orange and pink sky. There's something peaceful about watching distant ships. They carry with them stories, people, goods from far-off places, all moving with purpose but appearing, from my vantage point, to barely move at all. Time seems to slow down when you're watching something so far away.",
    author: {
      name: "Aviral Ale",
      avatar: "https://avatars.githubusercontent.com/u/121365480",
    },
    quotes: [
      {
        text: "We're all just ships passing in the night, leaving behind only traces of smoke on the horizon.",
        author: "Aviral Ale",
      },
      {
        text: "The vastness of the ocean puts things in perspective. Problems that seemed insurmountable suddenly appear manageable.",
        author: "Aviral Ale",
      },
      {
        text: "Maybe that's why we're drawn to horizons - they represent possibilities, the unknown, the promise of something new.",
        author: "Aviral Ale",
      },
    ],
    photos: [
      {
        url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
        description: "Ocean horizon with ship",
      },
      {
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        description: "Ocean sunset",
      },
      {
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
        description: "Ship on ocean",
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          name: "Maya Johnson",
          avatar: "/api/placeholder/40/40",
        },
        content:
          "This is beautifully written. I felt like I was standing there on the cliff with you, watching that distant ship.",
        date: "March 19, 2025",
        likes: 3,
      },
      {
        id: 2,
        user: {
          name: "Alex Chen",
          avatar: "/api/placeholder/40/40",
        },
        content:
          "The metaphor of life as a journey across the ocean really resonated with me. We're all just ships passing in the night.",
        date: "March 19, 2025",
        likes: 2,
      },
    ],
    likes: 56,
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const newComment = {
      id: blog.comments.length + 1,
      user: {
        name: "You",
        avatar: "/api/placeholder/40/40",
      },
      content: comment,
      date: "Just now",
      likes: 0,
    };

    setBlog({
      ...blog,
      comments: [...blog.comments, newComment],
    });
    setComment("");
  };

  return (
    <article className="px-2 flex flex-col gap-10 justify-center items-center my-5 w-full max-w-6xl mx-auto">
      {/* Header with back button and sharing */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="hover:bg-gray-100 p-1 rounded-full">
            <ArrowLeft width={30} height={30} />
          </button>
          <h1 className="text-3xl">{blog.category}</h1>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="font-bold uppercase tracking-wide">SHARE</h1>
          <ul className="flex items-center gap-1">
            <button className="rounded-full border border-black p-2 hover:bg-gray-100">
              <Share width={16} height={16} />
            </button>
            <button className="rounded-full border border-black p-2 hover:bg-gray-100">
              <Facebook width={16} height={16} />
            </button>
            <button className="rounded-full border border-black p-2 hover:bg-gray-100">
              <Twitter width={16} height={16} />
            </button>
            <button className="rounded-full border border-black p-2 hover:bg-gray-100">
              <Instagram width={16} height={16} />
            </button>
          </ul>
        </div>
      </div>

      {/* Opening quote */}
      <div className="border-b-2 border-t-2 border-black py-7 w-full">
        <p className="text-3xl italic">"{blog.quotes[0].text}"</p>
        <span className="italic">- {blog.quotes[0].author}</span>
      </div>

      {/* Intro section with image and title */}
      <div className="intro flex gap-2 justify-between items-center w-full">
        <div className="w-2/5">
          <img
            src={blog.photos[0].url}
            alt={blog.photos[0].description}
            className="aspect-square w-3/4 object-cover"
          />
        </div>
        <div className="w-3/5">
          <h1 className="text-8xl font-extrabold tracking-tight leading-tight">
            {blog.title}
          </h1>
          <div className="border-b-2 border-t-2 border-black py-7 mt-6">
            <p className="text-3xl italic">"{blog.quotes[1].text}"</p>
            <span className="italic">- {blog.quotes[1].author}</span>
          </div>
        </div>
      </div>

      {/* Author info and content */}
      <div className="description flex w-full justify-between">
        <div className="flex flex-col w-2/5">
          <div className="flex items-center gap-4">
            <button className="px-2 rounded-full border border-black">
              {blog.category}
            </button>
            <p>{blog.date}</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full"
            />
            <p>
              <span className="text-gray-600">Written By</span> |{" "}
              <b className="uppercase">{blog.author.name}</b>
            </p>
          </div>

          {/* Engagement */}
          <div className="flex items-center mt-6 gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 ${
                liked ? "text-orange-500" : ""
              }`}
            >
              <Heart
                className="w-5 h-5"
                fill={liked ? "currentColor" : "none"}
              />
              <span>{blog.likes + (liked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span>{blog.comments.length}</span>
            </button>
            <button className="flex items-center gap-1">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-3/5">
          <p className="text-lg leading-relaxed">{blog.content}</p>
        </div>
      </div>

      {/* Photo grid */}
      <div className="flex flex-col photogrid w-full">
        <div className="flex gap-2">
          <img
            src={blog.photos[1].url}
            alt=""
            className="w-1/2 aspect-video object-cover border-2 border-orange-500"
          />
          <img
            src={blog.photos[2].url}
            alt=""
            className="w-1/2 aspect-video object-cover border-2 border-orange-500"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <img
            src={blog.photos[2].url}
            alt=""
            className="w-1/2 aspect-video object-cover border-2 border-orange-500"
          />
          <img
            src={blog.photos[1].url}
            alt=""
            className="w-1/2 aspect-video object-cover border-2 border-orange-500"
          />
        </div>
      </div>

      {/* Closing quote */}
      <div className="border-b-2 border-t-2 border-black py-7 w-full">
        <p className="text-3xl italic">"{blog.quotes[2].text}"</p>
        <span className="italic">- {blog.quotes[2].author}</span>
      </div>

      {/* Rating */}
      <div className="w-full">
        <h3 className="font-bold text-xl mb-4">Rate this article</h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`p-2 text-3xl ${
                rating >= star ? "text-orange-500" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Comments section */}
      <div className="w-full">
        <h3 className="font-bold text-xl mb-6">
          Comments ({blog.comments.length})
        </h3>

        {/* Comment form */}
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 resize-none h-24"
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={comment.trim() === ""}
              className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Comment
            </button>
          </div>
        </form>

        {/* Comment list */}
        <div className="space-y-6">
          {blog.comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <img
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">{comment.user.name}</div>
                    <div className="text-sm text-gray-500">{comment.date}</div>
                  </div>
                  <p>{comment.content}</p>
                </div>
                <div className="flex items-center mt-2 ml-2 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <span className="mx-2">•</span>
                  <button className="hover:text-orange-500 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
