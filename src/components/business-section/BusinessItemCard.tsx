import React from "react";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import { SiReact } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { TiSpannerOutline } from "react-icons/ti";

export default function BusinessItemCard(props: { className?: string }) {
  return (
    <div className={`${props.className}`}>
      <section className="border-[1px] border-[#FFFFFF30] rounded-2xl p-2 w-full hover:border-[#FFFFFF70] border-dashed">
        <div className="flex flex-col rounded-lg justify-between bg-gradient-to-r from-black to-neutral-950 hover:to-neutral-900 h-[230px] border-[#FFFFFF10] border-[1px] p-4">
          <Image
            height={20}
            width={80}
            src={"/imweb_transparent.png"}
            alt="imweb"
          />
          <article className="flex flex-col gap-2">
            <div>
              <Badge variant="outline" colorScheme="green">
                이벤트
              </Badge>
            </div>
            <p className="font-bold">아임웹 사이트 제작 솔루션</p>
            <p className="text-sm text-neutral-400 max-w-[400px]">
              코딩없이 손쉽게 관리할 수 있는 아임웹 사이트 솔루션을 통해
              저렴하지만 빠르고 강력한 홈페이지, 쇼핑몰, 마케팅 등 원하는
              사이트를 제작해드려요!
            </p>
          </article>
        </div>
      </section>
      <section className="border-[1px] border-[#FFFFFF30] rounded-2xl p-2 w-full hover:border-[#FFFFFF70] border-dashed">
        <div className="flex flex-col rounded-lg justify-between bg-gradient-to-r from-black to-neutral-950 hover:to-neutral-900 h-[230px] border-[#FFFFFF10] border-[1px] p-4">
          <div className="flex gap-2">
            <SiReact size={30} color="#0068CA" />
            <TbBrandRedux size={30} color="#AD00A5" />
            <BiLogoPostgresql size={30} color="#005DD6" />
            <FaAws size={30} color="#FFFFFF" />
          </div>
          <article className="flex flex-col gap-2">
            <div>
              <Badge variant="outline">출시예정</Badge>
            </div>
            <p className="font-bold">올인원 풀스택 서비스 템플릿</p>
            <p className="text-sm text-neutral-400 max-w-[400px]">
              풀스택 서비스 템플릿을 구매해서 바로 서비스로 런칭하세요! 최신
              스택과 버전, 그리고 템플릿 관련 패치노트를 통해 쉬운 커스텀을
              지원해요!
            </p>
          </article>
        </div>
      </section>
      <section className="border-[1px] border-[#FFFFFF30] rounded-2xl p-2 w-full hover:border-[#FFFFFF70] border-dashed">
        <div className="flex flex-col rounded-lg justify-between bg-gradient-to-r from-black to-neutral-950 hover:to-neutral-900 h-[230px] border-[#FFFFFF10] border-[1px] p-4">
          <div className="flex gap-2 items-center">
            <FaFigma size={30} />
            <DiIllustrator size={34} />
            <DiPhotoshop size={34} />
          </div>
          <article className="flex flex-col gap-2">
            <div>
              <Badge variant="outline">출시예정</Badge>
            </div>
            <p className="font-bold">브랜딩/디자인 솔루션</p>
            <p className="text-sm text-neutral-400 max-w-[400px]">
              사업계획서, 매체소개서 및 앱디자인을 강력하게! 디자인 패키지
              솔루션으로 해결하세요!
            </p>
          </article>
        </div>
      </section>
      <section className="border-[1px] border-[#FFFFFF30] rounded-2xl p-2 w-full hover:border-[#FFFFFF70] border-dashed">
        <div className="flex flex-col rounded-lg justify-between bg-gradient-to-r from-black to-neutral-950 hover:to-neutral-900 h-[230px] border-[#FFFFFF10] border-[1px] p-4">
          <TiSpannerOutline size={40} />
          <article className="flex flex-col gap-2">
            <div>
              <Badge variant="outline" colorScheme="yellow">
                유지보수
              </Badge>
            </div>
            <p className="font-bold">지속적인 관리 응대 시스템</p>
            <p className="text-sm text-neutral-400 max-w-[400px]">
              브랜웨이는 파트너분들의 꾸준한 운영관리를 지원하기 위해 지속적인
              담당자 소통을 지원하고 있어요.
            </p>
          </article>
        </div>
      </section>
      <section className="col-span-2 border-[1px] border-[#FFFFFF30] rounded-2xl p-2 w-full hover:border-[#FFFFFF70] border-dashed">
        <div className="flex flex-col rounded-lg justify-between bg-gradient-to-r from-black to-neutral-950 hover:to-neutral-900 h-[230px] border-[#FFFFFF10] border-[1px] p-4">
          <Image
            height={40}
            width={110}
            src={"/K_STARTUP_Logo.png"}
            alt="k-startup"
          />
          <article className="flex flex-col gap-2">
            <div>
              <Badge variant="outline">지원마감</Badge>
            </div>
            <p className="font-bold">정부지원 패키지 솔루션</p>
            <p className="text-sm text-neutral-400 max-w-[400px]">
              서비스 프로토타입, 디자인 목업, 사업계획안을 컨설팅과 함께
              제공하는 패키지입니다. 정부지원금을 목표로 하시는 대표님들에게
              적합한 솔루션이에요!
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
