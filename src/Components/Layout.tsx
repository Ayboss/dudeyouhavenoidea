"use client";
import React, { useState } from "react";
import SideNavigation from "./SideNavigation";

function Layout({ children }: { children: React.ReactNode }) {
  const [navscreen, setNavScreen] = useState(400);

  return (
    <div className="flex">
      <div style={{ width: `${navscreen}px` }} className=" bg-white"></div>
      <div className=" md:pl-14 pl-5 pr-5 max-w-[864px] flex-1">
        <SideNavigation navscreen={navscreen} setNavScreen={setNavScreen} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
