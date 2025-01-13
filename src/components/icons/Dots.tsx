import React from "react";
import { Lottie } from "@remotion/lottie";
import * as animationData from "./imessage.json";

export const Dots: React.FC = () => {
  return (
    <div
      style={{
        height: 130,
        width: 230,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        style={{
          marginLeft: -30,
        }}
      />
    </div>
  );
};
