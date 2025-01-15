import React from "react";
import { Sequence, Audio, useVideoConfig } from "remotion";
import { z } from "zod";
import { BackgroundMusicSchema } from "./schema";

export const BackgroundMusic: React.FC<
  z.infer<typeof BackgroundMusicSchema>
> = (props) => {
  const { fps } = useVideoConfig();
  return (
    <Sequence from={0}>
      <Audio
        src={`${props.src}`}
        volume={props.volume / 100}
        muted={props.muted}
        loop={props.loop}
        startFrom={props.startFrom * fps}
      />
    </Sequence>
  );
};
