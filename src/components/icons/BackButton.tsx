import React from "react";

// Define the type for the component props
interface BackButtonProps {
  color: string;
}

const BackButton: React.FC<BackButtonProps> = ({ color }) => {
  return (
    <svg
      width="28"
      height="50"
      viewBox="0 0 32 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5026 4L3.92113 27.4109C2.89136 28.3916 2.93059 30.0463 4.00569 30.9771L28.5026 52.1865"
        stroke={`${color}`}
        strokeWidth="6.02332"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BackButton;
