import Image from 'next/image'

export default function Community() {
    return (
        <>
        <div className="mt-20 mx-auto max-w-2xl px-4 sm:mt-40">
        <a id="community"></a>
          <div className="text-left">
            <h2 className="text-[#C4ED70] tracking-wider pb-4">
                COMMUNITY
            </h2>
            <h1 className="text-4xl xs:text-6xl sm:text-7xl tracking-tight font-bold text-[#e6e6e6] sm:tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">
              <span className="sm:block">We empower and</span>{' '}
              <span className="sm:block">connect investors</span>
            </h1>
          </div>
        </div>
        <div className="mx-auto w-full h-screen px-4 mt-10 sm:mt-20 relative">
            <Image
            src='/community.png'
            alt="Cypher community"
            layout='fill'
            objectFit='cover'
            />
        </div>
      </>
    )
}