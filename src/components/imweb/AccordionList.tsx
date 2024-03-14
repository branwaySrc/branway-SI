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
}

export const AccordionList = (props: AccordionListUi) => {
  const { tabOne, tabTwo, tabThree } = props;
  return (
    <Accordion allowMultiple className="border-[#FFFFFF30]">
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#000000", color: "white" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold"></Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8}></AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#000000", color: "white" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold"></Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8}></AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{ bg: "#000000", color: "white" }}
            pb={4}
            pt={4}
          >
            <Box className="font-bold"></Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={8} pb={8}></AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
