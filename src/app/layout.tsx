import type { Metadata } from "next";
import { NotoSans } from "@/manager/lib/@";
import { ChakraProvider } from "@/manager/provider/chakraProvider";
import { Footer } from "@/components/footer/Footer";

import "./globals.css";
import { EventDrawer } from "@/components/imweb/EventDrawer";
import { Navigation } from "@/components/nav/Navigation";

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
          <Navigation />
          {children}
          <Footer />
          <>
            <EventDrawer />
          </>
        </ChakraProvider>
      </body>
    </html>
  );
}
