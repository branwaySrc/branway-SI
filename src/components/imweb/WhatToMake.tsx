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
        <Title className="font-bold text-2xl z-10">
          아임웹으로 뭘 만드는가
        </Title>
        <Text className="text-neutral-400 z-10">
          아임웹은 이유가 있다. 왜 아임웹인가
        </Text>
      </Box>
      <Box className="flex mt-10 z-10 justify-center">
        <SquareBox
          className="border-r-[1px]"
          title={"쇼핑몰"}
          desc={"쇼핑몰을 만든다."}
        />
        <SquareBox
          className="border-r-[1px]"
          title={"브랜드페이지"}
          desc={"브랜드를 설명한다."}
        />
        <SquareBox title={"예약사이트"} desc={"예약사이트를 만든다."} />
      </Box>
    </Container>
  );
}
