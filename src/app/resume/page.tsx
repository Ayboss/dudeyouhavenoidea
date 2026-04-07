import Accomplishments from "@/Components/Accomplishments";
import Certifications from "@/Components/Certifications";
import Educations from "@/Components/Educations";
import Experiences from "@/Components/Experiences";
import Skills from "@/Components/Skills";
import Volunteers from "@/Components/Volunteers";
import React from "react";

function page() {
  return (
    <main>
      <div className="border-b pb-5 border-[#545454] mb-8">
        <h3 className="text-[30px] font-bold">LAWAL AYOBAMI</h3>
        <p>Software Engineer | Hardware Engineer</p>
      </div>
      <div className="mb-5">
        <div className="pl-5 border-l border-[#545454] mb-7">
          <h5 className="text-[10px] font-bold text-[#545454]">SUMMARY</h5>
          <p>Excited about technology and the related fields</p>
        </div>
        <div>
          {/* LINKS */}
          <ul>
            <li>Nigeria</li>
            <li>bamiayo90@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Experiences />
        <Volunteers />
        <Educations />
        <Accomplishments />
        <Skills />
        <Certifications />
      </div>
    </main>
  );
}

export default page;
