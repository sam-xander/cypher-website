import Image from 'next/future/image'
import HeadingLarge from '../components/HeadingLarge'
import HeadingSmall from '../components/HeadingSmall'
import { ExclamationIcon, ClipboardListIcon, LockClosedIcon, AcademicCapIcon } from '../node_modules/@heroicons/react/outline'

const risks = [
    {
        name: 'Learn The Threats To Your Server',
        description:
            'The Discord threat landscape and common attack methods such as phishing, social engineering and malware attacks.',
        icon: ExclamationIcon,
    },
    {
        name: 'Create An Emergency Plan',
        description:
            'How to respond to hacks to minimize the damage and impact on your reputation.',
        icon: ClipboardListIcon,
    },
    {
        name: 'Lock Down Your Server',
        description:
            'Best practices for securing your server such as implementing bots and permissions.',
        icon: LockClosedIcon,
    },
    {
        name: 'Security Training For All Staff',
        description:
            'Educate your server team to understand the risks and protect themselves.',
        icon: AcademicCapIcon,
    },
]

function Testimonial() {
    return (
        <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <div className="flex justify-center text-[#113c5a] lg:justify-start">

            </div>
            <blockquote className="mt-2">
                <p className="font-display text-xl font-medium text-slate-900">
                    “Cypher secured our server implementing bots and permissions.”
                </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
                <strong className="font-semibold text-[#113c5a] before:content-['—_']">
                    Birda
                </strong>
                , Head of Design at Cypher
            </figcaption>
        </figure>
    )
}

export default function DiscordSecurity() {
    return (
        <div>
            <header className="overflow-hidden bg-[#92DDFD] lg:bg-transparent lg:px-5">
                <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
                    <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
                        <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
                            <Image className="w-full" src="/cover.png" alt="" width="960" height="1284" priority />
                        </div>
                    </div>
                    <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
                        <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-[#92DDFD]" />
                        <Testimonial />
                    </div>
                    <div className="bg-[#1F2933] pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
                        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                            <HeadingLarge subtitle='Protect your server' subColor='text-[#92DDFD]' span1='Discord Security' />
                            <p className="mt-3 text-xl text-[#e6e6e6]/70 sm:mt-4">
                                Within seconds a project can lose all credibility and reputation when their server gets compromised.
                                Our team of security experts are here to help so you can prevent this from happening and keep your community safe.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <HeadingSmall subtitle='Staff Education + training tools' subColor='text-[#92DDFD]' span1='Expert consultancy' />
                        <p className="mt-4 max-w-2xl text-xl text-[#e6e6e6]/70 lg:mx-auto">
                        Our Discord Security consultancy service educates projects on how to keep their server safe from hackers and scammers.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {risks.map((risk) => (
                                <div key={risk.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-[#92DDFD] text-[#344250]/90">
                                            <risk.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-[#e6e6e6]/90">{risk.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-[#e6e6e6]/60">{risk.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
