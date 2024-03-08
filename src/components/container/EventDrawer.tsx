"use client";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { RefObject, useRef, useState, useEffect } from "react";
import { AbsoluteBg, Box, Button } from "@/manager/lib/HTMLElements";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";

export const EventDrawer = () => {
  const btnRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Box
        style={{ display: show === true ? "flex" : "none" }}
        className="text-slate-300 font-bold mt-6 w-full h-[80px] fixed bottom-0 bg-[#00000050] border-t-[1px] border-green-900 items-center justify-between px-4 bg-clip-padding backdrop-filter backdrop-blur-lg z-50"
      >
        <button ref={btnRef} onClick={onOpen} className="flex flex-col">
          <p className="text-sm text-left text-green-500">
            최소 30만원부터 ~ 10명의 고객분을 모십니다!
          </p>
          <p className="text-sm text-left flex items-center">
            이벤트 자세히보기
            <FaCaretRight size={20} />
          </p>
        </button>
        <button className="pr-2" onClick={() => setShow(false)}>
          X
        </button>
      </Box>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent className="relative">
          <DrawerHeader className="bg-stone-950 text-slate-200 z-10 flex justify-between">
            <p className="w-full text-center text-lg">
              브랜웨이 포트폴리오 리스트
            </p>
          </DrawerHeader>
          <AbsoluteBg className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-[#01201e50]" />
          <DrawerBody className="bg-neutral-950 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam, sed quo deleniti commodi quas illum, earum nulla sint,
            dolorum mollitia ad quam pariatur molestias tempore beatae voluptate
            porro praesentium?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam, sed quo deleniti commodi quas illum, earum nulla sint,
            dolorum mollitia ad quam pariatur molestias tempore beatae voluptate
            porro praesentium?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam, sed quo deleniti commodi quas illum, earum nulla sint,
            dolorum mollitia ad quam pariatur molestias tempore beatae voluptate
            porro praesentium?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam, sed quo deleniti commodi quas illum, earum nulla sint,
            dolorum mollitia ad quam pariatur molestias tempore beatae voluptate
            porro praesentium?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam, sed quo deleniti commodi quas illum, earum nulla sint,
            dolorum mollitia ad quam pariatur molestias tempore beatae voluptate
            porro praesentium?
          </DrawerBody>
          <DrawerFooter className="bg-stone-950 text-slate-300 z-10 h-14">
            <Button
              onClick={onClose}
              className="text-md w-full font-bold flex items-center justify-center gap-2"
            >
              <IoArrowBackOutline size={24} />
              <p className="mb-[2px]">이벤트 나가기</p>
            </Button>
          </DrawerFooter>
          <AbsoluteBg className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#01201e50]" />
        </DrawerContent>
      </Drawer>
    </>
  );
};
