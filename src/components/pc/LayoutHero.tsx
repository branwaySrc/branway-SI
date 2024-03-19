import { Box, Container, Section, Text, Title } from "@/manager/lib/@";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
import { Badge } from "@chakra-ui/react";
import PCMenu from "./PCMenu";
import ShortcutButtons from "../ShortcutButtons";
import { FooterInfo } from "../Footer";

export default function LayoutHero() {
  return (
    <Section className="flex items-center h-screen min-w-[530px">
      <CircleAnimation
        layout="absolute ml-[100px]"
        className={{
          first: "bg-blue-900 h-[180px] w-[180px] blur-3xl opacity-80",
          second: "bg-slate-700 h-[150px] w-[180px] blur-3xl opacity-80",
        }}
      />
      <Container className="pl-10 z-10 w-full">
        <>
          <PCMenu />
        </>
        <Section className="my-10 flex flex-col gap-4">
          <Image
            alt="branway logo"
            src={"/branway_full_logo.png"}
            width={300}
            height={67}
          />
          <Box className="flex flex-col gap-2 ml-1 mb-2">
            <Text className="text-neutral-400">
              온라인 솔루션 파트너 브랜웨이
              <br /> 2024년도를 함께해요!
            </Text>
          </Box>
          <Box className="flex justify-between px-4 rounded-lg gap-4 bg-green-800 text-center text-white text-sm py-2 items-center font-bold bg-clip-padding backdrop-filter backdrop-blur-xl opacity-90">
            <p>아임웹 사이트제작 가격할인 이벤트 진행중!</p>
            <Link href={"/pricing"} className="text-sm">
              <Badge colorScheme="green" className="opacity-[80%]">
                자세히보기
              </Badge>
            </Link>
          </Box>
          <FooterInfo />
        </Section>
      </Container>
    </Section>
  );
}
