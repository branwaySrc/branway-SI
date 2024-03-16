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
import BestTestmonialSection from "@/components/BestTestmonialSection";
import DesignIntroSection from "@/components/DesignIntroSection";
import TemplateIntroSection from "@/components/TemplateIntroSection";
import ImwebIntroSection from "@/components/ImwebIntroSection";

export default function Home() {
  return (
    <main className="bg-[#050505] px-2 min-h-[100vh]">
      <HeroSection />
      <ImwebIntroSection />
      <TemplateIntroSection />
      <DesignIntroSection />
      <BestTestmonialSection />
    </main>
  );
}
