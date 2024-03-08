import {
  Container,
  Box,
  Section,
  AbsoluteBg,
} from "@/manager/lib/HTMLElements";
import Image from "next/image";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="border-[1px] border-[#FFFFFF18] bg-[#000000] relative overflow-hidden">
      <Image
        src={"/neon2.jpg"}
        fill
        alt="background"
        className="absolute opacity-70 top-0"
      />
      <Section className="border-[1px] border-[#FFFFFF18] m-5 bg-[#00000050] relative bg-clip-padding backdrop-filter bg-opacity-80">
        <Section className="z-10 flex flex-col items-center border-[#FFFFFF18] h-[430px] border-[1px] m-7 bg-black bg-opacity-50">
          <Container className="mt-8">
            {props.badgeLabel && (
              <Box className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                {props.badgeLabel}
              </Box>
            )}
          </Container>
          <Container className="flex justify-center mt-[60px]">
            <Box className="font-black text-3xl max-w-[80%] text-center leading-[40px]">
              {props.title || "Title"}
            </Box>
          </Container>
          <Container className="flex justify-center mt-16 relative">
            <Box className="text-slate-400 max-w-[80%] text-center leading-7 text-sm">
              {props.desc || "desc"}
            </Box>
          </Container>
        </Section>
        <Container className="absolute border-t-[1px] border-[#FFFFFF18] w-full h-[75%] bottom-0" />
        <Container className="absolute border-t-[1px] border-[#FFFFFF18] w-full h-[40%] bottom-0" />
      </Section>
    </Section>
  );
};
