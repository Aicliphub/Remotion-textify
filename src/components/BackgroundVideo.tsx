import React, { useEffect, useState } from "react";
import {
  Loop,
  OffthreadVideo,
  useVideoConfig,
  Sequence,
} from "remotion";
import { getVideoMetadata } from "@remotion/media-utils";

export const BackgroundVideo: React.FC<{
  src: string;
}> = ({ src }) => {
  const { fps, durationInFrames } = useVideoConfig();
  const [videoDurationInFrames, setVideoDurationInFrames] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    getVideoMetadata(src).then((metadata) => {
      if (isMounted) {
        const videoDurationFrames = Math.floor(metadata.durationInSeconds * fps);
        setVideoDurationInFrames(videoDurationFrames);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [src, fps]);

  if (videoDurationInFrames === null) {
    return null;
  }

  console.log("Parent durationInFrames:", durationInFrames);
  console.log("Video durationInFrames:", videoDurationInFrames);

  return (
    <Sequence layout="none" from={0} durationInFrames={durationInFrames}>
      <Loop layout="none" durationInFrames={videoDurationInFrames}>
        <OffthreadVideo src={src} />
      </Loop>
    </Sequence>
  );
};
