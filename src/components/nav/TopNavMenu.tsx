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
import Link from "next/link";

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
          <Link prefetch={false} href={"/"}>
            메인홈
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/"}>
            아임웹 제작 서비스
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/"}>
            서비스 가격정책
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/acquire"}>
            문의하기
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
