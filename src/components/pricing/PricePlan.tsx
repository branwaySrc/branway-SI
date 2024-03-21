import React from "react";
import { Title, Container, Section, Text, Box } from "@/manager/lib/@";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";

export default function PricePlan() {
  const currentDate = new Date(Date.now());
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return (
    <Section className="flex flex-col w-full border border-t-transparent border-[#FFFFFF30] pb-10">
      <div className="flex flex-col gap-6 items-center my-10 self-center">
        <Image
          src={"/imweb_transparent.png"}
          alt="imweb"
          height={60}
          width={160}
        />
        <Badge colorScheme="green">이벤트중</Badge>
      </div>
      <div className="px-10 text-sm pb-4 pt-2 text-center">
        브랜웨이는 2024년도부터 독립적인 온라인 창업 서비스 런칭을 위한
        포트폴리오 이벤트를 진행중에 있습니다. <br />
        <br />
        해당 가격은 포트폴리오 활용 동의에 따른 산출된 가격이며, 포트폴리오
        공개를 원치 않으실 경우, 기존 가격으로 서비스를 제공받으실 수 있습니다.
        <br />
        <br />
        포트폴리오 공개란, 추후 브랜웨이는 대외홍보 및 서비스 소개를 위한
        포트폴리오 목적으로 활용됩니다.
      </div>
      <Container className="border rounded-xl border-[#FFFFFF30] mx-4 mt-4 bg-black">
        <PricingLayout>
          <Section className="flex items-center">
            <div className="ml-4 border rounded-full overflow-hidden border-[#FFFFFF30]">
              <Image
                src={"/imweb_name_Logo.jpg"}
                alt="imweb"
                height={60}
                width={60}
              />
            </div>
            <div>
              <Title className="px-4 text-blue-500">스타터</Title>
              <PricingTag>
                40만원{" "}
                <span className="text-base font-regular text-neutral-400 line-through">
                  80만원
                </span>
              </PricingTag>
            </div>
          </Section>
          <ServiceInfo>
            아임웹으로 매체소개 또는 서비스 브랜드 사이트를 만들어 드리는
            솔루션이에요.
          </ServiceInfo>
          <Box>
            <AdvantageTag>브랜드 사이트 제작(PC + Mobile)</AdvantageTag>
            <AdvantageTag>디자인 5 페이지 이내(메인페이지 포함)</AdvantageTag>
            <AdvantageTag>로고제작 + 사이트 기획</AdvantageTag>
            <AdvantageTag>네이버 및 구글 검색가능</AdvantageTag>
            <AdvantageTag>도메인 대행 등록</AdvantageTag>
            <AdvantageTag>디자인 애셋 제공</AdvantageTag>
            <AdvantageTag>30일간 유지 보수 지원</AdvantageTag>
            <AdvantageTag>약 1주일 이내의 작업</AdvantageTag>
          </Box>
          <RequirementsLayout>
            <RequireTag>아임웹 스타터 월 20,000원 결제 필요</RequireTag>
            <RequireTag>
              하나의 중복 된 디자인은 페이지 1개로 인정 되요!
            </RequireTag>
          </RequirementsLayout>
        </PricingLayout>
      </Container>

      <Container className="border rounded-xl border-[#FFFFFF30] mx-4 mt-4 bg-black">
        <PricingLayout>
          <Section className="flex items-center">
            <div className="ml-4 border rounded-full overflow-hidden border-[#FFFFFF30]">
              <Image
                src={"/imweb_name_Logo.jpg"}
                alt="imweb"
                height={60}
                width={60}
              />
            </div>
            <div>
              <Title className="px-4 text-orange-500">쇼핑몰</Title>
              <PricingTag>
                80만원{" "}
                <span className="text-base font-regular text-neutral-400 line-through">
                  160만원
                </span>
              </PricingTag>
            </div>
          </Section>
          <ServiceInfo>
            아임웹으로 독보적이고 멋진 쇼핑몰을 만들어 드리는 솔루션이에요.
          </ServiceInfo>
          <Box>
            <AdvantageTag>쇼핑몰 사이트 제작(PC + Mobile)</AdvantageTag>
            <AdvantageTag>디자인 10 페이지 이내(메인페이지 포함)</AdvantageTag>
            <AdvantageTag>로고제작 + 사이트 기획</AdvantageTag>
            <AdvantageTag>네이버 및 구글 검색가능</AdvantageTag>
            <AdvantageTag>도메인 대행 등록</AdvantageTag>
            <AdvantageTag>디자인 애셋 제공</AdvantageTag>
            <AdvantageTag>PG사 대행 도입(연회비 및 가입비 별도)</AdvantageTag>
            <AdvantageTag>원하시는 아임웹 모듈 전체 적용</AdvantageTag>
            <AdvantageTag>
              인스타그램 / 페이스북 / 구글광고 위젯 연결
            </AdvantageTag>
            <AdvantageTag>30일간 유지 보수 지원</AdvantageTag>
            <AdvantageTag>약 1주일 이내의 작업</AdvantageTag>
          </Box>
          <RequirementsLayout>
            <RequireTag>아임웹 프로 월 30,000원 결제 필요</RequireTag>
            <RequireTag>
              하나의 중복 된 디자인은 페이지 1개로 인정 되요!
            </RequireTag>
          </RequirementsLayout>
        </PricingLayout>
      </Container>

      <Container className="border rounded-xl border-[#FFFFFF30] mx-4 mt-4 bg-black">
        <PricingLayout>
          <Section className="flex items-center">
            <div className="ml-4 border rounded-full overflow-hidden border-[#FFFFFF30]">
              <Image
                src={"/imweb_name_Logo.jpg"}
                alt="imweb"
                height={60}
                width={60}
              />
            </div>
            <div>
              <Title className="px-4 text-purple-500">운영대행 커스텀</Title>
              <PricingTag>월 150만원 부터~</PricingTag>
            </div>
          </Section>
          <ServiceInfo>
            매 주 오프라인 또는 온라인 미팅을 통해 인하우스 MD처럼 서비스를
            이끌어 나갑니다.
          </ServiceInfo>
          <Box>
            <AdvantageTag>사이트 대행 운영</AdvantageTag>
            <AdvantageTag>주기적인 이벤트 기획 및 운영 방안 기획</AdvantageTag>
            <AdvantageTag>무제한 기획 + 사이트 수정</AdvantageTag>
          </Box>
          <RequirementsLayout>
            <RequireTag>아임웹 프로 월 30,000원 결제 필요</RequireTag>
            <RequireTag>최소 3개월 계약으로 진행되요</RequireTag>
            <RequireTag>주기적인 오프라인 또는 온라인 미팅</RequireTag>
            <RequireTag>최대 5 분의 파트너를 모집중에 있습니다.</RequireTag>
            <span className="block">
              <Badge>
                현재 2/5 모집되었어요! {month}월{day}일 기준
              </Badge>
            </span>
          </RequirementsLayout>
        </PricingLayout>
      </Container>
    </Section>
  );
}

function PricingLayout(props: { children: React.ReactNode }) {
  return <div className="py-6">{props.children}</div>;
}

function PricingTag(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-2 items-center text-2xl font-bold my-1 px-4">
        <IoPricetagOutline size={20} color="#FFFFFF80" /> {props.children}
      </div>
    </>
  );
}

function ServiceInfo(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="font-bold my-4 bg-neutral-900 w-full px-4 py-4 border-y border-[#FFFFFF30]">
        <div className="max-w-[300px]">{props.children}</div>
      </div>
    </>
  );
}

function AdvantageTag(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-2 items-center text-sm mt-1 px-4">
        <IoCheckmarkCircleOutline size={22} color="#FFFFFF80" />
        {props.children}
      </div>
    </>
  );
}

function RequirementsLayout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900 border border-[#FFFFFF30] rounded-lg flex flex-col mx-4 gap-[2px] mt-4 px-3 py-3">
      {props.children}
    </div>
  );
}

function RequireTag(props: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-center text-neutral-400 text-sm">
      <FaRegNoteSticky size={16} color="#FFFFFF80" />
      {props.children}
    </div>
  );
}
