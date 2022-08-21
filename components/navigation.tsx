export default function Navigation() {
    return (
      <>
        <div className="w-full mt-12 sm:max-w-7xl mx-auto">
            <div className="flex justify-center text-xs sm:text-base font-semibold space-x-1 sm:space-x-2 md:space-x-5">
                <div>
                    <a
                    href="#cypher"
                    className="rounded-full border-2 border-[#FFC670] text-[#FFC670] duration-200 hover:bg-[#FFC670] hover:text-[#1F2933] py-[6px] sm:py-2 md:py-3 px-4 sm:px-6 md:px-10"
                    >
                    CYPHER
                    </a>
                </div>
                <div>
                    <a
                    href="#community"
                    className="rounded-full border-2 border-[#C4ED70] text-[#C4ED70] duration-200 hover:bg-[#C4ED70] hover:text-[#1F2933] py-[6px] sm:py-2 md:py-3 px-4 sm:px-6 md:px-10"
                    >
                    COMMUNITY
                    </a>
                </div>
                <div>
                    <a
                    href="#team"
                    className="rounded-full border-2 border-[#92DDFD] text-[#92DDFD] duration-200 hover:bg-[#92DDFD] hover:text-[#1F2933] py-[6px] sm:py-2 md:py-3 px-4 sm:px-6 md:px-10"
                    >
                    TEAM
                    </a>
                </div>
                <div>
                    <a
                    href="#faq"
                    className="rounded-full border-2 border-[#FFA694] text-[#FFA694] duration-200 hover:bg-[#FFA694] hover:text-[#1F2933] py-[6px] sm:py-2 md:py-3 px-4 sm:px-6 md:px-10"
                    >
                    FAQ
                    </a>
                </div>
            </div>
      </div>
      </>
    )
}