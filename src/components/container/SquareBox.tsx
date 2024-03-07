import { Box, Container } from "@/manager/lib/HTMLElements";

interface SquareBoxEl {
  title?: string;
  desc?: string;
}

export const SquareBox = (props: SquareBoxEl) => {
  return (
    <Container
      className={`h-[150px] w-[150px] border-[1px] border-zinc-900 rounded-2xl 
      flex flex-col items-center justify-center bg-black gap-1`}
    >
      <Box className="font-bold">{props.title}</Box>
      <Box className="text-sm text-slate-400">{props.desc}</Box>
    </Container>
  );
};
