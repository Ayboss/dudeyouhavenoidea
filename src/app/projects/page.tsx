import Card from "@/Components/Card";
import CardContainer from "@/Components/CardContainer";
import React from "react";

function page() {
  return (
    <main>
      <h1 className="text-[30px] font-bold pb-4 border-[#363a3d] border-b mb-8 w-full">
        Projects
      </h1>
      <div>
        <div className="border-l border-[#363a3d] mb-20 pl-3 ">
          <h3 className="text-[12px] text-[#ffffff40] ">DESCRIPTION</h3>
          <p>Projects I was involved in</p>
        </div>

        <section className="mb-20">
          <h2 className="text-[24px] font-bold mb-8">2024</h2>
          <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </section>
        <section>
          <h2 className="text-[24px] font-bold mb-8">2024</h2>
          <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </section>
      </div>
    </main>
  );
}

export default page;
