"use client";

import { Box, Button, useToast } from "@chakra-ui/react";

export default function UnderConstructToast(props: {
  children?: React.ReactNode;
  className?: string;
  innerText?: string;
}) {
  const toast = useToast();
  return (
    <button
      className={props.className}
      onClick={() =>
        toast({
          position: "top-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              {props.innerText}
            </Box>
          ),
        })
      }
    >
      <div>{props.children}</div>
    </button>
  );
}
