/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import HeadingLarge from "../components/heading-large";

const faqs = [
  {
    question: "What are the mint details?",
    answer:
      "Mint date and price is yet to be announced, keep an eye on our socials for an official announcement.",
  },
  {
    question: "How do I get whitelist?",
    answer:
      "Join the Cypher Seals Discord at discord.gg/cypherseals and go to the whitelist channel for securing a whitelist spot.",
  },
  {
    question: "What is Cypher Seals?",
    answer:
      "Cypher Seals is a collection of 5,000 NFTs built on Solana. Holding one gives you full access to our project reports, a suite of educational tools, and entry into our DAO. All seals can be staked to earn 50% of the revenue we make from our NFT assessments.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <a id="faq"></a>
        <div className="max-w-3xl mx-auto">
          <HeadingLarge
            subtitle="FAQ"
            subColor="text-[#FFA694]"
            span1="Frequently asked"
            span2="questions"
          />
          <dl className="mt-12 space-y-6 divide-y divide-[#e6e6e6]/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-[#e6e6e6]">
                        <span className="font-medium text-[#e6e6e6]/90">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-[#e6e6e6]/70">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
