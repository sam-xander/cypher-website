import Image from 'next/image'

export default function Cypher() {
    return (
      <>
        <div className="mt-16 mx-auto max-w-2xl px-4 sm:mt-24">
          <div className="text-left">
            <h2 className="text-[#FFC670] tracking-wider pb-4">
                CYPHER
            </h2>
            <h1 className="text-7xl tracking-normal md:leading-tight sm:leading-tight xs:leading-tight font-extrabold text-[#E6E6E6] sm:text-7xl md:text-7xl xs:text-6xl">
              <span className="block xl:inline">Helping NFT</span>{' '}
              <span className="block xl:inline">projects build</span>
            </h1>
          </div>
          <div className="pt-20">
            <Image
            src='/dashboard.png'
            alt="Cypher dashboard"
            width='640'
            height='640' />
          </div>
          <div className="pt-20">
            <div className="w-full">
                <a
                  href="https://docs.cypherseals.io/about/what-we-do"
                  className="mx-auto max-w-sm flex justify-center py-3 border-2 border-[#FFC670] font-semibold rounded-full text-[#FFC670] duration-300 hover:bg-[#FFC670] hover:text-[#1F2933]"
                >
                  READ THE WHITEPAPER
                </a>
            </div>
          </div>
        </div>
      </>
    )
}