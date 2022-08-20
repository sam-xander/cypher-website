import Image from 'next/image'

export default function Staking() {
    return (
        <>
        <div className="w-full mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div>
                    <h2 className="text-[#C4ED70] tracking-wider pb-4">
                        STAKING AND TOKENOMICS
                    </h2>
                    <h1 className="text-4xl tracking-tight font-bold text-[#e6e6e6] sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
                        <span className="lg:block inline-block">Rewarding loyalty&nbsp;</span>
                        <span className="lg:block inline-block">with $CYPH</span>
                    </h1>
                </div>
                    <div>
                        <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                        Our utility token will run the Cypher ecosystem and offer new and exciting ways to reward the community as we build on our roadmap.
                        </p>
                        <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                        Holders will be able to get tickets for $CYPH, which can be used to enter into raffles to win prizes such as NFTs and Whitelist spots.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="mx-auto w-full h-screen px-4 relative">
                    <Image
                    src='/stake.png'
                    alt="Cypher staking and tokenomics"
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                    />
                </div>
            </div>
        </div>
        </>
    )
}