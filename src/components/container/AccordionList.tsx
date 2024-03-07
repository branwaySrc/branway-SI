import { Box } from "@/manager/lib/HTMLElements";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

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
}

export const AccordionList = (props: AccordionListUi) => {
  const { tabOne, tabTwo, tabThree } = props;
  return (
    <Accordion defaultIndex={[0]} allowMultiple className="border-slate-900">
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "white" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabOne && tabOne.title) || "꼭 필요한 정보"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8}>
          {(tabOne && tabOne.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "white" }}
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
        <AccordionPanel pt={8} pb={8}>
          {(tabTwo && tabTwo.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#0E0F1480", color: "white" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold">
              {(tabThree && tabThree.title) || "그 외, 아셔야 할 내용"}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8}>
          {(tabThree && tabThree.desc) || "Lorem sapsi diaiof osfisnf"}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
