import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@/manager/lib/HTMLElements";

interface AccordionListUi {
  tabOne?: {
    title?: string;
    desc?: string;
  };
  tabTwo?: {
    title?: string;
    desc?: string;
  };
  tabThree?: {
    title?: string;
    desc?: string;
  };
  tabFour?: {
    title?: string;
    desc?: string;
  };
  tabFive?: {
    title?: string;
    desc?: string;
  };
  tabSix?: {
    title?: string;
    desc?: string;
  };
  tabSeven?: {
    title?: string;
    desc?: string;
  };
}

export const FaqList = (props: AccordionListUi) => {
  const { tabOne, tabTwo, tabThree, tabFour, tabFive, tabSix, tabSeven } =
    props;
  return (
    <Accordion allowMultiple className="border-slate-900">
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabOne && tabOne.title) || "꼭 필요한 정보"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabOne && tabOne.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {" "}
              {(tabTwo && tabTwo.title) || "레퍼런스 정보"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabTwo && tabTwo.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabThree && tabThree.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabThree && tabThree.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabFour && tabFour.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabFour && tabFour.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabFive && tabFive.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabFive && tabFive.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabSix && tabSix.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabSix && tabSix.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabSeven && tabSeven.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          {(tabSeven && tabSeven.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#050505", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              왜 템플릿 솔루션이 갑자기 출시준비로 바뀌었나요?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#050505"}>
          메인 프레임워크 NextJS의 page router에서 app router로 리팩토링 중에
          있습니다. 완료되는데로 다시 재 출시할 예정이에요. 더불어,
          바닐라자바스크립트를 통해 간편한 브랜드 페이지, 서비스 소개페이지를
          선보일 수 있는 템플릿을 함께 출시중에 있습니다.
          <br />
          <br />
          기존 템플릿을 구매해 주신 파트너분들의 프로젝트 또한 변경된 사항을
          일괄적으로 업데이트 해 드릴 예정이므로 정확한 재출시의 시기를 전달드릴
          수 없는점 양해 부탁드립니다.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
