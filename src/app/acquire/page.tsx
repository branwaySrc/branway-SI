import {
  Box,
  Section,
  Inner,
  Text,
  Title,
  Line,
  Container,
} from "@/manager/lib/@";
import { ImGooglePlus3 } from "react-icons/im";
import { SiKakaotalk } from "react-icons/si";

const AcquirePage = () => {
  return (
    <Section>
      <Inner className="px-2">
        <Container className="flex flex-col items-center border-[1px] border-[#FFFFFF30] px-2 py-10 bg-neutral-950">
          <Title className=" font-bold text-sky-500 text-center">
            고객문의센터
          </Title>
          <Text className="text-2xl text-center mt-2 font-bold">
            무엇을 도와드릴까요?
          </Text>
        </Container>
        <Container className="flex w-full ">
          <Box className="border-[1px] border-t-transparent border-r-transparent border-[#FFFFFF30] w-full py-10 pl-6">
            <Title className="font-bold text-2xl">
              브랜웨이
              <br /> 소통창구
            </Title>
            <Text className="mt-4">
              브랜웨이는 상시 봅니다. 고객문의 센터를 운영하고 있어요. <br />
              문의하실 내용을 선택해주세요.
            </Text>
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
              실시간 소통창구
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
              제안하기
            </Box>
          </Container>
        </Container>
        <Section>
          <Container className="border-[1px] border-[#FFFFFF30] border-t-transparent">
            <Title className="py-10 text-center font-bold text-xl bg-neutral-950">
              자주묻는 질문
            </Title>
          </Container>
        </Section>
      </Inner>
    </Section>
  );
};

export default AcquirePage;
