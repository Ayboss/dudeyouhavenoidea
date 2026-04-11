interface Iblog {
  image?: string;
  title: string;
  description: string;
  link: string;
}
export const blogs: Iblog[] = [
  {
    image:
      "https://cdn.hashnode.com/uploads/covers/5f5bbd51e0b75e58b295262f/f6b4c0ae-a472-4632-928c-d4ccedfd9780.jpg",
    title: "Dynamic Memory Allocation in C",
    description: "How Memory allocation works in C",
    link: "https://dudeyouhavenoidea.hashnode.dev/dynamic-memory-allocation-in-c",
  },
  {
    image:
      "https://cdn.hashnode.com/uploads/covers/5f5bbd51e0b75e58b295262f/bac07d8a-3bfe-4204-b867-53d07a32619b.png",
    title: "Bit Manipulation in C",
    description:
      "Bit Manipulation in C: Setting, Clearing, Toggling, and Checking Bits",
    link: "https://dudeyouhavenoidea.hashnode.dev/bit-manipulation-in-c-setting-clearing-toggling-and-checking-bits",
  },
];
