import Card from "@/Components/Card";
import CardContainer from "@/Components/CardContainer";

export default function Home() {
  return (
    <main>
      <h1 className="text-[30px] font-bold pb-4 border-[#363a3d] border-b mb-8">
        About
      </h1>
      <div>
        <p className="mb-4">
          Hi, I’m Lawal Ayobami, a Computer Engineer with 4 years of experience
          in software development and about 1 year in IoT. I’ve been a Frontend
          Engineer, Backend Engineer, DevOps Engineer, Mobile Engineer...
          basically, if it’s code, I’ve probably done it—sometimes even things
          I’m not sure have a name!
        </p>
        <p className="mb-4">
          Outside of the technical world, I have a range of hobbies that keep
          life interesting—drawing, playing the guitar, and even dabbling in
          close-up magic and sleight of hand. I might not be a pro at any of
          them, but hey, I give it my all! 🎨🎸✨
        </p>
      </div>
      <div className="mt-10">
        <CardContainer>
          <Card />
          <Card />
        </CardContainer>
        <p className="mt-3">More</p>
      </div>
    </main>
  );
}
