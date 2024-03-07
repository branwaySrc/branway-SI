import { Container, Section, Box, Inner } from "@/manager/lib/HTMLElements";

export const Navigation = () => {
  return (
    <Section className="bg-stone-950 h-16 border-b-[1px] border-[#FFFFFF10] ">
      <Inner className="px-4 flex justify-between items-center h-full">
        <Container>
          <Box>Logo</Box>
        </Container>
        <Container>
          <Box>OtherOptions</Box>
        </Container>
      </Inner>
    </Section>
  );
};
