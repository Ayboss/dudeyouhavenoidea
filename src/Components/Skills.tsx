import { skills } from "@/data/skills.data";
import React from "react";

function Skills() {
  return (
    <div>
      <h4 className="pb-3 border-b border-[#545454] text-[20px] mb-5">
        Skills
      </h4>

      <ul className="grid gap-5 grid-cols-4">
        {skills.map((skill, i) => (
          <li key={i} className="text-[14px] mb-2 leading-snug">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
