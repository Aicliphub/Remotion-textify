import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { aspectRatioSchema } from "../schema";

type AspectRatioProps = {
  aspectRatio: z.infer<typeof aspectRatioSchema>;
  children: React.ReactNode;
};

export const AspectRatio: React.FC<AspectRatioProps> = ({
  aspectRatio,
  children,
}) => {
  const dimensions = {
    "9:16": {
      width: 1080,
      height: 1920,
    },
    "16:9": {
      width: 1920,
      height: 1080,
    },
  };

  const { width, height } = dimensions[aspectRatio];

  return (
    <AbsoluteFill
      style={{
        width,
        height,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
