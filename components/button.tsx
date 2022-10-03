import React from "react";

interface ButtonProps {
  href: string;
  classNames: string;
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className="flex items-center justify-center w-full font-medium"
    >
      <button
        className={`flex items-center justify-center tracking-wide px-7 py-2.5 rounded-full hover:brightness-110 duration-150 ${props.classNames}`}
      >
        {props.iconLeft}
        {props.label}
        {props.iconRight}
      </button>
    </a>
  );
}
