import React from "react";
import "./CircleAnimation.css";

interface CircleAnimationProps {
  layout?: string;
  className?: {
    first?: string;
    second?: string;
  };
}

const CircleAnimation = (props: CircleAnimationProps) => {
  return (
    <div className={`circle-container flex ${props.layout}`}>
      <div className={`circle ${props.className?.first}`} />
      <div className={`circle ${props.className?.second}`} />
    </div>
  );
};

export default CircleAnimation;
