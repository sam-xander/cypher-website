import Image from 'next/image'
import HeadingLarge from './HeadingLarge'

export default function Community() {
    return (
        <>
        <div className="mt-20 mx-auto max-w-3xl px-4 sm:mt-40">
        <a id="community"></a>
          <div>
            <HeadingLarge subtitle='Community' subColor='text-[#C4ED70]' span1='We empower and' span2='connect investors' />
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