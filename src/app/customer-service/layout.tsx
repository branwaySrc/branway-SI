import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "아임웹 솔루션",
  description: "가성비에 가심비를 더한 IT 제작 파트너",
};

export default function layout(props: { children: React.ReactNode }) {
  return <div>{props.children}</div>;
}
