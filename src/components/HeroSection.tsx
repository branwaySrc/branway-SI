import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
import { Badge } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Section className="flex items-center justify-center lg:hidden mt-[100px] border-[1px] border-t-transparent border-[#FFFFFF30]">
      <CircleAnimation
        layout="absolute ml-[100px]"
        className={{
          first: "bg-sky-700 h-[80px] w-[180px] blur-3xl",
          second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
        }}
      />

      <Container className="z-10">
        <Section className="pb-20 my-10 flex flex-col gap-4 items-center border-b-[1px] border-[#FFFFFF30] border-dashed">
          <Box className="flex flex-col gap-2 mb-10 py-10 border-y-[1px] border-dashed border-[#FFFFFF30] w-full">
            <Text className="text-neutral-400 text-center font-bold text-xl leading-8">
              <span className="text-white">솔루션 파트너 브랜웨이와 함께,</span>
              <br /> 부담없는 온라인 창업을 시작하세요!
            </Text>
          </Box>
          <Image
            alt="branway logo"
            src={"/logo_branway.png"}
            width={300}
            height={100}
            draggable={false}
          />
          <div className="flex gap-3 items-center">
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

        <Title className="font-bold flex gap-2 items-center justify-center">
          <LuHeartHandshake color="#FFFFFF30" />
          브랜웨이 파트너
        </Title>
        <Text className="text-center text-neutral-400 text-xs mt-2">
          브랜웨이는 파트너분들과 지속적인 협업을 중시합니다.
        </Text>
        <Section className="grid grid-cols-3 w-[100vw] px-5 relative mt-5">
          <div className="bg-gradient-to-r via-transparent from-black w-[80%] h-full absolute top-0 left-0 ml-5" />
          <div className="bg-gradient-to-l via-transparent from-black w-[80%] h-full absolute top-0 right-0 mr-5" />
          <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/TIMEBLUE.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-0 border-[#FFFFFF10] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/Manrochon.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF10] flex items-center justify-center p-5">
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
      </Container>
    </Section>
  );
}
