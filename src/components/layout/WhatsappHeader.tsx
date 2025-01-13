import React, { useEffect, useState } from "react";
import BackButton from "../icons/BackButton";
import { z } from "zod";
import { appLayoutSchema } from "../../schema";
import { Img } from "remotion";
import { loadFonts } from "../../utils/loadFont";
import HeaderIconsGroup from "../icons/HeaderIcons";

const WhatsappHeader: React.FC<z.infer<typeof appLayoutSchema>> = (props) => {
  const [fontFamily, setFontFamily] = useState<string>("");

  const fonts = loadFonts();
  let iconColor = props.theme == "dark" ?  "#FFF" : "#000";

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
        backgroundColor: props.theme === "dark" ? "#171717" : "#FFF",
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
        <BackButton color={"#0983FE"} />
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
       <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontFamily,
            fontSize: props.header.fontSize,
            fontWeight: 500,
            color: iconColor,
            margin: 0

          }}
        >
          {props.header.username}
        </p>
        <p   style={{
            fontFamily,
            fontSize: 35,
            fontWeight: 600,
            color: "#9E9E9E",
            margin: 0
          }}
        >Online</p>
        </div>
        </div>
      </div>

      <HeaderIconsGroup color={"#007FFF"}/>
    </div>
  );
};

export default WhatsappHeader;
