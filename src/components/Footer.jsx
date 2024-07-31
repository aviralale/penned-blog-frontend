import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-between px-8 my-12">
      <div className="flex gap-8 items-start">
        <div className="flex flex-col">
          <h1 className="text-5xl ThunderLC">CATEGORIES</h1>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col gap-2">
            <Link>
              <h1 className="text-2xl font-bold">SCIENCE</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">TECHNOLOGY</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">FICTION</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">PHILOSOPHY</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">IT AND PROGRAMMING</h1>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col gap-2">
            <Link>
              <h1 className="text-2xl font-bold">ABOUT</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">PRIVACY POLICY</h1>
            </Link>
            <Link>
              <h1 className="text-2xl font-bold">FAQ</h1>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <div className="flex flex-col">
          <h1 className="text-5xl ThunderLC">CONTACT</h1>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col">
            <h1 className="text-3xl font-bold">AVIRAL ALE</h1>
            <h1 className="text-xl font-bold">Lalitpur, Nepal</h1>

            <a target="_blank" className="casta text-xl font-bold">
              69aviral@gmail.com
            </a>
          </ul>
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <div className="flex flex-col">
          <h1 className="text-5xl ThunderLC">SOCIALS</h1>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col gap-2">
            <a target="_blank" className="casta text-xl font-bold">
              GITHUB
            </a>
            <a target="_blank" className="casta text-xl font-bold">
              LINKEDIN
            </a>
            <a target="_blank" className="casta text-xl font-bold">
              INSTAGRAM
            </a>
            <a target="_blank" className="casta text-xl font-bold">
              PORTFOLIO
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
