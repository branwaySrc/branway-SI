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
import { RefObject, useRef } from "react";
import { AbsoluteBg, Button } from "@/manager/lib/HTMLElements";
import { IoArrowBackOutline } from "react-icons/io5";

export const DrawerPopUp = () => {
  const btnRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="py-3 px-8 border-[1px] rounded-full mt-6 border-slate-800"
      >
        포트폴리오 보기
      </button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent className="relative">
          <DrawerHeader className="bg-stone-950 text-slate-200 z-10 flex justify-between">
            <p className="w-full text-center text-lg">
              브랜웨이 포트폴리오 리스트
            </p>
          </DrawerHeader>
          <AbsoluteBg className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-[#01201e50]" />
          <DrawerBody className="bg-neutral-950 text-slate-300"></DrawerBody>
          <DrawerFooter className="bg-stone-950 text-slate-300 z-10 h-14">
            <Button
              onClick={onClose}
              className="text-md w-full font-bold flex items-center justify-center gap-2"
            >
              <IoArrowBackOutline size={24} />
              <p className="mb-[2px]">포트폴리오 나가기</p>
            </Button>
          </DrawerFooter>
          <AbsoluteBg className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#01201e50]" />
        </DrawerContent>
      </Drawer>
    </>
  );
};
