import { NotoSans, Section } from "@/manager/lib/@";
import { ChakraProvider } from "@/manager/provider/chakraProvider";
import { Footer } from "@/components/footer/Footer";
import { Wrapper } from "@/manager/lib/@";
import "./globals.css";

import { Navigation } from "@/components/nav/Navigation";
import LayoutHero from "@/components/pc/LayoutHero";
import BreadMenu from "@/components/pc/BreadMenu";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "브랜웨이",
  description: "가성비에 가심비를 더한 IT 제작 파트너",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSans.className} bg-black`}>
        <ChakraProvider>
          <Wrapper className="overflow-hidden lg:grid lg:grid-cols-2">
            <Section
              breakClass={{
                lg: "lg:inline-flex lg:w-[100vw] lg:flex-wrap lg:min-h-[100vh]",
              }}
              className="hidden relative"
            >
              <div className="fixed">
                <LayoutHero />
              </div>
            </Section>
            <div className="lg:min-h-[100vh] relative">
              <Navigation />
              <BreadMenu />
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </div>
          </Wrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
