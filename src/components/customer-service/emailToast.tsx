"use client";

import {
  Button,
  Wrap,
  WrapItem,
  useToast,
  useClipboard,
} from "@chakra-ui/react";

export function EmailToast(props: { children?: React.ReactNode }) {
  const toast = useToast();
  const email = "contact@branway.kr";
  const { onCopy } = useClipboard(email);

  const handleClick = () => {
    toast({
      title: `이메일을 복사했어요!`,
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <Button
      bg={"transparent"}
      color={"#FFFFFF99"}
      _hover={{ bg: "transparent", color: "#FFFFFF" }}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}
