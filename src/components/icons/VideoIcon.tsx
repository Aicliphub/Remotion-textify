import React from "react";

// Define the type for the component props
interface VideoIconProps {
  color: string;
}

const VideoIcon: React.FC<VideoIconProps> = ({ color }) => {
  return (
    <svg
      width="70"
      height="46"
      viewBox="0 0 70 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.93651"
        y="1.807"
        width="46.9819"
        height="42.1632"
        rx="7.83031"
        stroke={color}
        strokeWidth="3.61399"
      />
      <path
        d="M53.1239 16.9624L67.197 4.8084C67.5873 4.47135 68.193 4.74859 68.193 5.26425V40.5129C68.193 41.0286 67.5873 41.3058 67.197 40.9688L53.1239 28.8148C49.5076 25.6915 49.5075 20.0856 53.1239 16.9624Z"
        stroke={color}
        strokeWidth="3.61399"
      />
    </svg>
  );
};

export default VideoIcon;
