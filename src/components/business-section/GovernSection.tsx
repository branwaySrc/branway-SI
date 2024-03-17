import { Badge } from "@chakra-ui/react";
import React from "react";

export default function GovernSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <div className="flex flex-col items-center gap-2">
        <div>
          <Badge variant="outline">지원마감</Badge>
        </div>
        <h1 className="font-bold text-xl text-center">
          정부지원금을 위한 Starter 패키지
          <br />
          프로토타입부터 기획안 및 사업계획서까지
        </h1>
      </div>
    </section>
  );
}
