import React from "react";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function TemplateIntroSection() {
  return (
    <section className="border-t-[1px] w-full mt-20 py-10 border-[#FFFFFF30] overflow-hidden">
      <article className="flex justify-center">
        <div className="flex flex-col gap-5 mb-10 w-[90%]">
          <div>
            <Badge variant="outline">출시예정</Badge>
          </div>
          <h1 className="font-bold text-xl">
            개발의 시작을 출시 단계부터,
            <br />
            서비스 템플릿(앱,웹) 소스로 시작하세요.
          </h1>
          <section className="flex gap-2 my-2">
            <Tags />
          </section>
          <p className="text-sm text-neutral-400 leading-6 z-30">
            <span className="text-white text-base">
              어플리케이션 서비스를 개발하실 예정이신가요?
            </span>
            <br />
            <span className="mt-2 block">
              Expo 환경에서 바로 앱스토어 / 플레이스토어에 등록이 가능한 앱 소스
              템플릿을 구매해서 바로 서비스를 시작하세요. 개발에 필요한
              패치노트와 라이브러리 의존성이 낮은 클린코드를 제공합니다.
            </span>
          </p>
        </div>
      </article>
      <section className="relative overflow-hidden w-full h-[700px] block mt-[-80px] sm:mt-0">
        <Image
          className="absolute right-0 top-14 z-10"
          src={"/service/template_solution.svg"}
          alt="template solution"
          height={440}
          width={440}
        />
        <Image
          className="absolute top-0"
          src={"/service/templategif.gif"}
          alt="template solution"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-t to-transparent via-[#05050580] from-[#050505] w-full h-[80%] absolute  bottom-0 z-10" />
        <div className="bg-gradient-to-b to-transparent via-[#05050580] from-[#050505] w-full h-[80%] absolute  top-0 z-0" />
        <Link
          href={"/imweb"}
          className="absolute font-bold hover:border-[#FFFFFF] text-center bottom-0 w-[90%] max-w-[450px] py-4 bg-black rounded-xl border-[1px] border-[#FFFFFF30] inset-x-0 left-1/2 -translate-x-1/2 z-10"
        >
          템플릿 소스 구매 바로가기
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
