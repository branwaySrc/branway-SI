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
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabOne && tabOne.title) || "꼭 필요한 정보"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabOne && tabOne.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
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
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabTwo && tabTwo.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabThree && tabThree.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabThree && tabThree.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabFour && tabFour.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabFour && tabFour.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabFive && tabFive.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabFive && tabFive.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabSix && tabSix.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabSix && tabSix.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "#FFFFFF50" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabSeven && tabSeven.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8} bg={"#0E0F1480"}>
          {(tabSeven && tabSeven.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
