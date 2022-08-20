import Image from 'next/image'

export default function Community() {
    return (
        <>
        <div className="mt-24 mx-auto max-w-2xl px-4 sm:mt-40">
          <div className="text-left">
            <h2 className="text-[#C4ED70] tracking-wider pb-4">
                COMMUNITY
            </h2>
            <h1 className="text-7xl tracking-normal md:leading-tight sm:leading-tight xs:leading-tight font-extrabold text-[#E6E6E6] sm:text-7xl md:text-7xl xs:text-6xl">
              <span className="block xl:inline">We empower</span>{' '}
              <span className="block xl:inline">and connect investors</span>{' '}
              
            </h1>
          </div>
        </div>
        <div className="mx-auto w-full h-screen px-4 sm:mt-24 relative">
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