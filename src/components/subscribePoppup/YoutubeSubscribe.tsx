import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  Audio,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { subscribePoppupSchema } from "./schema";
import { loadFont } from "@remotion/google-fonts/Inter";


export const YouTubeSubscribePopup: React.FC<
  z.infer<typeof subscribePoppupSchema>
> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryFrame = props.enterTime * fps;
  const poppupDuration = 150;
  const exitFrame = entryFrame + poppupDuration;

  const { fontFamily } = loadFont();

  const translateYIn = interpolate(
    frame,
    [entryFrame, entryFrame + 25],
    [180, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.25, 1, 0.5, 1),
    },
  );

  // Exit animation with its own easing
  const translateYOut = interpolate(
    frame,
    [exitFrame - 25, exitFrame],
    [0, 180],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.5, 0, 0.75, 0),
    },
  );

  const opacity = interpolate(
    frame,
    [entryFrame, entryFrame + 25, exitFrame - 25, exitFrame],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = frame < exitFrame - 25 ? translateYIn : translateYOut;

  const clickAnimationStart = entryFrame + 60; // Start click animation after 60 frames from entry
  const scale = interpolate(
    frame,
    [
      clickAnimationStart-2   ,
      clickAnimationStart + 5,
      clickAnimationStart + 10,
    ],
    [1, 0.85, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.25, 1, 0.5, 1),
    },
  );

  return (
    <>
      <Sequence name="Subscribe Popup Audio" from={clickAnimationStart-22}>
        {/* Click SFX */}
        <Audio
          src={
            "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728931374/Mouse_Click_-_Sound_Effect_HD_ezmp3.cc_hf7ibj.mp3"
          }
          volume={20}

        />
      </Sequence>
      <Sequence name="Subscribe Popup" from={entryFrame} durationInFrames={poppupDuration}> 
        <AbsoluteFill
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "40px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: `${props.marginBottom}%`,
              left: "50%",
              width: "70%",
              transform: `translate(-50%, ${translateY}%)`,
              backgroundColor: "#ffffff",
              color: "black",
              padding: "45px 60px",
              borderRadius: "25px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              opacity,
              fontFamily,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={props.url}
                alt="Channel Logo"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />

              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
              fontFamily,

                }}
              >
                {props.channelName}
              </div>
            </div>
            <div
              style={{
                backgroundColor:
                  frame > clickAnimationStart ? "#eaeaea" : "#E81700",
                color: frame > clickAnimationStart ? "#767676" : "white",
                padding: "15px 25px",
                borderRadius: "5px",
                fontSize: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                transform: `scale(${scale})`,
                transition: "transform 0.2s ease, background-color 0.2s ease",
              fontFamily,

              }}
            >
              SUBSCRIBE
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
