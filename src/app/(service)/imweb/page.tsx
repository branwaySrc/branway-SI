import {
  Container,
  Inner,
  AbsoluteBg,
  Box,
  Text,
  Title,
  Section,
  Figure,
  Line,
} from "@custom-syntax/HTMLElements";
import { HeroSectionLayout } from "@/components/imweb/HeroSectionLayout";
import { CONFIG } from "@/manager/statics/@";
import { DrawerPopUp } from "@/components/imweb/DrawerPopUp";
import { WorkProcess } from "@/components/imweb/WorkProcess";
import { Badge, Stack } from "@chakra-ui/react";

import Image from "next/image";
import {
  WorkWithUsDesign,
  WorkWithUsImageAsset,
  WorkWithUsReduceCost,
  WorkingWithUsHeader,
} from "@/components/imweb/WorkWithUs";
import ToggleBtnShiftSheet from "@/components/imweb/ToggleBtnShiftSheet/ToggleBtnShiftSheet";
import Testimonial from "@/components/imweb/Testimonial";
import WhatToMake from "@/components/imweb/WhatToMake";
import ReasonForRecommend from "@/components/imweb/ReasonForRecommend";
import Loading from "@/components/loading";
import Portfolio from "@/components/imweb/Portfolio";
import Link from "next/link";
import ProjectNeeds from "@/components/imweb/ProjectNeeds";
import ProjectFAQ from "@/components/imweb/FAQ";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="bg-[#050505] px-2">
      <Inner>
        <Container>
          <HeroSectionLayout
            badgeLabel={CONFIG.IMWEB_BADGE_LABEL}
            title={CONFIG.IMWEB_HERO_TITLE}
            desc={CONFIG.IMWEB_HERO_DESC}
          />
        </Container>
      </Inner>

      <Section className="relative overflow-hidden">
        <Inner>
          <Line className="border-[1px] border-t-transparent border-[#FFFFFF30] relative">
            <Line className="border-r-[1px] border-[#FFFFFF10] absolute w-[50%] h-full bg-gradient-to-b from-[#000000] to-transparent" />
            <Testimonial />
            <WhatToMake />
          </Line>
          <Container className="flex flex-col relative border-[1px] border-[#FFFFFF30] border-t-transparent">
            <ReasonForRecommend />
          </Container>
          <Line className="border-[1px] border-y-transparent border-[#FFFFFF30]">
            <div>
              <ToggleBtnShiftSheet />
            </div>
            <WorkingWithUsHeader />
            <Container className="flex flex-col items-center gap-4">
              <WorkWithUsDesign />
              <WorkWithUsReduceCost />
              <WorkWithUsImageAsset />
            </Container>

            <>
              <Portfolio />
            </>

            <>
              <WorkProcess />
            </>

            <>
              <ProjectNeeds />
            </>

            <>
              <ProjectFAQ />
            </>
            <ClosingSection />
          </Line>
        </Inner>
      </Section>
    </main>
  );
}
