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
} from "@custom-syntax/HTMLElements";
import { Navigation } from "@/components/Navigation";
import { HeroSectionLayout } from "@/components/container/HeroSectionLayout";
import { SquareBox } from "@/components/container/SquareBox";
import { CONFIG } from "@/manager/statics/@";
import { FiCoffee } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { MdOutlineCloudDone } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import Image from "next/image";
import { AccordionList } from "@/components/container/AccordionList";
import { DrawerPopUp } from "@/components/container/DrawerPopUp";
import { EventDrawer } from "@/components/container/EventDrawer";

export default function Home() {
  return (
    <main className="bg-[#050505] px-2">
      <Navigation />
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
          <Section className="border-[1px] border-t-transparent border-[#FFFFFF18] relative">
            <Section className="border-r-[1px] border-[#FFFFFF18] absolute w-[50%] h-full bg-gradient-to-b from-[#000000] to-transparent" />
            <Section className="absolute w-[50%] h-full right-0 bg-gradient-to-b from-[#000000] to-transparent" />
            <Container className="mt-[200px]">
              <Box className="flex flex-col items-center gap-2">
                <Title className="font-bold text-2xl z-10">
                  {CONFIG.IMWEB_VALID_SECTION_TITLE}
                </Title>
                <Text className="text-slate-400 z-10">
                  {CONFIG.IMWEB_VALID_SECTION_DESC}
                </Text>
              </Box>
              <Box className="flex mt-10 z-10 justify-center">
                <SquareBox
                  className="border-r-[1px]"
                  title={CONFIG.IMWEB_VALID_SERVICES[0].title}
                  desc={CONFIG.IMWEB_VALID_SERVICES[0].desc}
                />
                <SquareBox
                  className="border-r-[1px]"
                  title={CONFIG.IMWEB_VALID_SERVICES[1].title}
                  desc={CONFIG.IMWEB_VALID_SERVICES[1].desc}
                />
                <SquareBox
                  title={CONFIG.IMWEB_VALID_SERVICES[2].title}
                  desc={CONFIG.IMWEB_VALID_SERVICES[2].desc}
                />
              </Box>
            </Container>
          </Section>
          <Container className="flex flex-col pb-4 items-center px-4 relative border-[1px] border-[#FFFFFF18] border-t-transparent">
            <Box className="h-[100px] w-[2px] bg-gradient-to-t from-rose-500 mb-[-2px] mt-20" />
            <Box className="bg-rose-500 p-3 rounded-full" />
            <Box className="flex flex-col items-center mt-10 gap-2">
              <Title className="font-bold text-2xl">
                {CONFIG.IMWEB_VALID_SECTION_TITLE}
              </Title>
              <Text className="text-slate-400 mb-8">
                {CONFIG.IMWEB_VALID_SECTION_DESC}
              </Text>
              <Image
                src={"/branwayTell.png"}
                alt="curious face image"
                width={124}
                height={180}
                className="mb-[-150px]"
              />
            </Box>
            <Figure className="relative overflow-hidden border-[1px] border-[#FFFFFF18] rounded-t-xl">
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
                <Box
                  breakClass={{ lg: "lg:w-[380px]", sm: "sm:w-[320px]" }}
                  className="border-2 border-zinc-950 bg-[#FFFFFF05] h-9 w-[250px] rounded-md flex items-center"
                >
                  <Text className="text-sm text-slate-300 mb-1 px-4">
                    imweb.me
                  </Text>
                </Box>
              </Container>
            </Figure>
          </Container>
          <Box className="flex flex-col items-center mt-20 gap-2">
            <Image
              src={"/thumbup.png"}
              alt="thumbUp"
              width={120}
              height={120}
            />
            <Title className="font-bold text-2xl mt-4">
              {CONFIG.IMWEB_VALID_REASONS_TITLE}
            </Title>
            <Text className="text-slate-400">
              {CONFIG.IMWEB_VALID_REASONS_DESC}
            </Text>
          </Box>
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
              <Text className="text-slate-400 mb-10">
                고객님께서 필요하신 것들을 아낌없이 드려요.
              </Text>
              <Image
                src={"/branwayUp.png"}
                alt="happy women image"
                width={240}
                height={240}
                className="mb-[-150px]"
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
                <Box
                  breakClass={{ lg: "lg:w-[380px]", sm: "sm:w-[320px]" }}
                  className="border-2 border-zinc-950 bg-[#FFFFFF05] h-9 w-[250px] rounded-md flex items-center"
                >
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
          <Box className="flex flex-col items-center mt-20 gap-3">
            <Title className="font-bold text-2xl">
              가장 빠르고, 저렴할거에요
            </Title>
            <Text className="text-slate-400 max-w-[80%] text-center leading-6">
              1주일 내로 모든 사이트 작업과 오픈을 진행해 드려요.
            </Text>
          </Box>
          <Box className="flex flex-col items-center mt-20 gap-3">
            <Title className="font-bold text-2xl">
              모든 애셋은 유료를 사용해요
            </Title>
            <Text className="text-slate-400 max-w-[80%] text-center leading-6">
              절대 무료 이미지/동영상을 사용하지 않아요.
              <br />
              저작권은 걱정하시지 않아도 되요. 그리고 요청에 따라, 다양한 디자인
              애셋을 제공해 드려요.
            </Text>
          </Box>
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
                브랜웨이 포트폴리오를 보세요. 지금 안보면 내려갑니다 알겠습니까.
              </Text>
            </Box>
            <>
              <DrawerPopUp />
            </>
          </Container>
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
            <Box className=" w-[95%]">
              <AccordionList
                tabOne={{ title: "", desc: "" }}
                tabTwo={{ title: "", desc: "" }}
                tabThree={{ title: "", desc: "" }}
              />
            </Box>
          </Container>
        </Inner>
      </Section>
      <EventDrawer />
      <Container className="h-[200px]" />
    </main>
  );
}
