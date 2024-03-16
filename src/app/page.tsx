import {
  Container,
  Inner,
  AbsoluteBg,
  Box,
  Text,
  Title,
  Section,
  Figure,
  Button,
  Line,
} from "@custom-syntax/HTMLElements";
import HeroSection from "@/components/HeroSection";
import BestTestmonialSection from "@/components/business-section/BestTestmonialSection";
import DesignIntroSection from "@/components/business-section/DesignIntroSection";
import TemplateIntroSection from "@/components/business-section/TemplateIntroSection";
import ImwebIntroSection from "@/components/business-section/ImwebIntroSection";
import PCHeroSection from "@/components/pc/PCHeroSection";
import GovernSection from "@/components/business-section/GovernSection";
export default function Home() {
  return (
    <main className="bg-[#050505] px-2 min-h-[100vh]">
      <div className="border-[1px] border-[#FFFFFF30]">
        <HeroSection />
        <PCHeroSection />
        <ImwebIntroSection />
        <TemplateIntroSection />
        <DesignIntroSection />
        <GovernSection />
        <BestTestmonialSection />
      </div>
    </main>
  );
}
