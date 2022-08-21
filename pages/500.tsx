import Link from 'next/link'

export default function Error404() {
    return (
      <>
        <div className="min-h-full pt-16 pb-12 flex flex-col">
          <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <p className="text-base font-semibold text-[#FFC670]">500</p>
                <h1 className="mt-2 text-4xl font-bold text-[#e6e6e6] tracking-tight sm:text-5xl sm:tracking-tight">
                  Internal server error.
                </h1>
                <p className="mt-2 text-base text-[#e6e6e6]/70">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                  <Link href="/">
                    <a className="duration-200 text-base font-medium text-[#e6e6e6]/90 hover:text-[#e6e6e6]/70">
                      Go Back home<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }