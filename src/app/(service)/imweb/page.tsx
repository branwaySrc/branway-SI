import {
  Container,
  Inner,
  AbsoluteBg,
  Box,
  Text,
  Title,
  Section,
  Figure,
  Button,
  Line,
} from "@custom-syntax/HTMLElements";
import { HeroSectionLayout } from "@/components/imweb/HeroSectionLayout";
import { SquareBox } from "@/components/imweb/SquareBox";
import { CONFIG } from "@/manager/statics/@";
import { FiCoffee } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { MdOutlineCloudDone } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { AccordionList } from "@/components/imweb/AccordionList";
import { DrawerPopUp } from "@/components/imweb/DrawerPopUp";
import { WorkProcess } from "@/components/imweb/WorkProcess";
import { Badge, Stack } from "@chakra-ui/react";

import Image from "next/image";
import {
  WorkWithUsDesign,
  WorkWithUsImageAsset,
  WorkWithUsReduceCost,
} from "@/components/imweb/WorkWithUs";
import ToggleBtnShiftSheet from "@/components/imweb/ToggleBtnShiftSheet/ToggleBtnShiftSheet";
import Testimonial from "@/components/imweb/Testimonial";
import WhatToMake from "@/components/imweb/WhatToMake";

export default function Home() {
  return (
    <main className="bg-[#050505] px-2">
      <Inner>
        <Container>
          <HeroSectionLayout
            badgeLabel={CONFIG.IMWEB_BADGE_LABEL}
            title={CONFIG.IMWEB_HERO_TITLE}
            desc={CONFIG.IMWEB_HERO_DESC}
          />
        </Container>
      </Inner>

      <Section className="relative overflow-hidden">
        <Inner>
          <Line className="border-[1px] border-t-transparent border-[#FFFFFF30] relative">
            <Line className="border-r-[1px] border-[#FFFFFF10] absolute w-[50%] h-full bg-gradient-to-b from-[#000000] to-transparent" />
            <Testimonial />
            <WhatToMake />
          </Line>

          <Container className="flex flex-col pb-4 items-center px-4 relative border-[1px] border-[#FFFFFF30] border-t-transparent">
            아임웹이 가능한 영역 설명
          </Container>

          <Line className="border-[1px] border-y-transparent border-[#FFFFFF30]">
            <div>
              <ToggleBtnShiftSheet />
            </div>
            <Container className="px-6 mt-14">
              <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <FiCoffee size={24} />
              </Box>
              <Box className="mt-4 flex flex-col gap-3">
                <Title className="font-bold text-lg">
                  직접 손쉽게 수정이 가능해요.
                </Title>
                <Text className="leading-6 text-slate-400">
                  개발자가 아니여도 유지보수, 관리가 가능한 관리자 모드를 통해
                  DB/알림 메일 및 문자발송/통계/광고/예약/사이트 관리
                </Text>
              </Box>
            </Container>

            <Container className="px-6 mt-14">
              <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <FaReact size={24} />
              </Box>
              <Box className="mt-4 flex flex-col gap-3">
                <Title className="font-bold text-lg">
                  최적화 반응형 사이트를 한번에 만들어요.
                </Title>
                <Text className="leading-6 text-slate-400">
                  개발자가 아니여도 유지보수, 관리가 가능한 관리자 모드를 통해
                  DB/알림 메일 및 문자발송/통계/광고/예약/사이트 관리
                </Text>
              </Box>
            </Container>

            <Container className="px-6 mt-14">
              <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <MdOutlineCloudDone size={24} />
              </Box>
              <Box className="mt-4 flex flex-col gap-3">
                <Title className="font-bold text-lg">
                  오픈 플랫폼에 쉽게 연동하실 수 있어요.
                </Title>
                <Text className="leading-6 text-slate-400">
                  개발자가 아니여도 유지보수, 관리가 가능한 관리자 모드를 통해
                  DB/알림 메일 및 문자발송/통계/광고/예약/사이트 관리
                </Text>
              </Box>
            </Container>

            <Container className="px-6 mt-14">
              <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <IoChatbubbleEllipsesOutline size={24} />
              </Box>
              <Box className="mt-4 flex flex-col gap-3">
                <Title className="font-bold text-lg">
                  실시간 채팅을 연결하실 수 있어요.
                </Title>
                <Text className="leading-6 text-slate-400">
                  개발자가 아니여도 유지보수, 관리가 가능한 관리자 모드를 통해
                  DB/알림 메일 및 문자발송/통계/광고/예약/사이트 관리
                </Text>
              </Box>
            </Container>

            <Container className="px-6 mt-14">
              <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <BsShop size={22} />
              </Box>
              <Box className="mt-4 flex flex-col gap-3">
                <Title className="font-bold text-lg">
                  결제는 물론, 쇼핑몰에 필요한 기능이 다 있어요.
                </Title>
                <Text className="leading-6 text-slate-400">
                  개발자가 아니여도 유지보수, 관리가 가능한 관리자 모드를 통해
                  DB/알림 메일 및 문자발송/통계/광고/예약/사이트 관리
                </Text>
              </Box>
            </Container>

            <Container className="flex flex-col items-center px-4 relative">
              <Box className="h-[100px] w-[2px] bg-gradient-to-t from-green-500 mb-[-2px] mt-20" />
              <Box className="bg-green-500 p-3 rounded-full" />
              <Box className="flex flex-col items-center mt-10 gap-3">
                <Title className="font-bold text-2xl">
                  브랜웨이 X 아임웹의 장점
                </Title>
                <Text className="text-slate-400">
                  고객님께서 필요하신 것들을 아낌없이 드려요.
                </Text>
              </Box>
            </Container>
            <Box className="flex justify-center mt-5">
              <Box className="border-[1px] border-[#FFFFFF30] p-2 rounded-lg bg-black">
                <Stack direction="row">
                  <Badge colorScheme="blue" className="opacity-[80%]">
                    아이디어
                  </Badge>
                  <Badge colorScheme="green" className="opacity-[80%]">
                    디자인
                  </Badge>
                  <Badge
                    colorScheme="yellow"
                    opacity={10}
                    className="opacity-[80%]"
                  >
                    애셋
                  </Badge>
                  <Badge
                    colorScheme="purple"
                    opacity={10}
                    className="opacity-[80%]"
                  >
                    이벤트
                  </Badge>
                </Stack>
              </Box>
            </Box>
            <Container className="flex flex-col items-center gap-4">
              <WorkWithUsDesign />
              <WorkWithUsReduceCost />
              <WorkWithUsImageAsset />
            </Container>

            <Container className="flex flex-col items-center py-10 bg-stone-950 border-[1px] border-neutral-900 rounded-3xl mx-4 mt-20">
              <Figure>
                <Image
                  src={"/portfolio.png"}
                  alt="branway portfolio"
                  width={210}
                  height={250}
                />
              </Figure>
              <Box className="h-[150px] w-full mt-[-100px] bg-gradient-to-t via-stone-950 from-stone-950 blur-sm z-0" />
              <Box className="mt-[-60px] z-10 flex flex-col gap-3 items-center">
                <Text className="text-lg font-bold text-center">
                  브랜웨이 포트폴리오를 보세요.
                </Text>
                <Text className="text-center text-slate-400 max-w-[80%] leading-6">
                  브랜웨이 포트폴리오를 보세요. 지금 안보면 내려갑니다
                  알겠습니까.
                </Text>
              </Box>
              <>
                <DrawerPopUp />
              </>
            </Container>
            <>
              <WorkProcess />
            </>
            <Container className="flex flex-col items-center px-4 relative">
              <Box className="h-[100px] w-[2px] bg-gradient-to-t from-yellow-500 mb-[-2px] mt-20" />
              <Box className="bg-yellow-500 p-3 rounded-full" />
              <Box className="flex flex-col items-center mt-10 gap-3">
                <Title className="font-bold text-2xl">
                  의뢰전 무엇이 필요한지 알려드릴게요!
                </Title>
                <Text className="text-slate-400 mb-8">
                  없으셔도 괜찮아요, 함께 만들어 나가보아요!
                </Text>
                <Image
                  src={"/branwayQNA.png"}
                  alt="thumbUp"
                  width={240}
                  height={240}
                  className="mb-[-180px]"
                />
              </Box>
              <Figure className="relative rounded-2xl overflow-hidden border-[1px] border-zinc-900">
                <Image
                  src={"/imweb_logo.jpg"}
                  alt="imweb image"
                  height={500}
                  width={500}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <Box className="flex gap-3 absolute top-0 m-6">
                  <Box className="bg-rose-500 p-1 rounded-full"></Box>
                  <Box className="bg-green-500 p-1 rounded-full"></Box>
                  <Box className="bg-yellow-500 p-1 rounded-full"></Box>
                </Box>
                <Container className="absolute top-0 right-4 mt-4">
                  <Box className="border-2 border-zinc-950 bg-[#FFFFFF05] h-9 w-[300px] rounded-md flex items-center">
                    <Text className="text-sm text-slate-300 mb-1 px-4">
                      imweb.me
                    </Text>
                  </Box>
                </Container>
              </Figure>
            </Container>

            <Box className="flex flex-col items-center mt-20 gap-3">
              <Title className="font-bold text-2xl">운영을 위해 해왔어요</Title>
              <Text className="text-slate-400 max-w-[80%] text-center leading-6">
                수 년간 고객님들과 소통을 하면서 어려워 하시는 내용들을
                가이드라인으로 전달해 드려요.
              </Text>
            </Box>

            <Container className="mt-20 flex justify-center">
              <Box className="w-full">
                <AccordionList />
              </Box>
            </Container>
            <Container className="h-[200px]" />
          </Line>
        </Inner>
      </Section>
    </main>
  );
}
