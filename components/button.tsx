import React from "react";

interface ButtonProps {
    href: string;
    bgColor: string;
    label: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="flex items-center justify-center w-full mt-20 font-semibold text-[#1F2933]">
      <a
        href={props.href}
        className={`uppercase tracking-wide text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-5 ${props.bgColor} rounded-full hover:brightness-90 duration-200`}
      >
        {props.label}
      </a>
    </div>
  );
}
