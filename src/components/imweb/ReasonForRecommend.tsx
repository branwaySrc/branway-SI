import { Title, Container, Text, Section, Box } from "@/manager/lib/@";

import { SiMaterialdesignicons } from "react-icons/si";
import { TbSitemap } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { TbAccessible } from "react-icons/tb";
import CircleAnimation from "@/components/animate/CircleAnimation";
import Link from "next/link";

export default function ReasonForRecommend() {
  return (
    <>
      <Title className="px-4 pt-10 font-bold text-xl">
        온라인 비즈니스를 시작하실건가요? <br />
        그럼 아임웹을 선택하세요!
      </Title>
      <div className="flex pb-8 my-2 px-4">
        <Link href={"/"} className="text-blue-600 text-sm">
          아임웹 바로가기 +
        </Link>
      </div>
      <Box className="px-4 py-10 border-[1px] border-[#FFFFFF30] border-x-0 flex flex-col gap-[50px] overflow-hidden">
        <div className="flex flex-col gap-1">
          <Title className="font-bold text-xl">아임웹을 추천드리는 이유</Title>
          <Text className="text-sm text-neutral-400">
            온라인 서비스 운영이 처음이시라면 더욱 추천드려요!
          </Text>
        </div>
        <section className="mt-4 flex relative">
          <figure className="absolute left-[-6px] top-1 bg-[#00000090] h-[40px] w-[40px] border-[1px] flex items-center justify-center rounded-xl z-10">
            <SiMaterialdesignicons size={22} />
          </figure>
          <CircleAnimation
            layout="absolute top-4 left-0 flex-col"
            className={{
              first: "bg-green-500 h-[15px] w-[40px] blur-xl",
              second: "bg-blue-500 h-[15px] w-[40px] blur-xl",
            }}
          />
          <div className="pl-12 flex flex-col gap-1">
            <Title className="font-bold">디자인 모드</Title>
            <Text className="text-sm text-neutral-400">
              코딩없이, 시각적인 디자인모드를 지원하여 유지에도 어려움 없게 변경
              및 수정이 가능해요.
            </Text>
          </div>
        </section>
        <section className="mt-4 flex relative">
          <figure className="absolute left-[-6px] top-1 bg-[#00000090] h-[40px] w-[40px] border-[1px] flex items-center justify-center rounded-xl z-10">
            <TbSitemap size={22} />
          </figure>
          <CircleAnimation
            layout="absolute top-4 left-0 flex-col"
            className={{
              first: "bg-green-500 h-[15px] w-[40px] blur-xl",
              second: "bg-blue-500 h-[15px] w-[40px] blur-xl",
            }}
          />
          <div className="pl-12 flex flex-col gap-1">
            <Title className="font-bold">사이트 기능</Title>
            <Text className="text-sm text-neutral-400">
              사이트 용도에 따라 아임웹에 탑재된 다양한 기능을 토대로 알맞은
              사이트를 제작하실 수 있어요.
            </Text>
          </div>
        </section>
        <section className="mt-4 flex relative">
          <figure className="absolute left-[-6px] top-1 bg-[#00000090] h-[40px] w-[40px] border-[1px] flex items-center justify-center rounded-xl z-10">
            <MdOutlineAdminPanelSettings size={22} />
          </figure>
          <CircleAnimation
            layout="absolute top-4 left-0 flex-col"
            className={{
              first: "bg-green-500 h-[15px] w-[40px] blur-xl",
              second: "bg-blue-500 h-[15px] w-[40px] blur-xl",
            }}
          />
          <div className="pl-12 flex flex-col gap-1">
            <Title className="font-bold">관리자 페이지</Title>
            <Text className="text-sm text-neutral-400">
              직관적인 관리자페이지를 통해, 마케팅 및 판매채널 / 쇼핑몰운영 /
              예약운영 및 손쉬운 관리가 가능해요.
            </Text>
          </div>
        </section>
        <section className="mt-4 flex relative">
          <figure className="absolute left-[-6px] top-1 bg-[#00000090] h-[40px] w-[40px] border-[1px] flex items-center justify-center rounded-xl z-10">
            <TbAccessible size={22} />
          </figure>
          <CircleAnimation
            layout="absolute top-4 left-0 flex-col"
            className={{
              first: "bg-green-500 h-[15px] w-[40px] blur-xl",
              second: "bg-blue-500 h-[15px] w-[40px] blur-xl",
            }}
          />
          <div className="pl-12 flex flex-col gap-1">
            <Title className="font-bold">기기 접근성</Title>
            <Text className="text-sm text-neutral-400">
              아임웹은 모바일 / PC / 태플릿 사이즈를 지원하며, 반응형웹 페이지를
              한 번에 제작하실 수 있어요.
            </Text>
          </div>
        </section>
        <section className="mb-6 flex relative">
          <figure className="absolute left-[-6px] top-1 bg-[#00000090] h-[40px] w-[40px] border-[1px] flex items-center justify-center rounded-xl z-10">
            <MdEventAvailable size={22} />
          </figure>
          <CircleAnimation
            layout="absolute top-4 left-0 flex-col"
            className={{
              first: "bg-green-500 h-[15px] w-[40px] blur-xl",
              second: "bg-blue-500 h-[15px] w-[40px] blur-xl",
            }}
          />
          <div className="pl-12 flex flex-col gap-1">
            <Title className="font-bold">광고/판매 채널 관리</Title>
            <Text className="text-sm text-neutral-400">
              관리자에 연동된 다양한 광고 및 판매 채널을 통해, 별도의 분산
              관리가 아닌, 통합 관리가 가능해요.
            </Text>
          </div>
        </section>
      </Box>
    </>
  );
}
