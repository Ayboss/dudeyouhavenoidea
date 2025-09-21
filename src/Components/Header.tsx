import Image from "next/image";
import React from "react";
import hamburger from "../assets/menu.svg";
import sunny from "../assets/sunny.svg";
function Header({ openNavigation }: { openNavigation: () => void }) {
  return (
    <nav className="mb-8">
      <ul className="flex">
        <li className="border-r border-[#363a3d]">
          <button className="pl-3 pr-3 pt-5 pb-5" onClick={openNavigation}>
            <Image alt="nav" src={hamburger} width={17} height={17} />
          </button>
        </li>
        <li>
          <button className="pl-3 pr-3 pt-5 pb-5 text-[#fff]">
            <Image alt="dark mode" src={sunny} width={17} height={17} />
          </button>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
