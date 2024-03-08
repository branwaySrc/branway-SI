import {
  Container,
  Box,
  Section,
  AbsoluteBg,
} from "@/manager/lib/HTMLElements";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="border-[1px] border-[#FFFFFF10] bg-[#000000] relative">
      <Section className="border-[1px] border-[#FFFFFF10] m-3 bg-[#ffffff04] relative">
        <Section className="border-[1px] border-[#FFFFFF10] m-3 bg-[#ffffff01]">
          <Section className="z-10 flex flex-col items-center h-[430px] border-[1px] border-[#FFFFFF10] m-3 bg-black">
            <Container className="mt-12">
              {props.badgeLabel && (
                <Box className="text-sm font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  {props.badgeLabel}
                </Box>
              )}
            </Container>
            <Container className="flex justify-center mt-[76px]">
              <Box className="font-black text-3xl max-w-[80%] text-center leading-[40px]">
                {props.title || "Title"}
              </Box>
            </Container>
            <Container className="flex justify-center mt-20 relative">
              <Box className="text-slate-400 max-w-[80%] text-center leading-7 text-sm">
                {props.desc || "desc"}
              </Box>
            </Container>
          </Section>
        </Section>
        <Section className="absolute border-t-[1px] border-[#FFFFFF10] w-full h-[70%] bottom-0" />
        <Section className="absolute border-t-[1px] border-[#FFFFFF10] w-full h-[40%] bottom-0" />
      </Section>
    </Section>
  );
};
