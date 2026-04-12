import Image from "next/image";
import React, { useEffect } from "react";
import hamburger from "../assets/menu.svg";
import sunny from "../assets/sunny.svg";
import moon from "../assets/moon.svg";
import { useDataContext } from "@/context/DataContext";
import Menu from "@/assets/Menu";
function Header({ openNavigation }: { openNavigation: () => void }) {
  const { info, setInfo } = useDataContext();

  return (
    <nav className="mb-8">
      <ul className="flex">
        <li className="border-r border-[#363a3d]">
          <button className="pl-3 pr-3 pt-5 pb-5" onClick={openNavigation}>
            <Menu
              color={info.darkMode ? "white" : "black"}
              style={{ width: 17, height: 17 }}
            />
          </button>
        </li>
        <li>
          <button
            className="pl-3 pr-3 pt-5 pb-5 text-[#fff] cursor-pointer"
            onClick={() => {
              setInfo((prev) => {
                return { ...prev, darkMode: !prev.darkMode };
              });
            }}
          >
            <Image
              alt="dark mode"
              src={info.darkMode ? sunny : moon}
              width={17}
              height={17}
            />
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
