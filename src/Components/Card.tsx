import Image from "next/image";
import React from "react";
import card from "../assets/card.jpeg";
import Link from "next/link";

interface ICard {
  image?: string;
  title: string;
  description: string;
  link: string;
}

function Card({ image, title, description, link }: ICard) {
  return (
    <div className="shadow-card-shadow rounded-md overflow-hidden">
      <Image
        alt="card"
        src={image ? image : card}
        className="h-[230px] w-full object-cover"
        width={100}
        height={100}
      />
      <div className="py-4 px-2 text-[#ffffff9f] flex flex-col items-center gap-2">
        <h3 className="text-center text-[17px] ">
          <Link
            className="border-b-2 border-[#4fb1ba80] hover:border-[#64eaf6] transition-all pb-1"
            href={link}
          >
            {title}
          </Link>
        </h3>
        <p className="text-center text-[15px]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
