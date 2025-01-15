import React from "react";

interface BubbleTailProps {
  speaker: "A" | "B";
  color: string;
}

const BubbleTail: React.FC<BubbleTailProps> = (props) => {
  return (
    <svg
      style={{
        position: "absolute",
        bottom: -5,
        right: props.speaker === "A" ? -21 : "auto",
        left: props.speaker === "B" ? -21 : "auto",
        transform: props.speaker === "B" ? "scaleX(-1)" : "none",
      }}
      width="50"
      height="57"
      viewBox="0 0 50 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 57C24.6667 38.5135 26.6667 0 26.6667 0L0 38.5135C16 50.8378 40 55.973 50 57Z"
        fill={props.color}
        
      />
    </svg>
  );
};

export default BubbleTail;
