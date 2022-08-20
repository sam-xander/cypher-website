import Image from 'next/image'

export default function Partners() {
    return (
        <>
            <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-center tracking-wider pb-4 uppercase text-[#e6e6e6]">
                Trusted By Our Partners
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                    className="h-12"
                    src="/orange.png"
                    alt="Tuple"
                    width="180"
                    height="48"
                    />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                    className="h-12"
                    src="/green.png"
                    alt="Tuple"
                    width="180"
                    height="48"
                    />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <Image
                    className="h-12"
                    src="/blue.png"
                    alt="Tuple"
                    width="180"
                    height="48"
                    />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <Image
                    className="h-12"
                    src="/red.png"
                    alt="Tuple"
                    width="180"
                    height="48"
                    />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <Image
                    className="h-12"
                    src="/orange.png"
                    alt="Tuple"
                    width="180"
                    height="48"
                    />
                </div>
                </div>
            </div>
        </>
    )
}