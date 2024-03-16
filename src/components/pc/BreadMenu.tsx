"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BreadMenu() {
  const [currentUrl, setCurrentUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentUrl(pathname);
  }, [pathname]);

  const handleMenuStyle = (href: any) => {
    return href === currentUrl ? "text-white" : "text-neutral-400";
  };

  const url = {
    home: "/",
    imweb: "/imweb",
    pricing: "/pricing",
    acquire: "/acquire",
  };

  return (
    <div className="hidden lg:block lg:fixed right-[51%] top-10 text-xs">
      <ol className="text-end flex flex-col gap-3">
        <Link href={url.home} className={handleMenuStyle(url.home)}>
          브랜웨이 소개
        </Link>
        <Link href={url.imweb} className={handleMenuStyle(url.imweb)}>
          아임웹 제작 서비스
        </Link>
        <Link href={url.pricing} className={handleMenuStyle(url.pricing)}>
          가격정책
        </Link>
        <Link href={url.acquire} className={handleMenuStyle(url.acquire)}>
          문의하기
        </Link>
      </ol>
    </div>
  );
}
