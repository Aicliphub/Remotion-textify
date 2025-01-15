import { spring } from "remotion";

export const messageInAnimation = (fps: number, frame: number) => {
  return spring({
    fps,
    frame,
    from: 0.7,
    to: 1,
    durationInFrames: 15,
    config: {
      damping: 11,
    },
  });
};
