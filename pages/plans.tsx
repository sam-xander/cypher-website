import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import HeadingLarge from "../components/heading-large";

const tiers = [
  {
    name: "Scale Up -> Sell Out",
    href: "#",
    priceMonthly: "NFT Assessment",
    description:
      "Improve a pre or post-mint project to boost its chances of selling out.",
    features: [
      "10+ page personalized project report",
      "Over 8 domains and 100+ data points",
      "Project listed on our analytics app",
      "Extensive feedback and guidance",
      "Shareable certificate of assessment",
      "Free re-assessment if scored low",
    ],
  },
  {
    name: "Protect Your Community",
    href: "#",
    priceMonthly: "Discord Security",
    description:
      "Educate your staff, understand common threats and secure your server properly.",
    features: [
      "Complete guidance from our experts",
      "Education on common attacks",
      "Response planning to minimize damage",
      "Secure server with bots and permissions",
      "Training for each team member",
      "Personalized support at every stage",
    ],
  },
];

const completeBenefits = [
  {
    key: 1,
    benefit:
      "Includes Everything in our NFT Assessment and Discord Security Plans",
  },
  {
    key: 2,
    benefit: "One Week Featured Spot on our NFT Analytics Platform",
  },
  {
    key: 3,
    benefit: "Thread covering project strengths posted on our Twitter",
  },
  {
    key: 4,
    benefit: "Priority Access to our Team of NFT and Security Experts",
  },
];

export default function Plans() {
  return (
    <div>
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <HeadingLarge
              subtitle="Plans for project owners"
              subColor="text-[#92DDFD]"
              span1="Take your project"
              span2="to the next level"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col opacity-95 rounded-3xl overflow-hidden"
                >
                  <div className="px-6 py-8 bg-[#e6e6e6] sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold bg-[#92DDFD]/40 text-[#113c5a]/80"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl tracking-tight font-bold">
                      {tier.priceMonthly}
                    </div>
                    <p className="mt-5 text-lg font-medium text-[#1F2933]/70">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-[#e6e6e6]/90 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-3xl border-4 border-[#92DDFD] bg-[#e6e6e6] px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-base font-semibold bg-[#92DDFD] text-[#113c5a]">
                    Best Value Package
                  </h3>
                  <div className="mt-4 flex items-baseline text-6xl tracking-tight font-bold">
                    Assessment + Security Package
                  </div>
                </div>
                <div className="mt-8">
                  <ul role="list" className="space-y-4">
                    {completeBenefits.map((props) => (
                      <li key={props.key} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {props.benefit}
                        </p>
                      </li>
                    ))}
                    
                  </ul>
                </div>
                <div className="rounded-full shadow mt-10">
                  <Link href="/">
                    <a
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-[#113c5a] bg-[#92DDFD] hover:brightness-90"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
