import { ArrowDownIcon } from "@heroicons/react/outline";

export default function ScrollIcon() {
  return (
    <div className="grid justify-center sticky bottom-10 text-[#e6e6e6]/100 space-y-4 z-40">
      <p className="text-sm">Scroll For More</p>
      <div className="flex justify-center">
        <ArrowDownIcon className="h-8 animate-bounce" />
      </div>
    </div>
  );
}
