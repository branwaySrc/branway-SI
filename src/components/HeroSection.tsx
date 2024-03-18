import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
import BusinessItemCard from "./business-section/BusinessItemCard";
import PartnerList from "./PartnerList";
import { CircleLineSet } from "@/components/animate/LineSet";

export default function HeroSection() {
  return (
    <Section className="flex items-center justify-center lg:hidden mt-[100px]">
      <CircleAnimation
        layout="absolute ml-[100px] top-[340px]"
        className={{
          first: "bg-green-700 h-[40px] w-[120px] blur-3xl",
          second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
        }}
      />

      <Container className="z-10">
        <Section className="pb-20 my-10 flex flex-col gap-4 items-center border-b-[1px] border-[#FFFFFF30] border-dashed relative">
          <Box className="flex flex-col gap-2 mb-10 py-10 border-y-[1px] border-dashed border-[#FFFFFF30] w-full">
            <Text className="text-neutral-400 text-center font-bold text-xl leading-8">
              <span className="text-white">솔루션 파트너 브랜웨이와 함께,</span>
              <br /> 부담없는 온라인 창업을 시작하세요!
            </Text>
          </Box>
          <CircleLineSet />
          <Image
            alt="branway logo"
            src={"/branway_icon_dark.svg"}
            width={120}
            height={120}
            draggable={false}
          />
          <div className="flex gap-3 items-center mt-5">
            <Link
              href={"/"}
              className="px-4 py-2 font-bold border-[1px] hover:bg-white hover:text-black border-[#FFFFFF30] rounded-lg"
            >
              카카오채널 문의
            </Link>
            <Link
              href={"/acquire"}
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white"
            >
              고객센터 바로가기
            </Link>
          </div>
        </Section>
        <>
          <BusinessItemCard className="flex flex-col gap-7 px-4 mx-4" />
          <div className="border-b-[1px] w-full border-[#FFFFFF30] my-20 border-dashed" />
        </>
        <PartnerList />
      </Container>
    </Section>
  );
}
