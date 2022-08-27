import React from "react";

interface HeadingLargeProps {
  subtitle: string;
  subColor: string;
  span1: string;
  span2?: string;
}

export default function HeadingLarge(props: HeadingLargeProps) {
  return (
    <div>
      <h2 className={`${props.subColor} tracking-widest pb-4 uppercase`}>{props.subtitle}</h2>
      <h1 className="text-4xl xs:text-6xl sm:text-7xl tracking-normal xs:leading-tight sm:leading-tight font-extrabold text-[#E6E6E6]">
        <span className="block xl:inline">{props.span1}</span>{" "}
        <span className="block xl:inline">{props.span2}</span>
      </h1>
    </div>
  );
}
