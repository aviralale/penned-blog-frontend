import React from "react";

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
        <li className="font-bold text-2xl casta">AVIRAL | PENNED</li>
        <li className="font-bold text-2xl casta">{formattedDate}</li>
      </ul>
    </nav>
  );
}
