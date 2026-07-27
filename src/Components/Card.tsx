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
    <Link
      href={link}
      className="group block shadow-card-shadow rounded-md overflow-hidden"
    >
      <Image
        alt="card"
        src={image ? image : card}
        className="h-[230px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        width={100}
        height={100}
      />
      <div className="py-4 px-2 text-gray-600 dark:text-gray-400 flex flex-col items-center gap-2">
        <h3 className="text-center text-[17px] ">
          <p className="border-b-2 border-[#4fb1ba80] group-hover:border-[#64eaf6] transition-all pb-1">
            {title}
          </p>
        </h3>
        <p className="text-center text-[15px]">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
