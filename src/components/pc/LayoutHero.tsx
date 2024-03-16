import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
import { Badge } from "@chakra-ui/react";
import PCMenu from "./PCMenu";
import PCButton from "./PCButton";

export default function LayoutHero() {
  return (
    <Section className="flex items-center h-screen min-w-[530px">
      <CircleAnimation
        layout="absolute ml-[100px]"
        className={{
          first: "bg-sky-700 h-[80px] w-[180px] blur-3xl",
          second: "bg-slate-600 h-[150px] w-[80px] blur-3xl",
        }}
      />
      <Container className="pl-10 z-10 w-full">
        <>
          <PCMenu />
        </>
        <Section className="my-10 flex flex-col gap-4">
          <Image
            alt="branway logo"
            src={"/logo_branway.png"}
            width={300}
            height={100}
          />
          <Box className="flex flex-col gap-2">
            <Text className="text-neutral-400">
              2024년도 새로운 솔루션 파트너 브랜웨이와 함께,
              <br /> 부담없는 온라인 창업을 시작하세요!
            </Text>
          </Box>
          <Box className="flex justify-between px-4 rounded-lg bg-green-800 text-center text-white text-sm py-2 items-center font-bold bg-clip-padding backdrop-filter backdrop-blur-xl opacity-90">
            <p>아임웹 사이트제작 가격할인 이벤트 진행중!</p>
            <Link href={"/pricing"} className="text-sm">
              <Badge colorScheme="green" className="opacity-[80%]">
                자세히보기
              </Badge>
            </Link>
          </Box>
          <PCButton />
        </Section>
        <Title className="mb-2 font-bold flex gap-2 items-center">
          <LuHeartHandshake color="#FFFFFF30" />
          브랜웨이 파트너
        </Title>
        <Section className="grid grid-cols-3">
          <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/TIMEBLUE.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-0 border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/Manrochon.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/metalux.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/enuri.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-0 border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/cicon.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/film.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-r-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/LUXAGAIN.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-0 border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/PHYSIQUE.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px] border-b-[0px] border-l-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/mj.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px]  border-r-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/mj.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px]  border-[#FFFFFF30] flex items-center justify-center p-5">
            <Image
              alt="partner logo"
              src={"/partners/mj.png"}
              width={100}
              height={15}
            />
          </Box>
          <Box className="border-[1px]  border-l-[0px] border-[#FFFFFF30] flex items-center justify-center p-5">
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
