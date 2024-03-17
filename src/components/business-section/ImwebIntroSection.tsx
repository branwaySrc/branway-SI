import React from "react";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ImwebIntroSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <div className="flex flex-col items-center gap-7">
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
        <section className="flex gap-2 justify-center my-2">
          <Tags />
        </section>
        <p className="text-sm text-neutral-400 text-center px-12 leading-6">
          쇼핑몰 창업, 브랜드 런칭, 회사소개를 위한 홈페이지가 필요하신가요?
          <br />
          아임웹은 좋은선택이 될 수 있습니다. 저렴한 월 비용으로 PC부터
          모바일웹까지 한 번에 만들고 마케팅 채널 등 다양한 매체를 편리하게
          관리하세요.
        </p>
        <section className="relative overflow-hidden w-full h-[700px] block mt-[-80px] mx-2 sm:mt-0">
          <Image src={"/imweb/imweb_solution_image.svg"} alt="imweb" fill />
          <div className="bg-gradient-to-t to-transparent via-[#05050580] from-[#050505] w-full h-[40%] absolute z-10 bottom-0" />
          <Link
            href={"/imweb"}
            className="absolute font-bold hover:border-[#FFFFFF] text-center bottom-0 w-[90%] max-w-[450px] py-4 bg-black rounded-xl border-[1px] border-[#FFFFFF30] inset-x-0 left-1/2 -translate-x-1/2 z-10"
          >
            솔루션 바로가기
          </Link>
        </section>
      </div>
    </section>
  );
}

function Tags() {
  return (
    <>
      <Badge rounded={"full"} colorScheme="purple">
        스타터
      </Badge>
      <Badge rounded={"full"} colorScheme="yellow">
        쇼핑몰
      </Badge>
      <Badge rounded={"full"} colorScheme="green">
        회사소개
      </Badge>
      <Badge rounded={"full"} colorScheme="blue">
        브랜드런칭
      </Badge>
      <Badge rounded={"full"} colorScheme="green">
        가성비
      </Badge>
    </>
  );
}
