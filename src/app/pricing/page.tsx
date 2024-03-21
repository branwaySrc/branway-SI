import PricePlan from "@/components/pricing/PricePlan";
import PriceAddOns from "@/components/pricing/PriceAddOns";
import PriceAdvantages from "@/components/pricing/PriceAdvantages";
import PricingPreviewCard from "@/components/pricing/PricingPreviewCard";
import PriceEnterprise from "@/components/pricing/PriceEnterprise";
import { Container, Title, Section, Inner } from "@/manager/lib/@";

export default function PricingPage() {
  return (
    <Section className="min-h-[80vh] bg-[#050505]">
      <Inner>
        <Container className="py-10 border border-[#FFFFFF30]">
          <div className="md:h-0 h-[60px]" />
          <div className="h-[80px]" />
          <Title className="text-2xl font-bold text-center">
            파트너님의 창업에
            <br />
            속력과 전문성을 불어 넣어드릴게요!
          </Title>
          <div className="h-[80px]" />
        </Container>
        <PricePlan />
        {/* <PriceAddOns />
        <PriceAdvantages />
        <PricingPreviewCard />
        <PriceEnterprise /> */}
      </Inner>
    </Section>
  );
}
