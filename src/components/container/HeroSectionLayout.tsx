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
    <Section className="border-[1px] border-[#FFFFFF18] bg-[#000000] relative">
      <Section className="border-[1px] border-[#FFFFFF18] m-6 bg-[#ffffff02] relative">
        <Section className="z-10 flex flex-col items-center border-[#FFFFFF18] h-[430px] border-[1px] m-8 bg-black">
          <Container className="mt-12">
            {props.badgeLabel && (
              <Box className="text-sm font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 inline-block text-transparent bg-clip-text">
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
        <Container className="absolute border-t-[1px] border-[#FFFFFF18] w-full h-[70%] bottom-0" />
        <Container className="absolute border-t-[1px] border-[#FFFFFF18] w-full h-[40%] bottom-0" />
      </Section>
    </Section>
  );
};
