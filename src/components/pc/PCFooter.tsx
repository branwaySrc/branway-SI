import {
  Text,
  Box,
  Title,
  Container,
  Section,
  Line,
  Inner,
  Wrapper,
} from "@custom-syntax/HTMLElements";

export const PCFooter = () => {
  const DateOfYear = new Date().getFullYear();

  return (
    <Section className="bg-neutral-950">
      <Wrapper className="text-white p-10">
        <Container className="flex flex-col gap-1 text-sm">
          <Title className="font-bold text-lg">브랜웨이</Title>
          <Text className="font-bold">고객 센터 : 0504-4587-7412</Text>
          <Text className="font-bold">이메일 : contact@branway.kr</Text>
          <Box className="flex flex-col gap-1 text-neutral-500 mt-2">
            <Text>대표자 : 김민기</Text>
            <Text>주소 : 서울특별시 강남구 선릉로135길 4-4</Text>
            <Text>사업자등록번호 : 744-41-01010</Text>
            <Text>통신판매업 신고번호 : 2024-강남-016648</Text>
            <Text>hosted by Vercel</Text>
            <Text>© {DateOfYear} Branway. All rights reserved.</Text>
          </Box>
          <div className="h-[50px] w-full" />
        </Container>
      </Wrapper>
    </Section>
  );
};
