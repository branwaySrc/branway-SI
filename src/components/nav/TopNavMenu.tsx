"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge,
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
            브랜웨이 소개
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/imweb"}
            className="flex items-center gap-2"
          >
            <p>아임웹 제작 서비스</p>
            <Badge variant="outline" colorScheme="green">
              이벤트중
            </Badge>
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>소개서 디자인 서비스</p>
            <Badge variant="outline">출시예정</Badge>
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/pricing"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>자체 개발 서비스</p>
            <Badge variant="outline">출시예정</Badge>
          </Link>
        </MenuItem>

        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>정부지원 컨설팅 서비스</p>
            <Badge variant="outline">지원마감</Badge>
          </Link>
        </MenuItem>

        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/pricing"}>
            서비스 가격정책
          </Link>
        </MenuItem>

        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/customer-service"}>
            문의하기
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
