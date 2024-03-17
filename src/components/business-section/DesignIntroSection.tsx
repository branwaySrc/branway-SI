import { Badge } from "@chakra-ui/react";
import React from "react";

export default function DesignIntroSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <div className="flex flex-col items-center gap-2">
        <div>
          <Badge variant="outline">출시예정</Badge>
        </div>
        <h1 className="font-bold text-xl text-center">
          매체소개서, 사업소개서 등
          <br />
          눈을 사로잡는 디자인으로 만들어 드려요.
        </h1>
      </div>
    </section>
  );
}
