import { Container, Section, Box, Title, Text } from "@/manager/lib/@";

export default function ProjectNeeds() {
  return (
    <>
      <Container className="flex flex-col items-center px-4 relative">
        <Box className="h-[100px] w-[2px] bg-gradient-to-t from-yellow-500 mb-[-2px] mt-4" />
        <Box className="bg-yellow-500 p-3 rounded-full" />
        <Box className="flex flex-col items-center mt-10 gap-3 text-center">
          <Title className="font-bold text-2xl">
            의뢰전 무엇이 필요한지 알려드릴게요!
          </Title>
          <Text className="text-neutral-400 mb-8">
            없으셔도 괜찮아요, 함께 만들어 나가보아요!
          </Text>
        </Box>
      </Container>
      <Section className="flex flex-col gap-4">
        <Box className="mx-4 p-4 border-[1px] rounded-2xl border-[#FFFFFF30]">
          <Title className="font-bold">회사로고</Title>
          <Text className="text-neutral-400">
            로고가 없으실 경우, 임의적으로 만들어 드려요!
          </Text>
        </Box>
        <Box className="mx-4 p-4 border-[1px] rounded-2xl border-[#FFFFFF30]">
          <Title className="font-bold">도메인</Title>
          <Text className="text-neutral-400">
            제작이 완료된 이후에 제공해 주셔도 되요!
          </Text>
        </Box>
        <Box className="mx-4 p-4 border-[1px] rounded-2xl border-[#FFFFFF30]">
          <Title className="font-bold">사업자정보</Title>
          <Text className="text-neutral-400">
            네이버 및 구글 노출을 위해 사업자정보를 제공해 주셔야 되요!
          </Text>
        </Box>
        <Box className="mx-4 p-4 border-[1px] rounded-2xl border-[#FFFFFF30]">
          <Title className="font-bold">기획 레퍼런스</Title>
          <Text className="text-neutral-400">
            디자인 레퍼런스 또는 사업 레퍼런스를 제공해 주세요! 없으시다면
            저희가 제안해 드릴게요!
          </Text>
        </Box>
        <Box className="mx-4 p-4 border-[1px] rounded-2xl border-[#FFFFFF30]">
          <Title className="font-bold">원하시는 기능</Title>
          <Text className="text-neutral-400">
            구현 가능여부를 검토를 위한 필수기능을 꼭 말씀해 주셔야 되요!
          </Text>
        </Box>
      </Section>
    </>
  );
}
