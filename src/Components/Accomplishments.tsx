import { accomplishments } from "@/data/accomplishments.data";
import React from "react";

function Accomplishments() {
  return (
    <div>
      <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
        Accomplishments
      </h4>
      {accomplishments.map((accomplishment, i) => (
        <div key={i} className="mb-4">
          <p className="text-[18px] mb-2">{accomplishment.name}</p>
          <div className="pl-5 border-l border-[#545454]">
            <h5 className="text-[10px] font-bold text-[#545454] mb-2">
              SUMMARY
            </h5>
            <ul>
              <li className="text-[14px] mb-2 leading-snug">
                {accomplishment.description}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accomplishments;
