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
          정부지원금을 가로채는 방법
          <br />
          서비스 템플릿(앱,웹) 소스로 시작하세요.
        </h1>
      </div>
    </section>
  );
}
