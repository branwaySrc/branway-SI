import { Box, Container, Text, Title } from "@/manager/lib/@";
import Image from "next/image";

export default function ClosingSection() {
  return (
    <Container className="flex flex-col gap-4 items-center justify-center h-[300px] w-full border-b border-[#FFFFFF30]">
      <Image
        alt="branway logo"
        src={"/logo_branway.png"}
        width={120}
        height={100}
      />
      <Text className="text-neutral-400">솔루션 파트너 브랜웨이 2024</Text>
    </Container>
  );
}
