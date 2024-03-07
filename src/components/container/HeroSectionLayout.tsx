import { Container, Box, Section } from "@/manager/lib/HTMLElements";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="h-[550px] flex flex-col items-center justify-center gap-10 border-b-2 border-[#FFFFFF02]">
      <Container>
        {props.badgeLabel && (
          <Box className="text-sm text-zinc-300 bg-zinc-900 px-6 py-2 rounded-xl font-bold">
            {props.badgeLabel}
          </Box>
        )}
      </Container>
      <Container className="flex justify-center">
        <Box className="font-black text-4xl max-w-[80%] text-center leading-[50px]">
          {props.title || "Title"}
        </Box>
      </Container>
      <Container className="flex justify-center">
        <Box className="text-slate-400 max-w-[80%] text-center leading-7">
          {props.desc || "desc"}
        </Box>
      </Container>
    </Section>
  );
};
