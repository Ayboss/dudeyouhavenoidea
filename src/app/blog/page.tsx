"use client"
import Card from "@/Components/Card";
import { useRouter } from 'next/navigation';

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
          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
          <h2 className="text-[24px] font-bold mb-8">2024</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
}
