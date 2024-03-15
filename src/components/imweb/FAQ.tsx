import { Box, Title, Text, Container } from "@/manager/lib/@";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

export default function ProjectFAQ() {
  return (
    <>
      <Box className="flex flex-col items-center mt-20 gap-3 border-t-[1px] border-[#FFFFFF30] pt-10">
        <Title className="font-bold text-2xl">자주묻는 질문을 모았어요</Title>
        <Text className="text-neutral-400 max-w-[80%] text-center leading-6">
          혹시, 궁금증이 해결되지 않으셨나요?
          <br />
          <Link href={"/acquire"} className="text-blue-500">
            문의하기
          </Link>
        </Text>
      </Box>
      <Container className="mt-10 flex justify-center">
        <Box className="w-full">
          <Accordion allowMultiple className="border-[#FFFFFF30]">
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#000000", color: "#FFFFFF20" }}
                  pb={4}
                  pt={4}
                >
                  <Title className="font-bold text-left">
                    아임웹에서 원하는 모든 기능구현이 가능한지 알고싶습니다.
                  </Title>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pt={8} pb={8}>
                아임웹은 브랜딩 사이트, 예약 사이트, 쇼핑몰 사이트를 중심으로
                기능제공을 하고 있습니다. 만약 파트너님께서 요청하신 기능이
                아임웹으로 구현이 어렵다면, 아임웹에서 제공하는 기능을 통해
                유사한 기능처럼 사용하실 수 있도록 제안해 드려요. 만약 불가능 할
                경우 사전에 미리 불가능 통보를 드리는 것을 원칙으로
                하고있습니다.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#000000", color: "#FFFFFF20" }}
                  pb={4}
                  pt={4}
                >
                  <Title className="font-bold text-left">
                    제작비용 외, 처음에 들어가는 부가비용들을 알고싶어요.
                  </Title>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pt={8} pb={8}>
                쇼핑몰의 경우, 간편로그인과 간편결제를 원하신다면, 해당 기능
                사용을 위한 비용이 추가로 발생하게 됩니다. 예를 들어,
                토스페이먼츠와 같은 결제모듈은 초기 가입 비용이 발생되며 그 외,
                도메인 / 본인인증 문자 / 카카오채널 등 유료서비스에 해당하는
                기능은 별도로 부담해 주셔야 합니다.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#000000", color: "#FFFFFF20" }}
                  pb={4}
                  pt={4}
                >
                  <Title className="font-bold text-left">
                    평균 작업기간과, 작업중 추가내용이 있다면 어떻게 되는지 알고
                    싶어요.
                  </Title>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pt={8} pb={8}>
                대략 1주일 정도 소요가 됩니다. 온라인 계약이 완료되면 그때부터
                작업이 진행되게 됩니다. 만약 작업중 추가 내용이 있으시다면, 기존
                기획 틀에 있는 한, 추가 내용을 반영해 드립니다. 해당 솔루션에
                대해 세부내용을 알고싶으시다면, 가격정책을 통해 확인해 주시거나
                문의를 주시면 더욱 상세히 안내받으실 수 있습니다.
                <div className="flex gap-4 mt-5">
                  <Link href={"/pricing"} className="text-blue-500 text-sm">
                    가격정책 바로가기
                  </Link>
                  <Link href={"/acquire"} className="text-blue-500 text-sm">
                    문의창구 바로가기
                  </Link>
                </div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#000000", color: "#FFFFFF20" }}
                  pb={4}
                  pt={4}
                >
                  <Title className="font-bold text-left">
                    포트폴리오로 노출 하고싶지 않다면 어떻게 되는지 알고싶어요.
                  </Title>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pt={8} pb={8}>
                본 이벤트는 브랜웨이 포트폴리오를 위한 가격이벤트 입니다. 만약
                공개를 하고 싶지 않으실 경우, 할인이 적용된 금액으로 솔루션을
                제공 받으실 수 없습니다.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#000000", color: "#FFFFFF20" }}
                  pb={4}
                  pt={4}
                >
                  <Title className="font-bold text-left">
                    제작에 앞서 계약의 경우, 비용을 분할해서 납부할 수 있는지
                    알고싶어요.
                  </Title>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pt={8} pb={8}>
                분할의 경우, 브랜웨이 운영원칙에 따라 총 견적 50만원 이상부터
                가능하며, 만약 총 견적이 100만원 일 경우, 50%/50% 씩 분할되어
                진행 하실 수 있습니다.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </>
  );
}
