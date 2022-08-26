import Button from "../components/button"
import HeadingSmall from "../components/heading-small"

export default function Doxxing() {
    return (
      <div className="w-full mt-10">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <HeadingSmall subtitle='Doxxing (coming soon)' subColor='text-[#FFC670]' span1='Simple trust and' span2='credibility' />
            <Button href="https://docs.cypherseals.io/docs/doxxing" bgColor="bg-[#FFC670]" label="More on doxxing" />
          </div>
        </div>
      </div>
    )
  }
  