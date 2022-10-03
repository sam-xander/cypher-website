import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative sm:overflow-hidden sm:rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="People working on laptops"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#113c5a]/75 mix-blend-multiply"></div>
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-44 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl space-y-2">
            <span className="block text-[#f3f3f3]">Take control of your</span>
            <span className="block text-[#EEB462]">project growth</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
