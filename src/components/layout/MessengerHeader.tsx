import React, { useEffect, useState } from "react";
import BackButton from "../icons/BackButton";
import VideoIcon from "../icons/VideoIcon";
import { z } from "zod";
import { appLayoutSchema } from "../../schema";
import { Img } from "remotion";
import { loadFonts } from "../../utils/loadFont";
import PhoneIcon from "../icons/PhoneIcon";

const MessengerHeader: React.FC<z.infer<typeof appLayoutSchema>> = (props) => {
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
        alignItems: "center",
        justifyContent: "space-between",
        gap: 25,
        padding: 40,
        paddingTop: 25,
        paddingBottom: 30,
        height: "150px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 35,
        }}
      >
        <BackButton color={iconColor} />
        <div style={{ display: "flex", flexDirection: "row",alignItems:"center", gap: 25 }}>
        <Img
          src={props.header.avatar}
          alt="avatar"
          style={{
            borderRadius: 100,
            backgroundColor: "#007FFF",
            width: 100,
            height: 100,
          }}
        />
        <p
          style={{
            fontFamily,
            fontSize: props.header.fontSize,
            fontWeight: 500,
            color: iconColor
          }}
        >
          {props.header.username}
        </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 45 }}>
      <PhoneIcon color={iconColor} />
      <VideoIcon color={iconColor} />

      </div>
    </div>
  );
};

export default MessengerHeader;
