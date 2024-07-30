import React from "react";
import { Link } from "react-router-dom";

export default function NavbarOne() {
  return (
    <ul className="p-4 flex justify-between border-b border-b-black">
      <li className="flex gap-2">
        <Link className="font-bold text-2xl casta">SCIENCE</Link>
        <span className="text-lg font-bold casta">/</span>
        <Link className="font-bold text-2xl casta">TECHNOLOGY</Link>
        <span className="text-lg font-bold casta">/</span>
        <Link className="font-bold text-2xl casta">FICTION</Link>
        <span className="text-lg font-bold casta">/</span>
        <Link className="font-bold text-2xl casta">PHILOSOPHY</Link>
        <span className="text-lg font-bold casta">/</span>
        <Link className="font-bold text-2xl casta">IT AND PROGRAMMING</Link>
      </li>
      <button className="text-2xl text-custom-orange transition-all duration-200 ease font-bold hover:bg-custom-orange hover:text-white">
        SUBSCRIBE
      </button>
    </ul>
  );
}
