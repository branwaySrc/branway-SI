import React from "react";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function DesignIntroSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30]">
      <article className="flex justify-center">
        <div className="flex flex-col gap-5 mb-10 w-[90%]">
          <div>
            <Badge variant="outline">출시예정</Badge>
          </div>
          <h1 className="font-bold text-xl">
            매체소개서, 사업소개서 등
            <br />
            눈을 사로잡는 디자인으로 만들어 드려요.
          </h1>
          <section className="flex gap-2 my-2">
            <Tags />
          </section>
          <p className="text-sm text-neutral-400 leading-6">
            <span className="text-white text-base">
              눈에 띄는 매체소개서나 사업계획서가 필요하신가요?
            </span>
            <br />
            <span className="mt-2 block">
              가독성이 높고, 중요한 핵심을 사로잡는 디자인 강조로 눈을
              사로잡아보세요! 다양한 표현력으로 내 사업, 서비스, 상품을 매력있게
              만들어 드려요.
            </span>
          </p>
        </div>
      </article>
      <section className="relative overflow-hidden w-full h-[700px] block mt-[-80px] sm:mt-0">
        <Image src={"/service/design_solution.svg"} alt="imweb" fill />
        <div className="bg-gradient-to-t to-transparent via-[#05050580] from-[#050505] w-full h-[40%] absolute z-10 bottom-0" />
        <Link
          href={"/imweb"}
          className="absolute font-bold hover:border-[#FFFFFF] text-center bottom-0 w-[90%] max-w-[450px] py-4 bg-black rounded-xl border-[1px] border-[#FFFFFF30] inset-x-0 left-1/2 -translate-x-1/2 z-10"
        >
          디자인 솔루션 바로가기
        </Link>
      </section>
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
