import { Container, Box, Section, Line } from "@/manager/lib/HTMLElements";
import Image from "next/image";
import CircleAnimation from "../animate/CircleAnimation";

interface HeroSectionTm {
  badgeLabel?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

export const HeroSectionLayout = (props: HeroSectionTm) => {
  return (
    <Section className="border-[1px] border-[#FFFFFF30] bg-[#000000] relative overflow-hidden">
      <Image
        className="mt-[-100px]"
        src={"/imweb/imweb_solution_hero.svg"}
        alt="imweb_hero"
        fill
        style={{ objectFit: "cover" }}
      />
      <CircleAnimation
        layout="absolute top-0 inset-x-0 left-1/2 -translate-x-1/2 z-10"
        className={{
          first: "bg-blue-600 h-[100px] w-[200px] blur-3xl",
          second: "bg-purple-600 h-[200px] w-[100px] blur-3xl",
        }}
      />
      <div className="absolute bg-gradient-to-r from-black left-0 top-0 z-10 w-[50%] h-full" />
      <div className="absolute bg-gradient-to-l from-black right-0 top-0 z-10 w-[50%] h-full" />
      <div className="absolute bg-gradient-to-b from-black top-0 z-10 w-full h-[30%]" />
      <div className="absolute bg-gradient-to-t via-black from-black bottom-0 z-10 w-full h-[80%]" />
      <Section className="border-[1px] border-[#FFFFFF30] m-5 border-dashed relative bg-clip-padding backdrop-filter bg-opacity-80">
        <Section className="z-10 flex flex-col items-center border-dashed border-[#FFFFFF30] h-[430px] border-[1px] m-7 ">
          <Container className="flex justify-center w-full h-full items-center">
            <Box className="font-black text-2xl max-w-[95%] text-center z-20 mt-[200px] flex flex-col gap-2">
              <h1>
                온라인을 시작하는 <br /> 아임웹 사이트 제작 솔루션
              </h1>
              <p className="text-base text-neutral-400 font-normal">
                부담없는 비용으로 최적 사이트를 <br />
                빠르게 제작해 드리는 온라인 창업 솔루션이에요.
              </p>
            </Box>
          </Container>
        </Section>
      </Section>
    </Section>
  );
};
