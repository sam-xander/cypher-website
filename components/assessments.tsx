import Image from 'next/image'

export default function Assessments() {
    return (
      <section className="lg:relative lg:mt-40 mt-20">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-12 text-left lg:py-48 lg:text-left">
          <div className="px-6 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 className="text-[#FFC670] tracking-wider pb-4">
                ASSESSMENTS
            </h2>
            <h1 className="text-4xl tracking-tight font-bold text-[#e6e6e6] sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight">
              <span className="block inline">Improvement&nbsp;</span>
              <span className="block inline">in every area</span>
            </h1>
            <div className="mt-12">
              <Image
              className="rounded-3xl" 
              src="/report-sm.png" 
              alt="Cypher report section"
              width="1240"
              height="1002" />
             </div>
            <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
              Improve fundamentals, increase brand awareness, build confidence and improve security.
            </p>
            <p className="mt-3 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
              Our NFT assessments provide value to projects and investors. We assess pre-mint and post-mint projects across 8 areas and over 100 data points. Projects receive a comprehensive report including strengths, weaknesses and suggested improvements.
            </p>
            <div className="w-full mt-12">
                <a
                  href="https://cypherseals.io/docs/get-assessed.pdf"
                  className="lg:max-w-xs flex justify-center py-3 border-2 border-[#FFC670] font-semibold rounded-full text-[#FFC670] duration-300 hover:bg-[#FFC670] hover:text-[#1F2933]"
                >
                  GET ASSESSED
                </a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
          className="absolute inset-0 w-auto h-full object-cover object-left rounded-l-3xl"
          src="/report.png"
          alt="Cypher report"
          layout="fill"
          objectFit='cover' />
        </div>
      </section>
    )
}