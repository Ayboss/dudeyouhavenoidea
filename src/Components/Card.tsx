import Image from "next/image";
import React from "react";
import card from "../assets/card.jpeg";
function Card() {
  return (
    <div className="shadow-card-shadow rounded-md overflow-hidden">
      <Image alt="card" src={card} className="h-[230px] object-cover" />
      <div className="py-4 px-2 text-[#ffffff9f] flex flex-col items-center gap-2">
        <h3 className="text-center text-[17px] border-b-2 border-[#4fb1ba80]">
          Dealing with flood of protein structure
        </h3>
        <p className="text-center text-[15px]">
          How structure prediction changed the questions we ask and the tools we
          use
        </p>
      </div>
    </div>
  );
}

export default Card;
