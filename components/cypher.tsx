import Image from "next/image";
import Button from "./Button";
import HeadingLarge from "./HeadingLarge";

export default function Cypher() {
  return (
    <>
      <div className="mt-20 sm:mt-20 mx-auto max-w-2xl px-4">
        <a id="cypher"></a>
        <div className="text-left">
          <HeadingLarge
            subtitle="Cypher Reports"
            subColor="text-[#FFC670]"
            span1="Helping NFT"
            span2="Projects Grow Smarter"
          />
        </div>
        <div className="pt-10 sm:pt-20">
          <Image
            src="/dashboard.png"
            alt="Cypher dashboard"
            width="640"
            height="640"
          />
        </div>
      </div>
    </>
  );
}
