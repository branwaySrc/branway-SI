import React from "react";
import { Badge } from "@chakra-ui/react";

export default function ImwebIntroSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <div className="flex flex-col items-center gap-2">
        <div>
          <Badge variant="outline" colorScheme="green">
            이벤트
          </Badge>
        </div>
        <h1 className="font-bold text-xl text-center">
          아임웹을 통해 사업에 필요한
          <br />
          강력한 홈페이지를 만들어 드립니다.
        </h1>
      </div>
    </section>
  );
}
