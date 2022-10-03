import Image from "next/image";
import Button from "./Button";
import HeadingSmall from "./HeadingSmall";

const benefits = [
  {
    key: "1",
    src: "/orange.png",
    alt: "Orange seal",
    span1: "Stake to earn",
    span2: "$CYPH",
  },
  {
    key: "2",
    src: "/green.png",
    alt: "Green seal",
    span1: "Full access",
    span2: "to reports",
  },
  {
    key: "3",
    src: "/blue.png",
    alt: "Blue seal",
    span1: "Unlimited",
    span2: "use of tools",
  },
  {
    key: "4",
    src: "/red.png",
    alt: "Red seal",
    span1: "Entry into",
    span2: "Cypher DAO",
  },
];

export default function CypherSeals() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-8 md:px-4 mt-20 sm:mt-40">
        <div className="text-left max-w-2xl">
          <HeadingSmall
            subtitle="Cypher Seals NFT"
            subColor="text-[#C4ED70]"
            span1="Everything built"
            span2="for the community"
          />
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.key}
              className="pt-20 w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[600px] relative"
            >
              <Image
                src={benefit.src}
                alt={benefit.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
              <h1 className="absolute px-12 text-5xl tracking-tight font-bold text-[#1F2933] sm:text-6xl sm:tracking-tight md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                <span className="lg:block inline-block">
                  {benefit.span1}&nbsp;
                </span>
                <span className="lg:block inline-block">{benefit.span2}</span>
              </h1>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="hidden sm:block"></div>
            <div>
              <p className="max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                We value our community greatly and are always looking at ways to
                bring more utility and value to our holders.
              </p>
              <Button
                href="/register"
                classNames="bg-white"
                label="Get Started"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
