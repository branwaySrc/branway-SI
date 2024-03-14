import {
  Container,
  Box,
  Section,
  AbsoluteBg,
  Line,
} from "@/manager/lib/HTMLElements";
import CircleAnimation from "@/components/animate/CircleAnimation";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="border-[1px] border-[#FFFFFF30] bg-[#000000] relative overflow-hidden">
      <CircleAnimation
        layout="absolute right-0 top-0"
        className={{
          first: "bg-green-500 h-[250px] w-[80px] blur-3xl",
          second: "bg-blue-500 h-[80px] w-[250px] blur-3xl",
        }}
      />
      <CircleAnimation
        layout="absolute right-0 bottom-0 flex-col"
        className={{
          first: "bg-green-500 h-[50px] w-[180px] blur-3xl",
          second: "bg-blue-500 h-[80px] w-[250px] blur-3xl",
        }}
      />

      <Section className="border-[1px] border-[#FFFFFF30] m-5 bg-[#00000050] relative bg-clip-padding backdrop-filter bg-opacity-80">
        <Section className="z-10 flex flex-col items-center border-[#FFFFFF30] h-[430px] border-[1px] m-7 bg-black bg-opacity-50">
          <Container className="w-full h-[60%] text-center flex items-center justify-center">
            {props.badgeLabel && (
              <Box className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                {props.badgeLabel}
              </Box>
            )}
          </Container>
          <Container className="flex justify-center w-full h-full items-center">
            <Box className="font-black text-3xl max-w-[80%] text-center leading-[40px]">
              {props.title || "Title"}
            </Box>
          </Container>
          <Container className="flex justify-center relative w-full h-full items-center">
            <Box className="text-slate-400 max-w-[80%] text-center leading-7 text-sm">
              {props.desc || "desc"}
            </Box>
          </Container>
        </Section>
        <Line className="absolute border-t-[1px] border-[#FFFFFF30] w-full h-[75%] bottom-0" />
        <Line className="absolute border-t-[1px] border-[#FFFFFF30] w-full h-[40%] bottom-0" />
      </Section>
    </Section>
  );
};
