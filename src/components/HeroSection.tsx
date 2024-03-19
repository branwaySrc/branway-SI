import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import BusinessItemCard from "./business-section/BusinessItemCard";
import PartnerList from "./PartnerList";
import { CircleLineSet } from "@/components/animate/LineSet";

export default function HeroSection(props: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Section className="flex items-center justify-center mt-[100px] lg:mt-0">
      <CircleAnimation
        layout="absolute ml-[100px] top-[340px]"
        className={{
          first: "bg-green-700 h-[40px] w-[120px] blur-3xl",
          second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
        }}
      />

      <Container className="z-10 ">
        <Section className="pb-20 my-10 flex flex-col gap-4 items-center border-b-[1px] border-[#FFFFFF30] border-dashed relative bg-black z-[-99] w-full">
          <Box className="flex flex-col gap-2 mb-10 py-10 border-y-[1px] border-dashed border-[#FFFFFF30] w-full ">
            <Text className="text-neutral-400 text-center font-bold text-xl leading-8">
              <span className="text-white">솔루션 파트너 브랜웨이와 함께,</span>
              <br /> 부담없는 온라인 창업을 시작하세요!
            </Text>
          </Box>
          <CircleLineSet />
          <Image
            alt="branway logo"
            src={"/logo.png"}
            width={160}
            height={143}
            draggable={false}
          />
          <>{props.children}</>
        </Section>
        <>
          <BusinessItemCard className="flex flex-col gap-7 px-4" />
          <div className="border-b-[1px] w-full border-[#FFFFFF30] my-20 border-dashed" />
        </>
        <PartnerList />
      </Container>
    </Section>
  );
}
