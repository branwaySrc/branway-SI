import {
  Box,
  Section,
  Inner,
  Text,
  Title,
  Line,
  Container,
} from "@/manager/lib/@";
import Image from "next/image";
import { FaqList } from "@/components/acquire/faq";
import { ImGooglePlus3 } from "react-icons/im";
import { SiKakaotalk } from "react-icons/si";
import { Badge } from "@chakra-ui/react";
import { EmailToast } from "@/components/acquire/emailToast";
import { MdChevronRight } from "react-icons/md";
import { KakaoPopover } from "@/components/acquire/kakaoPopover";
import ClosingSection from "@/components/ClosingSection";

const AcquirePage = () => {
  return (
    <Section className="min-h-[85vh] bg-zinc-950 mt-[100px] lg:mt-0">
      <Inner>
        <Container className="flex flex-col items-center border-[1px] border-[#FFFFFF30] px-2 py-10 mt-10 lg:mt-0 bg-neutral-950">
          <Title className=" font-bold text-neutral-400 text-center">
            고객문의센터
          </Title>
          <Text className="text-2xl text-center mt-2 font-bold">
            무엇을 도와드릴까요?
          </Text>
        </Container>
        <Container className="flex w-full bg-black">
          <Box className="border-[1px] border-t-transparent border-r-transparent border-[#FFFFFF30] w-full py-10 pl-6">
            <Title className="font-bold text-2xl">
              <Image
                src={"/animation/talk.gif"}
                alt="talk"
                width={80}
                height={50}
              />
              브랜웨이
              <br /> 소통창구
            </Title>
            <Text className="mt-4">
              <span className="font-bold text-sky-500">
                운영시간
                <br />
              </span>
              10:00 ~ 20:00
              <br />
              연중무휴
            </Text>
          </Box>
          <Container className="border-[1px] border-t-transparent border-[#FFFFFF30] w-full py-10 ">
            <Box className="mx-4 py-4 border-[1px] border-[#FFFFFF30] rounded-tr-xl bg-[#fbff022f] flex relative">
              <Line className="border-[1px] border-[#FFFFFF30] rounded-full p-4">
                <div className="absolute border-r-[1px] border-dashed w-[25%] h-full border-[#fde50f9a] z-10 top-0 left-0" />
                <div className="absolute border-r-[1px] border-dashed w-[50%] h-full border-[#fde50f9a] z-10 top-0 left-0" />
                <div className="absolute border-r-[1px] border-dashed w-[75%] h-full border-[#fde50f9a] z-10 top-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[75%] border-[#fde50f9a] z-10 bottom-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[50%] border-[#fde50f9a] z-10 bottom-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[25%] border-[#fde50f9a] z-10 bottom-0 left-0" />
                <Line className="border-[1px] border-[#FFFFFF30] rounded-full p-2">
                  <Line className="border-[1px] border-[#FFFFFF30] rounded-full">
                    <SiKakaotalk
                      size={50}
                      color="white"
                      className="rounded-full p-2"
                    />
                  </Line>
                </Line>
              </Line>
            </Box>
            <Box className="mx-4 py-4 text-center border-[1px] border-[#FFFFFF30]">
              <KakaoPopover>
                카카오톡 상담하기 <MdChevronRight size={24} />
              </KakaoPopover>
            </Box>
            <div className="py-4" />
            <Box className="mx-4 py-4 border-[1px] border-[#FFFFFF30] rounded-tr-xl bg-[#FFFFFF30] flex relative">
              <Line className="border-[1px] border-[#FFFFFF30] rounded-full p-4">
                <div className="absolute border-r-[1px] border-dashed w-[25%] h-full border-[#FFFFFF30] z-10 top-0 left-0" />
                <div className="absolute border-r-[1px] border-dashed w-[50%] h-full border-[#FFFFFF30] z-10 top-0 left-0" />
                <div className="absolute border-r-[1px] border-dashed w-[75%] h-full border-[#FFFFFF30] z-10 top-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[75%] border-[#FFFFFF30] z-10 bottom-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[50%] border-[#FFFFFF30] z-10 bottom-0 left-0" />
                <div className="absolute border-t-[1px] border-dashed w-full h-[25%] border-[#FFFFFF30] z-10 bottom-0 left-0" />
                <Line className="border-[1px] border-[#FFFFFF30] rounded-full p-2">
                  <Line className="border-[1px] border-[#FFFFFF30] rounded-full">
                    <ImGooglePlus3
                      size={50}
                      color="white"
                      className="rounded-full p-2"
                    />
                  </Line>
                </Line>
              </Line>
            </Box>
            <Box className="mx-4 py-4 text-center border-[1px] border-[#FFFFFF30]">
              <EmailToast>
                이메일로 제안하기 <MdChevronRight size={24} />
              </EmailToast>
            </Box>
          </Container>
        </Container>
        <Section>
          <Container className="border-[1px] border-[#FFFFFF30] border-t-transparent">
            <Box className="py-4 bg-neutral-950 flex items-center justify-center gap-2">
              <Title className="text-center font-bold text-lg mb-1">
                자주묻는질문
              </Title>
              <Badge colorScheme="blue">FAQ</Badge>
            </Box>
          </Container>
          <Container className="border-[1px] border-[#FFFFFF30] border-t-transparent bg-black">
            <FaqList
              tabOne={{
                title: "브랜웨이와 실시간 전화 상담을 하고 싶어요.",
                desc: "하세요 그럼",
              }}
              tabTwo={{
                title: "온라인몰 운영 경험이 없어도 괜찮나요",
                desc: "배우고 오세요",
              }}
              tabThree={{
                title: "쇼핑몰 부가서비스 비용을 알고싶어요.",
                desc: "아임웹에 직접 들어가세요.",
              }}
              tabFour={{
                title: "제작 후, 발생되는 문제는 어떻게 해결하나요?",
                desc: "아임웹에 직접 들어가세요.",
              }}
              tabFive={{
                title: "평균 제작기간이 얼마나 걸리는지 알고싶어요.",
                desc: "아임웹에 직접 들어가세요.",
              }}
              tabSix={{
                title: "제작 비용정산은 어떻게 진행되는지 알고싶어요.",
                desc: "아임웹에 직접 들어가세요.",
              }}
              tabSeven={{
                title: "제작 비용산출에 대해 알고싶어요.",
                desc: "아임웹에 직접 들어가세요.",
              }}
            />
            <ClosingSection />
          </Container>
        </Section>
      </Inner>
    </Section>
  );
};

export default AcquirePage;
