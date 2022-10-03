import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowCircleRightIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  FireIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";

import Button from "./Button";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import router, { useRouter } from "next/router";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

const linkItems = [
  {
    href: "https://app.cypherseals.io",
    name: "NFT Reports",
  },
  {
    href: "https://docs.cypherseals.io/docs/roadmap",
    name: "Stake to Earn",
  },
  {
    href: "https://docs.cypherseals.io/docs/roadmap",
    name: "Our Roadmap",
  },
  {
    href: "/discord-security",
    name: "Cypher Seals NFT",
  },
];

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  return (
    <header className="py-8 w-full bg-[#121212]/75 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <a>
                <Logo className="sm:h-10 sm:w-48" />
              </a>
            </Link>
            <div className="hidden md:flex md:gap-x-6 text-[#f3f3f3]">
              {linkItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    router.route === item.href
                      ? "bg-transparent border-2 border-[#e6e6e6]/80 text-[#e6e6e6]"
                      : "bg-[#e6e6e6] border-2 border-[#e6e6e6]/80 text-[#121212]",
                    "flex items-center px-3 py-0.5 font-medium rounded-full text-sm hover:brightness-110 duration-300"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button
              href="/register"
              classNames="border-2 border-[#EEB462]/60 text-sm text-[#EEB462]/90 bg-[#EEB462]/5 group hidden lg:block"
              label="NFT Dashboard"
              iconRight={
                <ArrowRightIcon className="w-5 ml-2 inline-block group-hover:translate-x-1 duration-300" />
              }
            ></Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
