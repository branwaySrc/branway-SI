import {
  Box,
  Section,
  Container,
  Line,
  Text,
  Title,
  Inner,
} from "@/manager/lib/@";
import { AiOutlineMessage } from "react-icons/ai";
import { FaKey } from "react-icons/fa";

export const WorkProcess = () => {
  return (
    <Section className="py-10 mt-10 border-t-[1px] border-[#FFFFFF30]">
      <Container>
        <Box className="flex flex-col items-center gap-4 border-y-[1px] border-[#FFFFFF30] relative py-20 my-10 ">
          <Text className="text-slate-400 flex items-center gap-2 z-10">
            <FaKey size={18} /> 브랜웨이의 철칙
          </Text>
          <Title className="font-bold text-white text-2xl z-10">
            빠른 소통, 그리고 명확한 결과물
          </Title>
          <Text className="text-center text-slate-400 z-10">
            간결한 서비스 또는 본격적인 서비스를 운영하기 앞서, 브랜딩을 위한
            페이지를 원하시는 분들이 많이 찾아주셨어요.
          </Text>
          <div className="w-full h-[100%] bg-gradient-to-t via-[#0151ff10] from-[#011aff30] absolute bottom-0 " />
        </Box>
        <Box className="border-y-[1px] border-[#FFFFFF30] bg-black flex flex-col items-center py-4 gap-2">
          <AiOutlineMessage size={30} />
          <Text className="text-center font-bold text-lg">사이트 작업절차</Text>
        </Box>
        <Container className="text-neutral-300">
          <Section>
            <Box className="py-8 text-center font-light">
              <Text>
                <span className="font-bold text-white">
                  브랜웨이 소통창구를
                </span>
                통해 필요하신 서비스에 대해 설명해주세요.
              </Text>
              <Text>
                기획이 없으시더라도 어떠한 추가적인 비용이 요구되지 않습니다.
              </Text>
            </Box>
            <Container className="flex flex-col gap-4 px-6">
              <Box className="flex justify-start">
                <Text className="max-w-[80%] border-2 bg-[#14141499] border-neutral-800 rounded-lg py-4 text-left px-4 text-white">
                  서비스 소개를 위한 브랜딩 사이트를 의뢰합니다.
                </Text>
              </Box>
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  구글 양식을 전달해 드릴게요! 원하시는 느낌 또는 레퍼런스를
                  양식을 토대로 전달해 주세요! -양식보기-
                </Text>
              </Box>
              <Box className="flex justify-start">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  원하는 레퍼런스 또는 전체 구성이 준비된게 없어서 대부분
                  &quot;기획해주세요&quot; 로 선택했는데 비용이 달라지나요?
                </Text>
              </Box>
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  아닙니다! 비용은 동일하시지만, 때로는 원하시는 모습이 아닐 수
                  있어서 이부분은 인지해 주셔야됩니다.
                </Text>
              </Box>
            </Container>
            <Box className="py-8 text-center font-light border-t-[1px] border-[#FFFFFF30] mt-10">
              <Text>
                <span className="font-bold text-white">
                  브랜웨이 소통창구를{" "}
                </span>
                통해 필요하신 서비스에 대해 설명해주세요.
              </Text>
              <Text>
                기획이 없으시더라도 어떠한 추가적인 비용이 요구되지 않습니다.
              </Text>
            </Box>
            <Container className="flex flex-col gap-4 px-6">
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  혹시, 전달해 주신 구글폼 내용을 토대로 레퍼런스를 몇가지 전달
                  드렸어요! 원하시는 부분을 선택해 주시면 감사드리겠습니다.
                </Text>
              </Box>
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  혹시, 전달해 주신 구글폼 내용을 토대로 레퍼런스를 몇가지 전달
                  드렸어요! 원하시는 부분을 선택해 주시면 감사드리겠습니다.
                </Text>
              </Box>
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  레퍼런스 1
                </Text>
              </Box>
              <Box className="flex justify-end">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  레퍼런스 2
                </Text>
              </Box>
              <Box className="flex justify-start">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  저는 레퍼런스 2번을 선택하겠습니다
                </Text>
              </Box>
            </Container>
            <Box className="py-8 text-center font-light border-t-[1px] border-[#FFFFFF30] mt-10">
              <Text>
                <span className="font-bold text-white">
                  브랜웨이 소통창구를
                </span>
                통해 필요하신 서비스에 대해 설명해주세요.
              </Text>
              <Text>
                기획이 없으시더라도 어떠한 추가적인 비용이 요구되지 않습니다.
              </Text>
            </Box>
            <Container className="flex flex-col gap-4 border-b-[1px] border-[#FFFFFF30] pb-10 relative">
              <Box className="flex justify-end px-6">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  네, 그럼 레퍼런스 2번을 토대로 작업을 진행해 드리겠습니다!
                  그럼 계약을 진행하도록 하겠습니다! 비대면 계약서를 이메일 또는
                  카카오톡으로 전달드릴 예정이에요! 꼭 참고해 주시길 바랍니다!
                </Text>
              </Box>
              <Box className="flex justify-end px-6">
                <Text className="max-w-[70%] border-2 bg-[#14141499] border-neutral-800 text-white rounded-lg py-4 text-left px-4">
                  저희가 총 기간과 예상 스케줄을 www.google.com 공유 시트를 통해
                  전달 드릴 예정이에요! 참고 부탁드리며, 1차까지 완료 되는데로
                  바로 연락을 드리겠습니다
                </Text>
              </Box>
              <div className="bg-gradient-to-t from-black w-full h-[250px] absolute bottom-0" />
            </Container>
            <Container className="bg-black border-b-[1px] border-[#FFFFFF30] py-10 px-4 flex flex-col gap-6">
              <Text className="leading-8 text-white text-lg">
                브랜웨이와 함께 하면서, 막막했던 브랜드 레퍼런스와 스토리를
                사이트에 잘 녹여내어 주었습니다. 또한 주기적으로 직접 운영하면서
                어려움이 있을 수 있는 관리항목을 안내해주었고, 지금도
                운영하는데에 별 어려움이 없습니다.
              </Text>
              <Text className="text-end w-full">
                압구정로데오 명품시계샵 타임블루
              </Text>
            </Container>
          </Section>
        </Container>
      </Container>
    </Section>
  );
};
