import {
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Menu,
  Badge,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function PCMenu() {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.5s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "#000000" }}
        _expanded={{ bg: "#13111190" }}
        _focus={{ boxShadow: "outline" }}
      >
        <div className="flex gap-2">
          메뉴 보기
          <ChevronDownIcon />
        </div>
      </MenuButton>

      <MenuList bg={"#000000"} borderColor={"#FFFFFF50"}>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/"}>
            브랜웨이 소개
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/imweb"}
            className="flex items-center gap-2"
          >
            <p>아임웹 제작 솔루션</p>
            <Badge variant="outline" colorScheme="green">
              이벤트중
            </Badge>
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>디자인 솔루션</p>
            <Badge variant="outline">출시예정</Badge>
          </Link>
        </MenuItem>
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/pricing"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>템플릿 소스 솔루션</p>
            <Badge variant="outline">출시예정</Badge>
          </Link>
        </MenuItem>

        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link
            prefetch={false}
            href={"/"}
            className="text-[#FFFFFF50] flex items-center gap-2"
          >
            <p>창업패키지 솔루션</p>
            <Badge variant="outline">지원마감</Badge>
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem bg={"#000000E8"} px={4} py={2}>
          <Link prefetch={false} href={"/pricing"}>
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
}
