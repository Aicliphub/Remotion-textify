import React from "react";

// Define the type for the component props
interface VideoIconProps {
  color: string;
}

const HeaderIconsGroup: React.FC<VideoIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 21"
      height="57"    
      width="175"  
    >
      <path
        d="M64,14.67l-3.23-2.29a4.36,4.36,0,0,0-.82-.45A2.07,2.07,0,0,0,58,12a7.57,7.57,0,0,0-1.53,1.32,18.32,18.32,0,0,1-4.82-4.8h0A8.49,8.49,0,0,0,53,7.05a2,2,0,0,0,.12-1.95,4,4,0,0,0-.47-.83L50.4,1.11a2.49,2.49,0,0,0-2-1,3.55,3.55,0,0,0-2.52,1.1c-1.57,1.4-2.07,3.46-1.43,6,1.41,5.55,8.19,12.28,13.69,13.57a5.6,5.6,0,0,0,5.82-1.51A3.89,3.89,0,0,0,65,16.65a2.31,2.31,0,0,0-1-2Zm-1.21,3.55c-1,1.14-2.45,1.49-4.36,1-5-1.17-11.31-7.47-12.58-12.49-.5-1.95-.17-3.46,1-4.51.73-.65,1.58-1.07,2.33-.29.24.38,2.46,3.37,2.56,3.72a.6.6,0,0,1-.05.64,10.41,10.41,0,0,1-1.12,1.25,1.42,1.42,0,0,0-.17,1.76,20,20,0,0,0,5.36,5.33,1.38,1.38,0,0,0,1.7-.15,8.26,8.26,0,0,1,1.31-1.18c.33-.24.79,0,1.15.27l3.23,2.3c.69.5.28,1.63-.36,2.32Z"
        fill="#0a84ff"
      />
      <path
        d="M21.44,4.91,17.85,7.4V5.85A3.76,3.76,0,0,0,14.09,2.1H3.76A3.75,3.75,0,0,0,0,5.85v9.2a3.76,3.76,0,0,0,3.76,3.76H14.11a3.76,3.76,0,0,0,3.75-3.76v-1.5L21.47,16A2.24,2.24,0,0,0,25,14.16V6.76a2.25,2.25,0,0,0-3.54-1.85ZM16.22,15.1a2.08,2.08,0,0,1-2.06,2.08H3.69a2.07,2.07,0,0,1-2.07-2.07h0V5.8A2.07,2.07,0,0,1,3.69,3.73H14.16A2.07,2.07,0,0,1,16.23,5.8Zm7.13-.76a.54.54,0,0,1-.31.49.57.57,0,0,1-.55-.05l-4.57-3.13V9.31L22.5,6.14a.53.53,0,0,1,.61,0,.56.56,0,0,1,.24.46Z"
        fill="#0a84ff"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default HeaderIconsGroup;
