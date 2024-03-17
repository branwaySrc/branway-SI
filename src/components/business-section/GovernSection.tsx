import React from "react";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function GovernSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <article className="flex justify-center">
        <div className="flex flex-col gap-5 mb-10 w-[90%]">
          <div>
            <Badge variant="outline">지원마감</Badge>
          </div>
          <h1 className="font-bold text-xl">
            정부지원금을 위한 Starter 패키지
            <br />
            프로토타입부터 기획안 및 사업계획서까지
          </h1>
          <section className="flex gap-2 my-2">
            <Tags />
          </section>
          <p className="text-sm text-neutral-400 leading-6 z-30">
            <span className="text-white text-base">
              혹시, 플랫폼이나 서비스 창업을 위해 정부지원사업을 준비
              중이신가요?
            </span>
            <br />
            <span className="mt-2 block">
              내 사업을 보여줄 수 있는 앱 프로토타입부터, 개발에 필요한 기획안,
              디자인, 그리고 디자인된 계획서와 사이트 플러스+ 아이덴티티
              확립까지! 사업에 필요한 스타트를 함께 만들어요!
            </span>
          </p>
        </div>
      </article>
      <section className="relative overflow-hidden w-full h-[600px] block mt-[-80px] sm:mt-0">
        <div className="absolute bg-gradient-to-b via-[#050505] from-[#050505] h-[50%] w-full z-10" />
        <Image
          src={"/service/govern_solution.svg"}
          alt="imweb"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t to-transparent via-[#05050580] from-[#050505] w-full h-[40%] absolute z-10 bottom-0" />
        <Link
          href={"/imweb"}
          className="absolute font-bold hover:border-[#FFFFFF] text-center bottom-0 w-[90%] max-w-[450px] py-4 bg-black rounded-xl border-[1px] border-[#FFFFFF30] inset-x-0 left-1/2 -translate-x-1/2 z-10"
        >
          창업패키지 솔루션 바로가기
        </Link>
      </section>
    </section>
  );
}

function Tags() {
  return (
    <>
      <Badge rounded={"full"} colorScheme="purple">
        스타터 패키지
      </Badge>
      <Badge rounded={"full"} colorScheme="yellow">
        정부지원사업
      </Badge>
      <Badge rounded={"full"} colorScheme="green">
        프로토타입
      </Badge>
      <Badge rounded={"full"} colorScheme="blue">
        사업계획서
      </Badge>
    </>
  );
}
