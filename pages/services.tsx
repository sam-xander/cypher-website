import { CheckIcon } from '@heroicons/react/outline'

const tiers = [
  {
    name: 'Grow your project',
    href: '#',
    priceMonthly: 'NFT Assessment',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
        '10+ page personalized project report', 
        'Over 8 domains and 100+ data points', 
        'Project listed on our analytics app',
        'Extensive feedback and guidance',
        'Shareable certificate of assessment',
        'Free re-assessment if scored poorly'
    ],
  },
  {
    name: 'Protect your community',
    href: '#',
    priceMonthly: "Discord Security",
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    features: [
        'Complete guidance from our experts', 
        'Education on common attacks', 
        'Response planning to minimize damage',
        'Secure server with bots and permissions',
        'Training for each team member',
        'Personalized support at every stage'
    ],
  },
]

export default function Services() {
  return (
    <div>
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-xl leading-6 font-semibold text-gray-300">Pricing</h2>
            <p className="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight">
              The right price for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold bg-indigo-100 text-indigo-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl tracking-tight font-bold">
                      {tier.priceMonthly}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
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
            <div className="rounded-lg bg-white px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-base font-semibold bg-indigo-100 text-indigo-600">
                    Our Complete Package
                  </h3>
                  <div className="mt-4 flex items-baseline text-6xl tracking-tight font-bold">
                      Assessment + Security Package
                    </div>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo projects that make less than $20k gross
                  revenue for <span className="font-semibold text-gray-900">$29</span>.
                </div>
                <div className="rounded-md shadow mt-10">
                      <a
                        href="/"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
