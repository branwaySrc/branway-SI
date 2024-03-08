import { Container, Section, Box, Inner } from "@/manager/lib/HTMLElements";

export const Navigation = () => {
  return (
    <Section className="bg-[#00000080] bg-clip-padding backdrop-filter backdrop-blur-lg h-16 border-b-[1px] border-[#FFFFFF10] sticky top-0 z-50">
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
