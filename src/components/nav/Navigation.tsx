import { Container, Section, Box, Inner } from "@/manager/lib/HTMLElements";
import { TopNavMenu } from "./TopNavMenu";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <Section className="bg-[#00000080] bg-clip-padding backdrop-filter backdrop-blur-lg h-16 border-b-[1px] border-[#FFFFFF10] sticky top-0 z-50">
      <Inner className="px-4 flex justify-between items-center h-full">
        <Container>
          <Link href={"/"}>
            <Image
              alt="branway logo"
              src={"/branway.svg"}
              width={100}
              height={80}
            />
          </Link>
        </Container>
        <Container>
          <TopNavMenu />
        </Container>
      </Inner>
    </Section>
  );
};
