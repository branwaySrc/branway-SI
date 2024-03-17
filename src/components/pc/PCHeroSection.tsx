import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
import { Badge } from "@chakra-ui/react";
import BusinessItemCard from "../business-section/BusinessItemCard";
import PartnerList from "../PartnerList";

export default function PCHeroSection() {
  return (
    <Section className="items-center justify-center hidden lg:flex">
      <CircleAnimation
        layout="absolute top-10 ml-[100px]"
        className={{
          first: "bg-sky-700 h-[80px] w-[200px] blur-3xl",
          second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
        }}
      />

      <Container className="z-10 w-full">
        <Section className="pb-20 my-10 flex flex-col gap-4 items-center border-b-[1px] border-[#FFFFFF30] border-dashed">
          <Box className="flex flex-col gap-2 mb-10 py-10 border-y-[1px] border-dashed border-[#FFFFFF30] w-full">
            <Text className="text-neutral-400 text-center font-bold text-xl leading-8">
              <span className="text-white">솔루션 파트너 브랜웨이와 함께,</span>
              <br /> 부담없는 온라인 창업을 시작하세요!
            </Text>
          </Box>
          <BusinessItemCard className="grid grid-cols-2 w-full px-4 gap-2" />
        </Section>
        <PartnerList />
      </Container>
    </Section>
  );
}
