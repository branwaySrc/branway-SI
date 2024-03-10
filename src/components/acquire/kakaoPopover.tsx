"use client";

import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  useToast,
  useClipboard,
  Badge,
} from "@chakra-ui/react";
import { SiKakaotalk } from "react-icons/si";
import { HiOutlinePaperClip } from "react-icons/hi2";
import { Box } from "@/manager/lib/@";

export const KakaoPopover = (props: { children: React.ReactNode }) => {
  const toast = useToast();
  const kakaoUrl = "contact@branway.kr";
  const { onCopy } = useClipboard(kakaoUrl);

  const handleClick = () => {
    toast({
      title: `카카오채널 URL을 복사했어요!`,
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg={"transparent"}
          color={"#FFFFFF99"}
          _hover={{ bg: "transparent", color: "#FFFFFF" }}
        >
          {props.children}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          bg={"#transparent"}
          overflow={"hidden"}
          border={"transparent"}
        >
          <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border-[1px] border-[#FFFFFF30] rounded-lg">
            <PopoverHeader color={"#FFFFFF99"} border={"#00000000"}>
              <Badge colorScheme="yellow">카카오톡채널</Badge>
            </PopoverHeader>
            <PopoverBody>
              <Box className="flex gap-6 items-center">
                <Box className="p-2 flex flex-col items-center gap-2">
                  <button>
                    <SiKakaotalk size={48} color="#FFAE00" />
                  </button>
                  <p className="text-white text-xs">이동하기</p>
                </Box>
                <Box className="flex flex-col gap-2 items-center">
                  <div className="mb-2">
                    <Button
                      bg={"transparent"}
                      color={"#FFFFFF99"}
                      _hover={{ bg: "transparent", color: "#FFFFFF" }}
                      onClick={handleClick}
                    >
                      <HiOutlinePaperClip size={30} color="#FFFFFF" />
                    </Button>
                  </div>
                  <p className="text-white text-xs">URL 복사하기</p>
                </Box>
              </Box>
            </PopoverBody>
            <PopoverFooter color={"#F4F4F4"} border={"#00000000"}>
              <Badge variant="outline" colorScheme="green">
                아이콘 클릭 시, 카카오채널로 이동해요!
              </Badge>
            </PopoverFooter>
          </div>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
