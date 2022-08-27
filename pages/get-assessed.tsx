import Image from 'next/image'

import HeadingLarge from "../components/heading-large";
import HeadingSmall from "../components/heading-small";

export default function GetAssessed() {
    return (
        <div>
            <div className="bg-gradient-to-br from-[#21747F] to-[#45546E]">
                <div className="relative overflow-hidden">
                    <div className="relative pt-6 pb-16 sm:pb-24">
                        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                            <div className="text-center">
                                <HeadingLarge subtitle="TIME TO GET ASSESSED" subColor="text-[#FFC670]" span1="NFT Project" span2="Assessments" />
                                <p className="mt-3 max-w-xl mx-auto text-base text-[#e6e6e6]/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Join the network of projects that have improved fundamentals, increased brand awareness and have built confidence within their community.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                            <div className="flex-1" />
                            <div className="flex-1 w-full bg-[#1F2933]" />
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <img
                                className="relative rounded-3xl shadow-lg"
                                src="/dashboard-full.png"
                                alt="App screenshot"
                            />
                        </div>
                        <div className="relative pt-16 pb-32 overflow-hidden">
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-[#1F2933] pt-12 pb-32 overflow-hidden">
                <div className="relative pb-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div className="mt-3">
                                    <HeadingSmall subtitle="10+ Page Project Report" subColor="text-[#FFC670]" span1="Improve your" span2="Fundamentals" />
                                    <p className="mt-8 text-lg text-[#e6e6e6]/70">
                                        Receive detailed feedback, coaching and consultation to help your project reach its full potential. This includes actionable areas of improvement and recommendations across our 8 domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                    className="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="/inbox-app-screenshot-1.jpg"
                                    alt="Inbox user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <HeadingSmall subtitle="App Listing + Social Post" subColor="text-[#FFC670]" span1="Increase your" span2="brand awareness" />
                                    <p className="mt-8 text-lg text-[#e6e6e6]/70">
                                        Your assessment certificate will be posted to our Discord and Twitter. The assessment report will be posted to our dashboard as well as our partner's platforms. This will put your project in front of thousands of new eyes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:-ml-48 lg:relative lg:h-full">
                                    <img
                                        className="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="/app-screenshot-1.jpg"
                                        alt="Cypher report"
                                        />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative pt-48 pb-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <HeadingSmall subtitle="certification" subColor="text-[#FFC670]" span1="Build investor confidence" />
                                    <p className="mt-8 text-lg text-[#e6e6e6]/70">
                                        Our reports help investors to fully understand your project’s goals and ambitions as well as identify what your strengths are.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                    className="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="/certificate.jpg"
                                    alt="Inbox user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <HeadingSmall subtitle="NFT + Security Consultation" subColor="text-[#FFC670]" span1="Improve your" span2="security" />
                                    <p className="mt-8 text-lg text-[#e6e6e6]/70">
                                        Our assessment team has combined experience of 10+ years in the security industry. They will help you to properly secure your social platforms to prevent any malicious attacks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                    className="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="/app-screenshot-1.jpg"
                                    alt="App screenshot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
