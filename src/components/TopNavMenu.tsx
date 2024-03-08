"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";

export const TopNavMenu = () => {
  return (
    <Menu>
      <MenuButton
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        _expanded={{ bg: "#13111190" }}
        transition="all 0.5s"
        as={Button}
      >
        <CgMenu size={28} color="#FFFFFF" />
      </MenuButton>
      <MenuList bg={"#000000DC"} borderColor={"#FFFFFF50"}>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          메인홈
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          브랜웨이 소개
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          아임웹 서비스
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          가격정책
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          자주 묻는 질문
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
