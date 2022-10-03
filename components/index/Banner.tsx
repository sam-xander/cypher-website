import Button from "../Button";

export default function Banner() {
  return (
    <div className="flex m-8 rounded-3xl h-72 bg-gradient-to-bl from-[#242424] to-[#3e3e3e]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col h-full justify-center items-center space-y-2">
          <h1 className="text-4xl text-[#f3f3f3] font-semibold">
            Time To Scale Your Project?
          </h1>
          <h1 className="text-2xl text-[#e6e6e6] font-semibold">
            Let&apos;s talk.
          </h1>
          <div className="flex w-full pt-8">
            <Button
              href={"/get-assessed"}
              classNames={"bg-[#e6e6e6] text-black"}
              label={"Get Assessed"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
