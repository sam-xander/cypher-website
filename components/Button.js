import React from "react";

export default function Button(props) {
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
