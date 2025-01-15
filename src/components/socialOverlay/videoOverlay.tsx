import React from "react";
import { Lottie } from "@remotion/lottie";
import tiktok from "./yt-overlay.json";
import youtube from "./tk-overlay.json";
// import tiktok from "./test.json";
// import youtube from "./test.json";

import { z } from "zod";
import { overlaySchema } from "./schema";

type OverlayProps = z.infer<typeof overlaySchema>;

export const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <>
      {props.youtube && (
        <Lottie
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          animationData={youtube}
          loop
        />
      )}
      {props.tiktok && (
        <Lottie
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          animationData={tiktok}
          loop
        />
      )}
    </>
  );
};
