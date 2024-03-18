import HeroSection from "@/components/HeroSection";
import BestTestmonialSection from "@/components/business-section/BestTestmonialSection";
import DesignIntroSection from "@/components/business-section/DesignIntroSection";
import TemplateIntroSection from "@/components/business-section/TemplateIntroSection";
import ImwebIntroSection from "@/components/business-section/ImwebIntroSection";

import GovernSection from "@/components/business-section/GovernSection";
import ShortcutButtons from "@/components/ShortcutButtons";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="bg-[#000000] px-2 min-h-[100vh]">
      <div className="border-x border-[#FFFFFF30]">
        <HeroSection>
          <ShortcutButtons />
        </HeroSection>
        <ImwebIntroSection />
        <TemplateIntroSection />
        <DesignIntroSection />
        <GovernSection />
        <BestTestmonialSection />
        <ClosingSection />
      </div>
    </main>
  );
}
