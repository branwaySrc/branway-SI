"use client";

import React, { useState } from "react";
import "./ToggleBtnShiftSheet.css";
import { Title, Box, Text, Container } from "@/manager/lib/HTMLElements";
import CircleAnimation from "@/components/animate/CircleAnimation";
import { FiCoffee } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { MdOutlineCloudDone } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";

import { FaCode } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa6";
import { GoCodespaces } from "react-icons/go";
import { TbBellCode } from "react-icons/tb";

const ToggleBtnShiftSheet: React.FC = () => {
  const [view, setView] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "toggle") {
      target.classList.remove("pristine");
      setView(!view);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden flex flex-col items-center border-b-[1px] border-[#FFFFFF30]">
        <CircleAnimation
          layout="absolute right-0 bottom-[-120px]"
          className={{
            first: `${
              view ? "bg-yellow-700" : "bg-blue-700"
            } h-[80px] w-[180px] blur-3xl`,
          }}
        />
        <Box className="flex flex-col items-center mt-10 gap-2 mb-10 pb-2">
          <Title className="font-bold text-2xl mt-4 text-center">
            아임웹을 <br />
            <span className={view ? "text-neutral-400" : "text-blue-500"}>
              {view ? "사용하지 않는다면?" : "사용하고 있다면?"}
            </span>
          </Title>
          <Text className="text-neutral-400">
            비교를 통해 선택의 확신을 넣어드려요!
          </Text>
        </Box>
        <div className="flex justify-center flex-col items-center pb-[40px]">
          <input
            className="pristine"
            type="checkbox"
            name="toggle"
            value="on"
            onClick={handleClick}
          />
          <div className="mt-10 text-sm text-neutral-300 px-3 py-1 border-[1px] border-[#FFFFFF10] rounded-full bg-neutral-950">
            비교를 위해 눌러보세요!
          </div>
        </div>
      </section>
      {view ? <WhenNotUse /> : <WhenUse />}
    </>
  );
};

function WhenUse() {
  return (
    <>
      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <FiCoffee size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            <span className="bg-blue-700">쉬운 관리와 운영하면서 수정</span>이
            수월해요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            디자인 및 상품관리 등, 다양한 유지보수를 관리자페이지를 통해
            관리하실 수 있어요.
          </Text>
        </Box>
        <CircleAnimation
          layout="absolute left-[-50px]"
          className={{
            first: "bg-blue-800 h-[100px] w-[200px] blur-3xl",
          }}
        />
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <FaReact size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            최적화 반응형 사이트를{" "}
            <span className="bg-blue-700">한번에 만들어요.</span>
          </Title>
          <Text className="leading-6 text-neutral-400">
            하나의 도메인으로 PC버전과 모바일 버전을 동시에 제작 및 관리할 수
            있어요.
          </Text>
        </Box>
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <MdOutlineCloudDone size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            오픈 플랫폼에 <span className="bg-blue-700">쉽게 연동</span> 하실 수
            있어요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            관리자 페이지를 통해 다양한 채널에 손쉽게 입점 및 관리를 하실 수
            있어요. 아임웹은 다양한 연동 채널을 보유하고 있답니다.
          </Text>
        </Box>
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <IoChatbubbleEllipsesOutline size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            고객관리, <span className="bg-blue-700">실시간 채팅을</span>{" "}
            연결하실 수 있어요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            손쉬운 위젯관리를 통해 실시간 채팅 및 문의 응대 게시판을 관리하실 수
            있어요.
          </Text>
        </Box>
        <CircleAnimation
          layout="absolute right-[-150px]"
          className={{
            first: "bg-blue-800 h-[80px] w-[200px] blur-3xl",
          }}
        />
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <BsShop size={22} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            결제는 물론, 쇼핑몰 <span className="bg-blue-700">기능이 다양</span>
            해요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            간편 결제 및 간편 로그인을 위젯을 통해 쉽게 구현이 가능해서, 별도의
            도입을 위한 개발비용이 요구되지 않아요.
          </Text>
        </Box>
      </Container>
    </>
  );
}

function WhenNotUse() {
  return (
    <>
      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <FaCode size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            <span className="bg-slate-700">코딩 스킬이</span> 필요할 수 있어요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            자체 사이트를 개발하실 경우, DB관리 및 서버 & API를 직접 운영해야
            되며, 유지보수를 위해서는 코딩 스킬이 요구될 수 있어요.
          </Text>
        </Box>
        <CircleAnimation
          layout="absolute left-[-50px]"
          className={{
            first: "bg-gray-800 h-[100px] w-[200px] blur-3xl",
          }}
        />
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <FaRegFileCode size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            모바일과 PC를 <span className="bg-slate-700">따로 제작해야</span>{" "}
            되요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            경우에 따라 모바일과 PC 디자인을 따로 관리하고 도메인 또한 구분해서
            운영하실 경우가 생길 수 있어요.
          </Text>
        </Box>
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <FaQrcode size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            <span className="bg-slate-700">마케팅을 분리된 채널로</span> 각각
            대응 해야해요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            홍보채널, 판매채널, 응대채널을 각 다른 사이트에서 대응해야될 수
            있어요. 그래서 대응 누락이 생길 수 있어요.
          </Text>
        </Box>
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <GoCodespaces size={24} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            별도 <span className="bg-slate-700">기술도입이</span> 필요할 수
            있어요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            모바일 버전 또는 웹 버전에 따라 기능이 작동되지 않을 경우가 생길 수
            있어요.
          </Text>
        </Box>
        <CircleAnimation
          layout="absolute right-[-100px]"
          className={{
            first: "bg-gray-800 h-[100px] w-[200px] blur-3xl",
          }}
        />
      </Container>

      <Container className="px-6 mt-14 relative">
        <Box className="border-[1px] border-neutral-800 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <TbBellCode size={22} />
        </Box>
        <Box className="mt-4 flex flex-col gap-3">
          <Title className="font-bold text-lg">
            이벤트 페이지를 <span className="bg-slate-700">따로 구현해야</span>{" "}
            할 수 있어요.
          </Title>
          <Text className="leading-6 text-neutral-400">
            이벤트 페이지를 만들어야 할 경우, 따로 페이지를 구축해야 하실 수
            있어요.
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default ToggleBtnShiftSheet;
