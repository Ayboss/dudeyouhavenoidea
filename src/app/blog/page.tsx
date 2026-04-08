"use client";
import Card from "@/Components/Card";
import CardContainer from "@/Components/CardContainer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1 className="text-[30px] font-bold pb-4 border-[#363a3d] border-b mb-8 w-full">
        Blog
      </h1>
      <div>
        <div className="border-l border-[#363a3d] mb-20 pl-3 ">
          <h3 className="text-[12px] text-[#ffffff40] ">DESCRIPTION</h3>
          <p>
            Blogging about everything from personal life to DSA and biomedical
            engineering
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-[24px] font-bold mb-8">2024</h2>
          <CardContainer>
            <Card
              title="Variadic Function in C"
              description="How to handle multiple variable in a function in C"
              link="blog/variadic-in-c"
            />
          </CardContainer>
        </section>
      </div>
    </main>
  );
}
