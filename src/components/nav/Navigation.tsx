import { Container, Section, Box, Inner } from "@/manager/lib/HTMLElements";
import { TopNavMenu } from "./TopNavMenu";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Section className="lg:hidden bg-[#00000080] bg-clip-padding backdrop-filter backdrop-blur-lg h-16 border-b-[1px] border-[#FFFFFF10] fixed top-0 z-[999] w-full">
      <Inner className="px-4 flex justify-between items-center h-full">
        <Container>
          <Link href={"/"}>
            <Image
              alt="branway logo"
              src={"/branway_full_logo.svg"}
              width={100}
              height={20}
            />
          </Link>
        </Container>
        <Container>
          <TopNavMenu />
        </Container>
      </Inner>
      <Inner>
        <Box className="lg:hidden flex justify-between px-4 bg-green-800 text-center text-white text-sm py-2 items-center font-bold bg-clip-padding backdrop-filter backdrop-blur-xl opacity-90">
          <p>아임웹 사이트제작 가격할인 이벤트 진행중!</p>
          <Link href={"/pricing"} className="text-sm">
            <Badge colorScheme="green" className="opacity-[80%]">
              자세히보기
            </Badge>
          </Link>
        </Box>
      </Inner>
    </Section>
  );
};
