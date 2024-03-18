import Link from "next/link";
import React from "react";

export default function ShortcutButtons() {
  return (
    <div className="flex gap-3 items-center mt-5">
      <Link
        href={"/"}
        className="px-4 py-2 font-bold border-[1px] hover:bg-white hover:text-black border-[#FFFFFF30] rounded-lg"
      >
        카카오채널 문의
      </Link>
      <Link
        href={"/customer-service"}
        className="px-4 py-2 text-sm text-neutral-400 hover:text-white"
      >
        고객센터 바로가기
      </Link>
    </div>
  );
}
