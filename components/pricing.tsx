/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      id: 1,
      price: 'NFT Asessment Package',
      description: 'An essential tool to scale a project. Our experts offer bespoke advice on the areas that need improving, so you can focus on building.',
      features: [
        'Detailed Report with strengths, weaknesses and recommended actions.',
        'Pre and post-mint across 8 domains and over 100 data points.',
        'Project listed on our new NFT project analytics platform.',
        'Extensive feedback, guidance and access to our NFT network.',
        'Certificate of assessment with awards in each domain.',
        'Comprehensive re-assessment if project scores poorly before making it public.'
      ],
      cta: 'Request on Discord',
    },
    {
      id: 2,
      price: 'Discord Security Package',
      description: 'Discord is the lifeblood of any NFT project. We can help protect your community and reputation by taking steps to secure your project.',
      features: [
        'Access to our team of security experts to support you through each step.',
        'Education on common attacks methods such as phishing, social engineering and malware.',
        'Create a plan for responding to hacks and minimize the damage and impact on your reputation.',
        'Consultation on best practices for securing your server from implementing bots and permissions to training staff.',
        'Discord security training material to distribute to your everyone on your team.',
      ],
      cta: 'Request on Discord',
    },
    {
      id: 3,
      price: 'Total Project Assessment and Security Package',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Everything in NFT Assessment Package',
        'Everything in Discord Security Package',
        'Priority access to our team of NFT and Discord Security experts',
        'MARKETING BONUS - [Front-page feature on our NFT investment analytics platform for a week and an in-depth thread on our Twitter highlighting your project\'s strengths.]',
      ],
      cta: 'Request on Discord',
      optionThree: true,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      {/* Tiers */}
      <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {pricing.tiers.map((tier) => (
          <div key={tier.id} className="relative p-8 bg-[#344250] rounded-3xl shadow-sm flex flex-col">
            <div className="flex-1">
              {tier.optionThree ? (
                <p className="absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-sm font-semibold text-white transform -translate-y-1/2">
                  Get access to our marketing package included
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-[#e6e6e6]">
                <span className="text-5xl tracking-tight font-bold">{tier.price}</span>
              </p>
              <p className="mt-6 text-[#e6e6e6]">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-300" aria-hidden="true" />
                    <span className="ml-3 text-[#e6e6e6]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://discord.gg/cypherseals"
              className={classNames(
                tier.optionThree
                  ? 'bg-green-500 text-[#f1f1f1] hover:bg-green-400'
                  : 'bg-[#f1f1f1] text-[#111111] hover:bg-green-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-full text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
