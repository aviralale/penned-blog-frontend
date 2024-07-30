import React from "react";

export default function Navbar() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ul className="p-4 flex justify-between border-b">
      <li className="font-bold text-2xl casta">{formattedDate}</li>
      <li className="font-bold text-2xl casta">AVIRAL | PENNED</li>
      <li className="flex gap-2">
        <a
          target="_blank"
          href="https://github.com/aviralale"
          className="font-bold text-2xl casta hover:underline"
        >
          GIT.
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aviral-ale/"
          className="font-bold text-2xl casta hover:underline"
        >
          LI.
        </a>
      </li>
    </ul>
  );
}
