import React, { useEffect, useState } from "react";
import { useCurrentFrame, useVideoConfig, Series } from "remotion";
import { z } from "zod";
import { appLayoutSchema, textMessageSchema } from "../schema";
import { Dots } from "./icons/Dots";
import BubbleTail from "./icons/BubbleTail";
import { loadFonts } from "../utils/loadFont";
import { messageInAnimation } from "../utils/animations";

export const MessageWithDots: React.FC<
  z.infer<typeof textMessageSchema> & {
    typingDotsDuration: number;
    showTypingDots: boolean;
    appLayout: z.infer<typeof appLayoutSchema>;
    speaker: "A" | "B";
    nextSpeaker: "A" | "B";
  }
> = (props) => {
  const [fontFamily, setFontFamily] = useState<string>("");

  const fonts = loadFonts();

  useEffect(() => {
    setFontFamily(fonts["Inter"]);
  }, [props]);

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { typingDotsDuration } = props;

  const messageDelay = props.showTypingDots ? typingDotsDuration : 0;

  const dotsScale = messageInAnimation(fps, frame);
  const scale = messageInAnimation(fps, frame);


  const bubbleColor =
  props.appLayout.style === "whatsapp"
    ? props.appLayout.theme === "dark"
      ? "#383838"
      : "#FFF"
    :props.appLayout.theme === "dark" ? "#262626" : "#EEEFEE";

  const textColor = props.appLayout.style === "whatsapp"
  ? props.appLayout.theme === "dark"
    ? "#FFF"
    : "#000"
  : "#FFF";

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-start",
        marginBottom: (props.nextSpeaker!==props.speaker) ? 15 : 5,
        alignItems: "end",
        gap: 20,
        width: "100%",
      }}
    >
      {props.appLayout.showMessageAvatar == true && (
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
      <Series>
        {props.showTypingDots === true ? (
          <Series.Sequence
            name="Typing Dots"
            layout="none"
            durationInFrames={typingDotsDuration}
          >
            <div
              style={{
                display: "flex",
                width: "fit-content",
                transform: `scale(${dotsScale})`,
              }}
            >
              <Dots />
            </div>
          </Series.Sequence>
        ) : null}
        <Series.Sequence
          name="Author 2 Message"
          layout="none"
          durationInFrames={Infinity}
        >
          {/* <MessageAudio {...props.messageAudio} /> */}
          <div
            style={{
              position: "relative",
              display: "flex",paddingTop: 25,
              paddingBottom: 20,
              paddingLeft: 30,
              paddingRight: 24,
              width: "fit-content",
              maxWidth: "75%",
              fontFamily,
              fontSize: 40,
              fontWeight: 400,
              color: props.appLayout.theme === "dark" ? "#FFF" : "#000",
              textAlign: "left",
              backgroundColor: bubbleColor,
              // transform: `scale(${scale})`,
              borderRadius: props.appLayout.style === "whatsapp" ? 30 : 50,
              boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            {props.text}
            {props.appLayout.style !== "messenger " &&  (props.nextSpeaker!==props.speaker) && (
              <BubbleTail color={bubbleColor} speaker={props.speaker} />
            )}
          </div>
        </Series.Sequence>
      </Series>
    </div>
  );
};
