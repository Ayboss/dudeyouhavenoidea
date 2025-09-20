"use client";
import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Image from "next/image";
import dp from "../assets/dp.jpeg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const resizer = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const startx = useRef(0);
  const startWidth = useRef(0);

  useEffect(() => {
    if (!resizer.current) return;
    if (pathname != "/") {
      resizer.current.style.width = "400px";
    }
  }, [pathname]);

  useEffect(() => {
    resizer.current?.addEventListener("mousedown", (e) => {
      startx.current = e.clientX;
      if (resizer.current) {
        resizer.current.style.transition = "none";
        startWidth.current = parseInt(
          window.getComputedStyle(resizer.current).width,
          10
        );
        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResize);
      }
    });
  }, []);

  const resize = (e: any) => {
    if (!isResizing) return;
    if (!resizer.current) return;

    let newwidth = startWidth.current + e.clientX - startx.current;

    if (newwidth < 400) {
      newwidth = 400;
    }
    resizer.current.style.width = newwidth + "px";
    return;
  };

  const stopResize = () => {
    if (resizer.current) {
      let width = parseInt(window.getComputedStyle(resizer.current).width, 10);
      const halfWindowWidth = window.innerWidth / 2;
      resizer.current.style.transition = "width 0.3s ease";
      if (width <= halfWindowWidth) {
        resizer.current.style.width = "400px";
      } else {
        resizer.current.style.width = "100vw";
      }
    }
    isResizing.current = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  };
  const navigateclose = () => {
    if (resizer.current) {
      resizer.current.style.width = "400px";
    }
  };
  return (
    <div className="flex">
      <div className="w-[400px] bg-red-200"></div>
      <div className="pl-14 pr-5 max-w-[864px] flex-1">
        <div
          className="fixed w-screen h-screen top-0 left-0 bg-black cutomtransition flex justify-center"
          ref={resizer}
        >
          <div className="text-center mt-44">
            <Image
              src={dp}
              className="w-[100px] h-[100px] object-cover rounded-full inline-block "
              alt="profile"
            />
            <h3 className="text-[26px] mt-3 mb-5 font-bold">LAWAL AYOBAMI</h3>
            <p className="mb-8">Software Engineer | Hardware Engineer</p>
            <ul className="flex items-center flex-col gap-2">
              <li className="customlink">
                <Link href={"/"} onClick={navigateclose}>
                  About
                </Link>
              </li>
              <li className="customlink">
                <Link href={"/blog"} onClick={navigateclose}>
                  Blog
                </Link>
              </li>
              <li className="customlink">
                <Link href={"/project"} onClick={navigateclose}>
                  Projects
                </Link>
              </li>
              <li className="customlink">
                <Link href={"/resume"} onClick={navigateclose}>
                  Resume
                </Link>
              </li>
            </ul>
            <div className="flex gap-7 justify-center items-center mt-8">
              <Link href={"/"} className="customlink">
                <Image src={youtube} alt="youtube" width={30} />
              </Link>
              <Link href={"/"} className="customlink">
                <Image src={linkedin} alt="linkedin" width={30} />
              </Link>
              <Link href={"/"} className="customlink">
                <Image src={twitter} alt="twitter" width={30} />
              </Link>
            </div>
          </div>
        </div>
        <Header />

        {children}
      </div>
    </div>
  );
}

export default Layout;
