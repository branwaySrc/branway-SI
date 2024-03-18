import {
  Box,
  Section,
  Inner,
  Text,
  Title,
  Line,
  Container,
} from "@/manager/lib/@";
import { FaqList } from "@/components/customer-service/faq";
import { ImGooglePlus3 } from "react-icons/im";
import { SiKakaotalk } from "react-icons/si";
import { Badge } from "@chakra-ui/react";
import { EmailToast } from "@/components/customer-service/emailToast";
import { MdChevronRight } from "react-icons/md";
import { KakaoPopover } from "@/components/customer-service/kakaoPopover";
import ClosingSection from "@/components/ClosingSection";

const AcquirePage = () => {
  return (
    <Section className="min-h-[85vh] bg-zinc-950 mt-[100px] lg:mt-0">
      <Inner>
        <Container className="flex flex-col items-center justify-center border-[1px] border-[#FFFFFF30] px-2 py-10 mt-10 lg:mt-0 bg-neutral-950 lg:h-[250px] gap-3">
          <Title className="text-2xl text-center mt-2 font-bold">
            무엇을 도와드릴까요?
          </Title>
          <Text className="text-neutral-400 text-center text-sm">
            궁금하신 것이 있다면, <br />
            브랜웨이 소통창구를 통해 무엇이든 문의주세요.
          </Text>
          <Text className="text-center text-sm border border-[#FFFFFF30] rounded-full bg-black px-3 py-1">
            <span className="font-bold text-sky-500">운영시간 </span>
            <span className="ml-1">10:00 ~ 20:00</span>
            <span className="ml-1">연중무휴</span>
          </Text>
        </Container>
        <>
          <section className="bg-black border-[1px] border-t-transparent border-[#FFFFFF30]">
            <p className="text-center mt-10 font-bold">브랜웨이 소통창구</p>
            <Container className="w-full py-10 flex justify-center ">
              <div>
                <Box className="mx-4 py-4 border-[1px] border-[#FFFFFF30] rounded-tr-xl bg-[#fbff026c] flex relative">
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
                <Box className="mx-4 py-4 border-[1px] border-[#FFFFFF30] bg-black">
                  <KakaoPopover>
                    <div className="font-normal text-sm flex items-center">
                      카카오톡 상담하기 <MdChevronRight size={24} />
                    </div>
                  </KakaoPopover>
                  <p className="mx-4 mt-[-5px] text-xs text-neutral-600 hover:text-neutral-400">
                    가장 빠른 답변을 받으실 수 있습니다.
                  </p>
                </Box>
              </div>
              <div>
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
                <Box className="mx-4 py-4 border-[1px] border-[#FFFFFF30] bg-black">
                  <EmailToast>
                    <div className="font-normal text-sm flex items-center">
                      이메일로 제안하기 <MdChevronRight size={24} />
                    </div>
                  </EmailToast>
                  <p className="mx-4 mt-[-5px] text-xs text-neutral-600 hover:text-neutral-400">
                    클릭하시면 이메일 주소가 복사되요
                  </p>
                </Box>
              </div>
            </Container>
          </section>
        </>
        <Section>
          <Container className="border-[1px] border-[#FFFFFF30] border-y-transparent">
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
