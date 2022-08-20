import Image from 'next/image'

export default function Header() {
    return (
      <section className="relative w-full h-screen">
        <Image
          src="/header.png"
          className="object-cover w-full h-full"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
      </section>
    )
}