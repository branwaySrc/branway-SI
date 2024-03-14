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
import { CONFIG } from "@/manager/statics/@";
import { AccordionList } from "@/components/imweb/AccordionList";
import { DrawerPopUp } from "@/components/imweb/DrawerPopUp";
import { WorkProcess } from "@/components/imweb/WorkProcess";
import { Badge, Stack } from "@chakra-ui/react";
import Link from "next/link";

import Image from "next/image";
import {
  WorkWithUsDesign,
  WorkWithUsImageAsset,
  WorkWithUsReduceCost,
} from "@/components/imweb/WorkWithUs";
import ToggleBtnShiftSheet from "@/components/imweb/ToggleBtnShiftSheet/ToggleBtnShiftSheet";
import Testimonial from "@/components/imweb/Testimonial";
import WhatToMake from "@/components/imweb/WhatToMake";
import ReasonForRecommend from "@/components/imweb/ReasonForRecommend";

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
          <Container className="flex flex-col relative border-[1px] border-[#FFFFFF30] border-t-transparent">
            <ReasonForRecommend />
          </Container>
          <Line className="border-[1px] border-y-transparent border-[#FFFFFF30]">
            <div>
              <ToggleBtnShiftSheet />
            </div>
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
