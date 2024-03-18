import { Box, Section, Title, Text } from "@/manager/lib/@";
import Image from "next/image";
import React from "react";
import { LuHeartHandshake } from "react-icons/lu";

export default function PartnerList() {
  return (
    <div className="w-full">
      <Title className="font-bold flex gap-2 items-center justify-center">
        <LuHeartHandshake color="#FFFFFF30" />
        브랜웨이 파트너
      </Title>

      <Text className="text-center text-neutral-400 text-sm mt-2">
        브랜웨이는 파트너분들과 지속적인 협업을 중시합니다.
      </Text>
      <Section className="grid grid-cols-3 relative mt-5 w-full">
        <div className="bg-gradient-to-r via-transparent from-[#000000] w-[80%] h-full absolute top-0 left-0" />
        <div className="bg-gradient-to-l via-transparent from-[#000000]  w-[80%] h-full absolute top-0 right-0" />
        <div className="bg-gradient-to-b via-transparent from-[#000000]  w-full h-[30%] absolute top-0" />
        <div className="bg-gradient-to-t via-transparent from-[#000000]  w-full h-[30%] absolute bottom-0" />

        <Box className="border-[1px] border-y-[0px] border-r-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/TIMEBLUE.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-y-0 border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/Manrochon.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-y-[0px] border-l-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/metalux.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/enuri.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-0 border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/cicon.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/film.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/LUXAGAIN.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-0 border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/PHYSIQUE.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/mj.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/mj.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/mj.png"}
            width={100}
            height={15}
          />
        </Box>

        <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
          <Image
            alt="partner logo"
            src={"/partners/mj.png"}
            width={100}
            height={15}
          />
        </Box>
      </Section>
    </div>
  );
}
