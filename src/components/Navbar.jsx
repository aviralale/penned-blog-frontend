import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const hour = today.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <nav>
      <ul className="p-4 flex justify-between border-b">
        <li className="text-2xl casta uppercase font-bold">{greeting} !</li>
        <Link className="font-bold text-2xl casta" to="/">
          AVIRAL | PENNED
        </Link>
        <li className="font-bold text-2xl casta">{formattedDate}</li>
      </ul>
    </nav>
  );
}
