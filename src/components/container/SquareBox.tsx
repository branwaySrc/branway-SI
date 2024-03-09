import { Box, Container } from "@/manager/lib/HTMLElements";

interface SquareBoxEl {
  title?: string;
  desc?: string;
  className?: string;
}

export const SquareBox = (props: SquareBoxEl) => {
  return (
    <Container
      className={`h-[150px] w-full border-t-[1px] ${props.className} border-[#FFFFFF30]
      flex flex-col items-center justify-center bg-black gap-1 z-10`}
    >
      <Box className="font-bold">{props.title}</Box>
      <Box className="text-sm text-slate-400">{props.desc}</Box>
    </Container>
  );
};
