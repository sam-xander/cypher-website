/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 mb-40 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-2 divide-gray-600">
            <h2 className="text-[#FFA694] tracking-wider pb-4">
                FAQ
            </h2>
            <h1 className="text-4xl xs:text-6xl sm:text-7xl tracking-tight font-bold text-[#e6e6e6] sm:tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">
              <span className="block">Frequently asked&nbsp;</span>
              <span className="block">questions</span>
            </h1>
          <dl className="mt-12 space-y-6 divide-y divide-gray-700">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-[#e6e6e6]">
                        <span className="font-medium text-[#e6e6e6]">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-[#e6e6e6] opacity-70">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
