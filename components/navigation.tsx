export default function Navigation() {
    return (
      <>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                    <a
                    href="#cypher"
                    className="inline-flex items-center justify-center sm:px-12 xs:px-6 py-3 border-2 border-[#FFC670] font-semibold rounded-full text-[#FFC670] duration-300 hover:bg-[#FFC670] hover:text-[#1F2933]"
                    >
                    CYPHER
                    </a>
                </div>
                <div className="md:ml-5 ml-1 inline-flex">
                    <a
                    href="#community"
                    className="inline-flex items-center justify-center sm:px-12 xs:px-6 py-3 border-2 border-[#C4ED70] font-semibold rounded-full text-[#C4ED70] duration-300 hover:bg-[#C4ED70] hover:text-[#1F2933]"
                    >
                    COMMUNITY
                    </a>
                </div>
                <div className="md:ml-5 ml-1 inline-flex">
                    <a
                    href="#team"
                    className="inline-flex items-center justify-center sm:px-12 xs:px-6 py-3 border-2 border-[#92DDFD] font-semibold rounded-full text-[#92DDFD] duration-300 hover:bg-[#92DDFD] hover:text-[#1F2933]"
                    >
                    TEAM
                    </a>
                </div>
                <div className="md:ml-5 ml-1 inline-flex">
                    <a
                    href="#faq"
                    className="inline-flex items-center justify-center sm:px-12 xs:px-6 py-3 border-2 border-[#FFA694] font-semibold rounded-full text-[#FFA694] duration-300 hover:bg-[#FFA694] hover:text-[#1F2933]"
                    >
                    FAQ
                    </a>
                </div>
            </div>
      </div>
      </>
    )
}