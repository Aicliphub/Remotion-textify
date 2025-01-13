import React, { useEffect, useState } from "react";
import BackButton from "../icons/BackButton";
import VideoIcon from "../icons/VideoIcon";
import { z } from "zod";
import { appLayoutSchema } from "../../schema";
import { Img } from "remotion";
import { loadFonts } from "../../utils/loadFont";
import { getTextColor } from "../../utils/textColor";
import PhoneIcon from "../icons/PhoneIcon";

const IMessageHeader: React.FC<z.infer<typeof appLayoutSchema>> = (props) => {
  const [fontFamily, setFontFamily] = useState<string>("");

  const fonts = loadFonts();
  let iconColor = props.theme == "dark" ? "#FFF" : "#007FFF";


  useEffect(() => {
    setFontFamily(fonts[props.header.font] || "");
  }, [props.header.font]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: props.style == "imessage" ? "" : "center",
        justifyContent: props.style == "imessage" ? "space-between" : "",
        gap: 25,
        padding: 40,
        paddingTop: 45,
        paddingBottom: 30,
        height: "220px",
        borderBottom: props.style == "imessage" ? "2px solid #b0b0b0" : "none",
        backgroundColor:
          props.theme == "light" ? "#F3F1F7" : "transparent",
      }}
    >
      <BackButton color={iconColor} />
      <div
        style={{
          display: "flex",
          flexDirection: props.style == "imessage" ? "column" : "row",
          alignItems: "center",
          gap: 10,
          fontFamily,
          fontSize: props.header.fontSize,
          fontWeight: 500,
          color: getTextColor(props.theme),
          marginTop: -20,
        }}
      >
        <Img
          src={props.header.avatar}
          alt="avatar"
          style={{
            borderRadius: 100,
            backgroundColor: "#007FFF",
            width: 110,
            height: 110,
          }}
        />
        {props.header.username}
      </div>
      <VideoIcon color={iconColor} />
    </div>
  );
};

export default IMessageHeader;
