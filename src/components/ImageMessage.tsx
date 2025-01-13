import React, { useEffect, useState } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { appLayoutSchema, imageSchema } from "../schema";
import { messageInAnimation } from "../utils/animations";

export const ImageMessage: React.FC<
  z.infer<typeof imageSchema> & {
    speaker: "A" | "B";
    appLayout: z.infer<typeof appLayoutSchema>;
  }
> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation for the image message
  const scale = messageInAnimation(fps, frame);

  const isSpeakerB = props.speaker === "B";

  const alignSelf = isSpeakerB ? "flex-start" : "flex-end";

  // State to hold the calculated dimensions
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.src = props.url;
    img.onload = () => {
      if (isMounted) {
        const maxWidth = 800; // Maximum width allowed
        const maxHeight = 700; // Maximum height allowed
        const aspectRatio = img.naturalWidth / img.naturalHeight;

        let width = img.naturalWidth;
        let height = img.naturalHeight;

        // Adjust dimensions to fit within maxWidth and maxHeight while maintaining aspect ratio
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }

        // Ensure dimensions are integers
        width = Math.round(width);
        height = Math.round(height);

        setDimensions({ width, height });
      }
    };
    img.onerror = () => {
      if (isMounted) {
        console.error("Failed to load image:", props.url);
        // Set default dimensions or handle the error as needed
        setDimensions({ width: 300, height: 300 });
      }
    };
    return () => {
      isMounted = false;
    };
  }, [props.url]);

  // Wait until dimensions are calculated
  if (!dimensions) {
    return null; // Or render a placeholder/loading indicator
  }

  return (
    <div
      style={{
        display: "flex",
        alignSelf: alignSelf,
        alignItems: "flex-end",
        gap: 20,
      }}
    >
      {isSpeakerB && props.appLayout.showMessageAvatar && (
        <img
          src={props.appLayout.header.avatar}
          alt="Avatar"
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 6,
          }}
        />
      )}
      <div
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <img
          src={props.url}
          alt="Image Message"
          style={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: 10,
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
