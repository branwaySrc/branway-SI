import type { Metadata } from "next";
import { Body, Inner } from "@/manager/lib/HTMLElements";
import { NotoSans } from "@/manager/lib/@";
import { ChakraProvider } from "@/manager/provider/chakraProvider";
import "./globals.css";

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
      <Body className={NotoSans.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </Body>
    </html>
  );
}
