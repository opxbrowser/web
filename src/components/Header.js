import React from "react";
import { NavLink } from "react-router-dom";

import HeaderBg from "../assets/header-bg.png";

export default function Header() {
  return (
    <div className="w-full h-[70px] flex items-center justify-center border-b-2 border-white ">
      <nav>
        <ul className="flex items-center not-sr-only">
          <HeaderItem title="Home" href="/" />
          <HeaderItem title="About" isSeparated href="/about" />
          <HeaderItem title="Install App" isSeparated href="/app" />
        </ul>
      </nav>
      <img
        src={HeaderBg}
        alt="header background"
        className="absolute -z-10 h-[100%] w-[100%]"
      />
    </div>
  );
}

const HeaderItem = ({ title, isSeparated, href }) => {
  return (
    <NavLink to={href}>
      <li
        className={`text-white font-semibold text-lg ${isSeparated && "ml-60"}`}
      >
        {title}
      </li>
    </NavLink>
  );
};
