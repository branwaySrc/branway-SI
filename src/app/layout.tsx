import type { Metadata } from "next";
import { NotoSans } from "@/manager/lib/@";
import { ChakraProvider } from "@/manager/provider/chakraProvider";
import { Footer } from "@/components/footer/Footer";


import "./globals.css";
import { Wrapper } from "@/manager/lib/@";
import { Navigation } from "@/components/nav/Navigation";
import LayoutHero from "@/components/pc/LayoutHero";

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
          <Wrapper className="overflow-y-hidden md:flex">
            <div className="hidden md:inline-flex md:w-[100vw] relative md:flex-wrap md:min-h-[100vh]">
              <LayoutHero />
            </div>
            <div className="md:min-h-[100vh] relative">
              <Navigation />
              {children}
              <Footer />
            </div>
          </Wrapper>

        </ChakraProvider>
      </body>
    </html>
  );
}
