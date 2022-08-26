import Image from "next/image";
import Button from "../components/button"
import HeadingLarge from "./heading-large";

export default function Cypher() {
  return (
    <>
      <div className="mt-20 sm:mt-40 mx-auto max-w-2xl px-4">
        <a id="cypher"></a>
        <div className="text-left">
          <HeadingLarge
            subtitle="Cypher"
            subColor="text-[#FFC670]"
            span1="Helping NFT"
            span2="projects build"
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
        <div className="pt-10">
          <div>
            <Button href="https://docs.cypherseals.io/" bgColor="bg-[#FFC670]" label="Read whitepaper" />
          </div>
        </div>
      </div>
    </>
  );
}
