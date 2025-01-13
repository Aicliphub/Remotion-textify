import React, { useEffect, useState } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { appLayoutSchema, textMessageSchema } from "../schema";
import BubbleTail from "./icons/BubbleTail";
import { loadFonts } from "../utils/loadFont";
import { messageInAnimation } from "../utils/animations";

//create new interface extending the textMessageSchema
interface MessageProps extends z.infer<typeof textMessageSchema> {
  speaker: "A" | "B";
  nextSpeaker: "A" | "B";
  appLayout: z.infer<typeof appLayoutSchema>;
}

export const Message: React.FC<MessageProps> = (props) => {
  const [fontFamily, setFontFamily] = useState<string>("");

  const fonts = loadFonts();
  useEffect(() => {
    setFontFamily(fonts["Inter"]);
  }, [props]);

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = messageInAnimation(fps, frame);

  const bubbleColor =
    props.appLayout.style === "whatsapp"
      ? props.appLayout.theme === "dark"
        ? "#005C4B"
        : "#E6FFDA"
      : props.appLayout.theme === "dark"
        ? "#7743EA"
        : "#2675FD";

    const textColor = props.appLayout.style === "whatsapp"
    ? props.appLayout.theme === "dark"
      ? "#FFF"
      : "#000"
    : "#FFF";


  return (
    <div
      style={{
        marginBottom: props.nextSpeaker !== props.speaker ? 15 : 7,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 25,
        width: "fit-content",
        maxWidth: "80%",
        fontFamily,
        fontSize: 40,
        fontWeight: 400,
        transform: `scale(1 )`,
        color: textColor,
        textAlign: "left",
        alignSelf: "flex-end",
        backgroundColor: bubbleColor,
        borderRadius: props.appLayout.style === "whatsapp" ? 30 : 50,
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {props.text}
      {props.appLayout.style !== "messenger" &&
        props.nextSpeaker !== props.speaker && (
          <BubbleTail color={bubbleColor} speaker={props.speaker} />
        )}
    </div>
  );
};
