import React from "react";
import "./LineSet.css";

export const CircleLineSet = () => {
  return (
    <div
      className="h-[100%] w-[450px] flex flex-nowrap items-center justify-center overflow-hidden z-[-1] "
      style={{
        position: "absolute",
        top: "54%",
        left: "50.5%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="absolute top-[44.5%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation h-[42px] w-[50px] bg-black z-[100] rounded-full  blur-sm" />
      <div className="absolute top-[44.5%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation-1 h-[120px] w-[100px] bg-blue-800 z-[99] rounded-none blur-2xl" />
      <div className="absolute top-[44%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation h-[80px] w-[120px] bg-teal-900 z-[98] rounded-full blur-lg" />
      <div className="absolute top-[44.5%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation-4 h-[120px] w-[180px] bg-slate-900 z-[97] rounded-sm blur-3xl" />
      <div className="absolute top-[44.5%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation-5 h-[80px] w-[200px] bg-sky-900 z-[95] rounded-sm blur-xl" />
      <div className="absolute top-[44.5%] transform -translate-x-1/5 -translate-y-1/2 animate-rotation-2 h-[120px] w-[150px] bg-neutral-800 z-[96] rounded-sm blur-3xl opacity-80" />
    </div>
  );
};
