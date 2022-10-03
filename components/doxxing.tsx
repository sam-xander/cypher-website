import Button from "./Button";
import HeadingSmall from "./HeadingSmall";

export default function Doxxing() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <HeadingSmall
            subtitle="Doxxing (coming soon)"
            subColor="text-[#FFC670]"
            span1="Simple trust and"
            span2="credibility"
          />
          <Button
            href="/register"
            classNames="bg-white"
            label="Get Started"
          ></Button>
        </div>
      </div>
    </div>
  );
}
