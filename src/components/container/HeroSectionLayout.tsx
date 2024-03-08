import { Container, Box, Section } from "@/manager/lib/HTMLElements";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="border-[1px] border-[#FFFFFF10] bg-[#00000080] relative">
      <Section className="border-[1px] border-[#FFFFFF10] m-4 bg-[#00000080] relative">
        <Section className="border-[1px] border-[#FFFFFF10] m-5 bg-[#00000090]">
          <Section className="z-10 flex flex-col items-center gap-10 h-[450px] border-[1px] border-[#FFFFFF10] m-6 bg-black">
            <Container className="mt-10">
              {props.badgeLabel && (
                <Box className="text-sm text-zinc-300 bg-zinc-950 px-4 py-2 rounded-sm font-bold">
                  {props.badgeLabel}
                </Box>
              )}
            </Container>
            <Container className="flex justify-center mt-10">
              <Box className="font-black text-3xl max-w-[80%] text-center leading-[40px]">
                {props.title || "Title"}
              </Box>
            </Container>
            <Container className="flex justify-center">
              <Box className="text-slate-400 max-w-[80%] text-center leading-7 text-sm">
                {props.desc || "desc"}
              </Box>
            </Container>
          </Section>
        </Section>
        <Section className="absolute border-t-[1px] border-[#FFFFFF10] w-full h-[70%] bottom-0" />
      </Section>
    </Section>
  );
};
