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
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const DrawerPopUp = () => {
  const btnRef: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="py-3 px-8 border-[1px] rounded-full mt-6 border-neutral-800"
      >
        포트폴리오 보기
      </button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent className="relative">
          <DrawerHeader className="bg-stone-950 text-slate-200 z-10 flex flex-col gap-1">
            <p className="w-full text-center text-lg">
              브랜웨이 포트폴리오 리스트
            </p>
            <p className="w-full text-center text-xs text-neutral-400">
              본 포트폴리오는 파트너분의 공개 허용에 따라 개시되었습니다.
            </p>
          </DrawerHeader>
          <AbsoluteBg className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-[#01201e50]" />
          <DrawerBody className="bg-neutral-950 text-neutral-300 w-full">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                <>
                  <CarouselItem>
                    <section>
                      <div className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={"/portfolio/portfolio1.png"}
                          alt="company"
                          height={300}
                          width={200}
                        />
                      </div>
                      <article className="text-center pb-4">
                        <h1>타임블루 - 명품시계 매장 운영 사이트</h1>
                        <p className="text-sm text-neutral-400">
                          카페24에서 아임웹 서비스로 이전
                        </p>
                      </article>
                    </section>
                  </CarouselItem>
                  <CarouselItem>
                    <section>
                      <div className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={"/portfolio/portfolio2.png"}
                          alt="company"
                          height={300}
                          width={200}
                        />
                      </div>
                      <article className="text-center pb-4">
                        <h1>메타럭스 - 중고명품 판매 사이트</h1>
                        <p className="text-sm text-neutral-400">
                          네이버스토어에서 아임웹 서비스로 이전
                        </p>
                      </article>
                    </section>
                  </CarouselItem>
                  <CarouselItem>
                    <section>
                      <div className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={"/portfolio/portfolio3.png"}
                          alt="company"
                          height={300}
                          width={200}
                        />
                      </div>
                      <article className="text-center pb-4">
                        <h1>먼로슨 - 해외 직수입 상품 판매 쇼핑몰</h1>
                        <p className="text-sm text-neutral-400">
                          네이버스토어에서 아임웹 서비스로 이전
                        </p>
                      </article>
                    </section>
                  </CarouselItem>
                  <CarouselItem>
                    <section>
                      <div className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={"/portfolio/portfolio4.png"}
                          alt="company"
                          height={300}
                          width={200}
                        />
                      </div>
                      <article className="text-center pb-4">
                        <h1>이누리 - 전기오토바이 제조 판매</h1>
                        <p className="text-sm text-neutral-400">
                          신규 운영 및 제작
                        </p>
                      </article>
                    </section>
                  </CarouselItem>
                </>
              </CarouselContent>
              <CarouselPrevious className="ml-8 sm:hidden" />
              <CarouselNext className="mr-8 sm:hidden" />
            </Carousel>
          </DrawerBody>
          <DrawerFooter className="bg-stone-950 text-neutral-300 z-10 h-14">
            <Button
              onClick={onClose}
              className="text-md w-full font-bold flex items-center justify-center gap-2"
            >
              <IoArrowBackOutline size={24} />
              <p className="mb-[2px]">포트폴리오 나가기</p>
            </Button>
          </DrawerFooter>
          <AbsoluteBg className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#01092050]" />
        </DrawerContent>
      </Drawer>
    </>
  );
};
