import { experiences } from "@/data/experiences.data";
import React from "react";

function Experiences() {
  return (
    <div>
      <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
        Experience
      </h4>
      {experiences.map((experience, i) => (
        <div className="mb-10" key={i}>
          <p className="text-[#7f7f7f]">{experience.duration}</p>
          <p className="text-[18px] mb-2">
            {experience.role} <span className="text-[#7f7f7f]">at</span>{" "}
            {experience.name}
          </p>
          <div className="pl-5 border-l border-[#545454]">
            <h5 className="text-[10px] font-bold text-[#545454] mb-2">
              SUMMARY
            </h5>
            <ul>
              {experience.description.map((desc, i) => (
                <li key={i} className="text-[14px] mb-2 leading-snug">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
