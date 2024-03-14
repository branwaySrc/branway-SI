"use client";

import React, { useState } from "react";
import "./ToggleBtnShiftSheet.css";
import { Title, Box, Text } from "@/manager/lib/HTMLElements";
import CircleAnimation from "@/components/animate/CircleAnimation";

const ToggleBtnShiftSheet: React.FC = () => {
  const [view, setView] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "toggle") {
      target.classList.remove("pristine");
      setView(!view);
    }
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center border-b-[1px] border-[#FFFFFF30]">
      <CircleAnimation
        layout="absolute bottom-[-10px]"
        className={{
          first: "bg-green-500 h-[200px] w-[80px] blur-[80px] opacity-60",
          second: "bg-blue-500 h-[40px] w-[200px] blur-[80px]",
        }}
      />
      <Box className="flex flex-col items-center mt-10 gap-1 mb-10 pb-2">
        <Title className="font-bold text-2xl mt-4 ml-2">
          아임웹이{" "}
          <span className={view ? "text-neutral-400" : "text-blue-500"}>
            {view ? "없다면 😢" : "있다면 😊"}
          </span>
        </Title>
        <Text className="text-neutral-400">
          비교를 통해 선택의 확신을 넣어드려요!
        </Text>
      </Box>
      <div className="flex justify-center flex-col items-center pb-[70px]">
        <input
          className="pristine"
          type="checkbox"
          name="toggle"
          value="on"
          onClick={handleClick}
        />
        <div className="mt-10 text-sm text-neutral-300 px-3 py-1 border-[1px] border-[#FFFFFF10] rounded-full bg-neutral-950">
          비교를 위해 눌러보세요!
        </div>
      </div>
    </div>
  );
};

export default ToggleBtnShiftSheet;
