import React from "react";
import { z } from "zod";
import { logoSchema } from "./logoSchema";
import { Img } from "remotion";

type LogoWatermarkProps = {
  logo: z.infer<typeof logoSchema>;
};

const LogoWatermark: React.FC<LogoWatermarkProps> = ({ logo }) => {
  const { url, position, margin, borderRadius, opacity, maxWidth } = logo;

  const mappedOpacity = opacity / 100;

  const getPositionStyle = (): React.CSSProperties => {
    switch (position) {
      case "Top Left":
        return {
          top: `${margin.marginY}%`,
          left: `${margin.marginX}%`,
          transform: "translate(0, 0)",
        };
      case "Top Right":
        return {
          top: `${margin.marginY}%`,
          right: `${margin.marginX}%`,
          transform: "translate(0, 0)",
        };
      case "Bottom Left":
        return {
          bottom: `${margin.marginY}%`,
          left: `${margin.marginX}%`,
          transform: "translate(0, 0)",
        };
      case "Bottom Right":
        return {
          bottom: `${margin.marginY}%`,
          right: `${margin.marginX}%`,
          transform: "translate(0, 0)",
        };
      case "Top Center":
        return {
          top: `${margin.marginY}%`,
          left: "50%",
          transform: "translate(-50%, 0)",
        };
      case "Bottom Center":
        return {
          bottom: `${margin.marginY}%`,
          left: "50%",
          transform: "translate(-50%, 0)",
        };
      case "Left Center":
        return {
          top: "50%",
          left: `${margin.marginX}%`,
          transform: "translate(0, -50%)",
        };
      case "Right Center":
        return {
          top: "50%",
          right: `${margin.marginX}%`,
          transform: "translate(0, -50%)",
        };
      case "Center":
        return {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      default:
        return {
          top: `${margin.marginY}%`,
          left: `${margin.marginX}%`,
          transform: "translate(0, 0)",
        };
    }
  };

  const watermarkStyle: React.CSSProperties = {
    position: "absolute",
    opacity: mappedOpacity,
    borderRadius,
    width: `${maxWidth}px`,
    ...getPositionStyle(),
  };

  return <Img src={url} alt="Logo Watermark" style={watermarkStyle} />;
};

export default LogoWatermark;
