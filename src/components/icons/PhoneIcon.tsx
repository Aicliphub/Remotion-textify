import React from "react";

// Define the type for the component props
interface VideoIconProps {
  color: string;
}

const PhoneIcon: React.FC<VideoIconProps> = ({ color }) => {
  return (
    <svg width="50" height="50" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1253 26.6374L19.3626 26.8747C23.4487 30.8306 26.8684 32.6885 29.6215 32.4483L30.4149 31.7081C31.5433 30.6813 32.3942 30.0304 32.9675 29.7555C34.161 29.183 34.9986 29.1944 37.2607 30.4184C40.2365 32.0285 42.2912 33.9001 43.3411 34.9501C44.3161 35.925 44.0132 37.6045 43.6708 38.3496L43.444 38.7651C42.8348 39.8236 40.6255 43.3151 36.3915 43.9124C34.7824 44.1395 32.7512 43.9313 30.3696 43.214C25.2679 41.4478 20.1875 38.2107 15.1283 33.5026L14.2286 32.6479L14.2201 32.6564L13.7859 32.2145L13.3436 31.7799L13.3521 31.7714L12.4974 30.8717C7.78933 25.8125 4.55219 20.7321 2.78598 15.6304C2.06867 13.2488 1.86054 11.2176 2.08755 9.60849C2.72718 5.07483 6.68513 2.86266 7.42112 2.45052L7.49586 2.40834C8.1329 2.04099 10 1.60895 11.0499 2.65888L11.547 3.17013C12.6293 4.31467 14.2015 6.18864 15.5816 8.73934C16.8056 11.0014 16.817 11.839 16.2445 13.0325C15.9085 13.7332 15.0109 14.8486 13.5517 16.3785C13.3115 19.1316 15.1694 22.5513 19.1253 26.6374Z" stroke={color} stroke-width="3.7"/>
</svg>
  );
};

export default PhoneIcon;