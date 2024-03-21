import {
  Text,
  Box,
  Container,
  Section,
  Inner,
} from "@custom-syntax/HTMLElements";

export const Footer = () => {
  const DateOfYear = new Date().getFullYear();

  return (
    <Section>
      <Inner className="px-4 py-10">
        <Text className="text-neutral-500">
          © {DateOfYear} Branway. All rights reserved.
        </Text>
        <Text>hosted by Vercel</Text>
      </Inner>
    </Section>
  );
};

export const FooterInfo = () => {
  return (
    <Container className="flex flex-col gap-1 text-sm mt-4 ml-1">
      <Text className="font-bold">전화하기 : 010-2451-7412</Text>
      <Text className="font-bold">이메일 : contact@branway.kr</Text>
      <Box className="flex flex-col gap-1 text-neutral-500 mt-2">
        <Text>대표자 : 김민기</Text>
        <Text>주소 : 서울특별시 강남구 선릉로135길 4-4</Text>
        <Text>사업자등록번호 : 744-41-01010</Text>
        <Text>통신판매업 신고번호 : 2024-강남-016648</Text>
      </Box>
      <div className="h-[50px] w-full" />
    </Container>
  );
};
