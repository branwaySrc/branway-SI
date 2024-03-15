import {
  Container,
  Section,
  Box,
  Title,
  Text,
  Line,
  Inner,
} from "@/manager/lib/@";
import Image from "next/image";
import { SquareBox } from "@/components/imweb/SquareBox";
import CircleAnimation from "@/components/animate/CircleAnimation";
import { AiTwotoneShop } from "react-icons/ai";
import { TbBrandFinder } from "react-icons/tb";
import { LuReplaceAll } from "react-icons/lu";

export default function WhatToMake() {
  return (
    <Container className="mt-[140px] relative">
      <Box className="flex flex-col items-center gap-1">
        <Box className="bg-[#FFFFFF30] h-10 w-[1px] bg-gradient-to-b from-blue-600" />
        <CircleAnimation
          layout="absolute right-0 bottom-0"
          className={{
            first: "bg-blue-500 h-[80px] w-[180px] blur-3xl",
            second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
          }}
        />
        <Container className="z-20 bg-blue-500 p-[0.5px] mt-[-100px] mb-10 rounded-full overflow-hidden">
          <Box className="rounded-full overflow-hidden">
            <Image
              src={"/imweb_name_Logo.jpg"}
              alt="imweb_logo"
              height={55}
              width={55}
            />
          </Box>
        </Container>
        <div className="flex flex-col gap-2">
          <Title className="font-bold text-2xl z-10">
            아임웹으로 사이트 개발하기
          </Title>
          <Text className="text-neutral-400 z-10 text-center text-sm">
            아임웹은 저렴한 월구독제로 <br />
            용도에 따른 다양한 기능을 제공해요
          </Text>
        </div>
      </Box>
      <Box className="flex mt-10 z-10 justify-center">
        <SquareBox
          className="border-r-[1px]"
          title={<AiTwotoneShop size={36} />}
          desc={"쇼핑몰"}
        />
        <SquareBox
          className="border-r-[1px]"
          title={<TbBrandFinder size={36} />}
          desc={"브랜드 사이트"}
        />
        <SquareBox title={<LuReplaceAll size={36} />} desc={"예약 사이트"} />
      </Box>
    </Container>
  );
}
