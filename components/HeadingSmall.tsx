import React from "react";

interface HeadingSmallProps {
  subtitle: string;
  subColor: string;
  span1: string;
  span2?: string;
}

export default function HeadingSmall(props: HeadingSmallProps) {
  return (
    <>
      <h2 className={`${props.subColor} tracking-widest pb-4 uppercase`}>{props.subtitle}</h2>
      <h1 className="text-4xl xs:text-5xl sm:text-6xl tracking-normal xs:leading-tight sm:leading-tight font-bold text-[#e6e6e6]">
        <span className="block">{props.span1}&nbsp;</span>
        <span className="block">{props.span2}</span>
      </h1>
    </>
  );
}