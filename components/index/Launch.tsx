import Image from "next/image";

const launchItems = [
  {
    href: "/services",
    src: "/hero.png",
    text: "Services",
  },
  {
    href: "/#community",
    src: "/hero.png",
    text: "Community",
  },
  {
    href: "/#team",
    src: "/hero.png",
    text: "Team",
  },
  {
    href: "/#faq",
    src: "/hero.png",
    text: "FAQ",
  },
];

export default function Launch() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xs:grid-cols-4 gap-6 my-6">
        {launchItems.map((item) => (
          <a href={item.href} key={item.text}>
            <div className="aspect-w-2 aspect-h-1 rounded-3xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.text}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#113c5a]/75 mix-blend-multiply"></div>
              <p className="h-full flex justify-center items-center text-white text-xl">
                {item.text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
