import Image from 'next/image'

export default function CypherSeals() {
    return (
        <>
        <div className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24">
            <div className="text-left max-w-2xl">
                <h2 className="text-[#C4ED70] tracking-wider pb-4">
                    CYPHER SEALS NFT
                </h2>
                <h1 className="text-4xl tracking-tight font-bold text-[#e6e6e6] sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                    <span className="lg:block inline-block">Everything built for&nbsp;</span>
                    <span className="lg:block inline-block">the community</span>
                </h1>
            </div>
            <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="pt-20 w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[600px] relative">
                    <Image
                    src='/orange.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                    />
                    <h1 className="absolute px-12 text-5xl tracking-tight font-bold text-[#1F2933] sm:text-6xl sm:tracking-tight md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                        <span className="lg:block inline-block">Stake to earn&nbsp;</span>
                        <span className="lg:block inline-block">$CYPH</span>
                    </h1>
                </div>
                <div className="pt-20 w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[600px] relative">
                    <Image
                    src='/green.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                    />
                    <h1 className="absolute px-12 text-5xl tracking-tight font-bold text-[#1F2933] sm:text-6xl sm:tracking-tight md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                        <span className="lg:block inline-block">Full access&nbsp;</span>
                        <span className="lg:block inline-block">to reports</span>
                    </h1>
                </div>
                <div className="pt-20 w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[600px] relative">
                    <Image
                    src='/blue.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                    />
                    <h1 className="absolute px-12 text-5xl tracking-tight font-bold text-[#1F2933] sm:text-6xl sm:tracking-tight md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                        <span className="lg:block inline-block">Unlimited&nbsp;</span>
                        <span className="lg:block inline-block">use of tools</span>
                    </h1>
                </div>
                <div className="pt-20 w-full h-[600px] sm:h-[700px] md:h-[600px] lg:h-[600px] relative">
                    <Image
                    src='/red.png'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                    />
                    <h1 className="absolute px-12 text-5xl tracking-tight font-bold text-[#1F2933] sm:text-6xl sm:tracking-tight md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                        <span className="lg:block inline-block">Entry into&nbsp;</span>
                        <span className="lg:block inline-block">Cypher DAO</span>
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className='hidden sm:block'>
                    </div>
                    <div>
                        <p className="max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                        We value our community greatly and are always looking at ways to bring more utility and value to our holders.
                        </p>
                        <div className="w-full mt-12">
                            <a
                            href="https://discord.gg/cypherseals"
                            className="lg:max-w-xs flex justify-center py-3 border-2 border-[#FFC670] font-semibold rounded-full text-[#FFC670] duration-300 hover:bg-[#FFC670] hover:text-[#1F2933]"
                            >
                            JOIN THE DISCORD
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}