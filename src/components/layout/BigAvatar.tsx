import React, { useEffect, useState } from "react";
import BackButton from "../icons/BackButton";
import VideoIcon from "../icons/VideoIcon";
import { z } from "zod";
import { appLayoutSchema } from "../../schema";
import { Img } from "remotion";
import { loadFonts } from "../../utils/loadFont";
import { getTextColor } from "../../utils/textColor";

const BigAvatar: React.FC<z.infer<typeof appLayoutSchema>> = (props) => {
  const [fontFamily, setFontFamily] = useState<string>("");

  const fonts = loadFonts();

  useEffect(() => {
    setFontFamily(fonts[props.header.font] || "");
  }, [props.header.font]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        fontFamily,
        fontSize: 50,
        fontWeight: 500,
        color: getTextColor(props.theme),
        marginTop: 20,
      }}
    >
      <Img
        src={props.header.avatar}
        alt="avatar"
        style={{
          borderRadius: 999,
          backgroundColor: "#007FFF",
          width: 300,
          height: 300,
        }}
      />
      {props.header.username}
    </div>
  );
};

export default BigAvatar;
