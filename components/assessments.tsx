import Image from 'next/image'
import Button from '../components/button'
import HeadingSmall from '../components/heading-small'

export default function Assessments() {
  return (
    <section className="lg:relative mt-10 sm:mt-20">
      <div className="mx-auto max-w-7xl w-full pt-12 pb-12 text-left lg:py-48 lg:text-left">
        <div className="tracking-wide px-6 lg:w-1/2 sm:px-8 xl:pr-16">
          <HeadingSmall subtitle='Assessments' subColor='text-[#FFC670]' span1='Improvement in' span2='every area' />
          <div className="my-12">
            <Image
              className="rounded-3xl"
              src="/report-sm.png"
              alt="Cypher report section"
              width="1240"
              height="1002" />
          </div>
          <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-2xl md:max-w-3xl">
            Improve fundamentals, increase brand awareness, build confidence and improve security.
          </p>
          <p className="mt-6 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-2xl md:mt-8 md:max-w-3xl">
            Our NFT assessments provide value to projects and investors. We assess pre-mint and post-mint projects across 8 areas and over 100 data points. Projects receive a comprehensive report including strengths, weaknesses and suggested improvements.
          </p>
          <Button href="/nft-assessment" bgColor="bg-[#FFC670]" label="Get an assessment" />
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