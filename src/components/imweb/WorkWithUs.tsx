import { Section, Title, Text, Box, Container, Inner } from "@/manager/lib/@";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineImagesearchRoller } from "react-icons/md";
import { SiAdobeillustrator } from "react-icons/si";
import { FaArrowDown91 } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";

export const WorkWithUsDesign = () => {
  return (
    <Section className="mt-10">
      <Inner className="px-4 flex flex-col gap-4">
        <Container>
          <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <FaRegMessage size={20} color="#FFFFFF99" />
          </Box>
          <Box className="mt-4">
            <Text className="flex flex-col gap-2">
              <span className="font-bold">
                <span className="bg-blue-800">사업의 브랜딩을</span> 바로
                잡아드립니다.
              </span>
              <span className="text-neutral-400">
                고객님과 함께 진행하는 온라인 미팅에서 필요한 포인트를 짚어
                브랜드만이 가질 수 있는 스토리를 완성시킵니다.
              </span>
            </Text>
          </Box>
        </Container>
        <Container className="relative py-2">
          <Box className="border-2 rounded-2xl border-blue-600">
            <Text className="p-4 text-neutral-300 text-sm leading-6">
              사업아이템은 무향 향기의 아기샴푸가 시그니처 아이템입니다. 그래서
              <span className="bg-blue-600"> 안전함과 깔끔함을 </span>강조할 수
              있는 디자인이 필요합니다.
            </Text>
          </Box>
          <div className="absolute bottom-0 right-[-4px] h-full w-[60%] bg-gradient-to-l from-[#050505]" />
          <div className="absolute bottom-0 right-[-4px] h-full w-[60%] bg-gradient-to-l from-[#050505]" />
        </Container>
      </Inner>
    </Section>
  );
};

export const WorkWithUsReduceCost = () => {
  return (
    <Section className="mt-10">
      <Inner className="px-4 flex flex-col gap-4">
        <Container>
          <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <FaArrowDown91 size={20} color="#FFFFFF99" />
          </Box>
          <Box className="mt-4">
            <Text className="text-neutral-300 leading-6 flex flex-col gap-2">
              <span className="font-bold">
                <span className="bg-green-900"> 점진적인 개발 방향성을 </span>{" "}
                제시해 드립니다.
              </span>
              <span className="text-neutral-400">
                대부분의 파트너분들께선, 이전 사이트에 다양한 기능을 구현했어도
                활용율이 매우 저조했습니다. 숙련도에 따라 운영 레퍼런스를 전달해
                드립니다.
              </span>
            </Text>
          </Box>
        </Container>
        <Container className="relative px-1 py-1">
          <Box className="border-2 rounded-2xl border-green-700 flex flex-wrap p-4 justify-around gap-2">
            <div className="w-[80px] h-[80px] text-center flex items-center border-[1px] flex-wrap text-sm text-neutral-500 rounded-lg border-[#FFFFFF18]">
              포인트 정책관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-2 flex-wrap px-4 text-sm text-neutral-300 rounded-lg border-green-500">
              쿠폰 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-[1px] flex-wrap px-4 text-sm text-neutral-500 rounded-lg border-[#FFFFFF18]">
              게시판 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-[1px] flex-wrap text-sm text-neutral-500 rounded-lg border-[#FFFFFF18] px-2">
              회원등급 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-2 flex-wrap px-4 text-sm text-neutral-300 rounded-lg border-green-500">
              배송 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-[1px] flex-wrap px-4 text-sm text-neutral-500 rounded-lg border-[#FFFFFF18]">
              이벤트 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-2 flex-wrap text-sm text-neutral-300 rounded-lg border-green-500">
              마케팅 채널관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-2 flex-wrap px-4 text-sm text-neutral-300 rounded-lg border-green-500">
              상품 관리
            </div>
            <div className="w-[80px] h-[80px] flex text-center justify-center items-center border-[1px] flex-wrap px-4 text-sm text-neutral-500 rounded-lg border-[#FFFFFF18]">
              예약 관리
            </div>
          </Box>
          <div className="absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-[#050505]" />
          <div className="absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-[#050505]" />
        </Container>
      </Inner>
    </Section>
  );
};

export const WorkWithUsImageAsset = () => {
  return (
    <Section className="py-10 border-b-[1px] border-[#FFFFFF30]">
      <Inner className="px-4 flex flex-col gap-4">
        <Container>
          <Box className="border-[1px] border-slate-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <MdOutlineImagesearchRoller size={20} color="#FFFFFF99" />
          </Box>
          <Box className="mt-4">
            <Text className="text-neutral-300 leading-6 flex flex-col gap-2">
              <span className="font-bold">
                <span className="bg-amber-600">모든 애셋의 원본을 </span>
                제공해드립니다.
              </span>
              <span className="text-neutral-400">
                추가비용 없이 모든 애셋은 작업 완료 후, 전달드립니다. 요구에
                따라 배경이미지 및 대체할 수 있는 이미지 또한 함께 제공하고
                있습니다.
              </span>
            </Text>
          </Box>
        </Container>
        <Container className="relative px-1 py-1">
          <Box className="border-[1px] relative rounded-2xl border-[#f2ff4250] flex items-center justify-center bg-gradient-to-r via-[#c2833142] from-[#f2ff4250]">
            <Box className="border-[1px] border-[#FFFFFF10] p-2 rounded-[34px] flex gap-2">
              <Box className="relative z-10">
                <SiAdobeillustrator
                  size={90}
                  color="#DB6300"
                  className="opacity-20 blur-md absolute z-10"
                />
                <SiAdobeillustrator
                  size={60}
                  color="#CCDB00"
                  className="opacity-20 blur-md absolute z-10"
                />
                <SiAdobeillustrator
                  size={80}
                  color="#FFFFFF"
                  className="z-20 border-2 rounded-3xl p-1 border-[#dbc33bb6]"
                />
              </Box>
              <Box className="relative z-10">
                <SiAdobephotoshop
                  size={90}
                  color="#B3DB00"
                  className="opacity-20 blur-md absolute z-10 right-5"
                />
                <SiAdobephotoshop
                  size={60}
                  color="#CCDB00"
                  className="opacity-20 blur-md absolute z-10"
                />
                <SiAdobephotoshop
                  size={80}
                  color="#FFFFFF"
                  className="z-20 border-2 rounded-3xl p-1 border-[#dbc33bb6]"
                />
              </Box>
            </Box>
            <div className="absolute top-4 opacity-50 text-[#b4600030] text-[56px] font-bold">
              PREMIUM
            </div>
            <div className="h-[200px]"></div>
            <div className="absolute bottom-0 w-full h-[50%] border-t-[1px] border-[#FFFFFF10]" />
            <div className="absolute bottom-0 w-full h-[75%] border-t-[1px] border-[#FFFFFF10]" />
            <div className="absolute bottom-0 w-full h-[25%] border-t-[1px] border-[#FFFFFF10]" />
            <div className="absolute left-0 w-[50%] h-full border-r-[1px] border-[#FFFFFF10]" />
            <div className="absolute left-0 w-[25%] h-full border-r-[1px] border-[#FFFFFF10]" />
            <div className="absolute left-0 w-[75%] h-full border-r-[1px] border-[#FFFFFF10]" />
          </Box>
          <div className="absolute bottom-0 h-[80%] w-full bg-gradient-to-t from-[#050505b0]" />
          <div className="absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-[#050505]" />
        </Container>
      </Inner>
    </Section>
  );
};
