import { volunteers } from "@/data/volunteers.data";
import React from "react";

function Volunteers() {
  return (
    <div>
      <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
        Volunteering / Leadership
      </h4>
      {volunteers.map((vol, i) => (
        <div key={i} className="mb-10">
          <p className="text-[#7f7f7f]">{vol.duration}</p>
          <p className="text-[18px] mb-2">{vol.name}</p>
          <div className="pl-5 border-l border-[#545454]">
            <h5 className="text-[10px] font-bold text-[#545454] mb-2">
              SUMMARY
            </h5>
            <ul>
              {vol.description.map((desc, i) => (
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

export default Volunteers;
