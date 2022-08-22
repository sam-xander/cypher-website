import Image from 'next/image'

export default function DiscordSecurity() {
    return (
        <div className="w-full md:mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div>
                    <h2 className="text-[#FFC670] tracking-wider pb-4">
                        DISCORD SECURITY
                    </h2>
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl tracking-tight font-bold text-[#e6e6e6] sm:tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">
                        <span className="lg:block inline-block">Protect your</span>{' '}
                        <span className="lg:block inline-block">community</span>
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="grid grid-cols-3 gap-2 sm:gap-6">
                    <div>
                        <Image
                        src="/sec-1.png"
                        alt="Security One"
                        width="400"
                        height="400"
                        className='rounded-3xl'
                        />
                    </div>
                    <div>
                        <Image
                        src="/sec-2.png"
                        alt="Security One"
                        width="400"
                        height="400"
                        className='rounded-3xl'
                        />
                    </div>
                    <div>
                        <Image
                        src="/sec-3.png"
                        alt="Security One"
                        width="400"
                        height="400"
                        className='rounded-3xl'
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className='hidden sm:block'>
                    </div>
                    <div>
                        <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                            Discord is the lifeblood of an NFT project. However, it&apos;s a prime target for scams and hacks. Within seconds a project can lose all credibility and trust, alongside thousands of dollars when a server is compromised.
                        </p>
                        <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                            Our team of security experts can help ease the pressure and keep your community and funds safe with personalized consultancy.
                        </p>
                        <div className="w-full mt-12">
                            <a
                            href="https://cypherseals.io/#packages"
                            className="lg:max-w-xs flex justify-center py-3 border-2 border-[#FFC670] font-semibold rounded-full text-[#FFC670] duration-300 hover:bg-[#FFC670] hover:text-[#1F2933]"
                            >
                            LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}