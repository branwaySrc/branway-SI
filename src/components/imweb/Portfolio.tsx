import { Container, Figure, Text, Box } from "@/manager/lib/@";
import Image from "next/image";
import { DrawerPopUp } from "./DrawerPopUp";

// import { Container

export default function Portfolio() {
  return (
    <Container className="flex flex-col items-center py-10 bg-stone-950 border-[1px] border-neutral-900 rounded-3xl mx-4 mt-20">
      <Figure>
        <Image
          src={"/portfolio.png"}
          alt="branway portfolio"
          width={210}
          height={250}
        />
      </Figure>
      <Box className="h-[150px] w-full mt-[-100px] bg-gradient-to-t via-stone-950 from-stone-950 blur-sm z-0" />
      <Box className="mt-[-60px] z-10 flex flex-col gap-3 items-center">
        <Text className="text-lg font-bold text-center">
          브랜웨이는 포트폴리오를
          <br />
          채워넣고 있습니다.
        </Text>
        <Text className="text-center text-neutral-400 max-w-[80%] leading-6">
          가격 이벤트로 제작한 사이트를 포트폴리오로 함께 등록 될 예정이에요.
        </Text>
      </Box>
      <>
        <DrawerPopUp />
      </>
    </Container>
  );
}
