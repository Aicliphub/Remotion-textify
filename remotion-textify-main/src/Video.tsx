import React, { CSSProperties} from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  OffthreadVideo,
  Sequence,
  Series,
  useCurrentFrame,
} from "remotion";
import { z } from "zod";
import { elementSchema, videoSchema } from "./schema";
import { BackgroundMusic } from "./components/backgroundMusic/BackgroundMusic";
import { Overlay } from "./components/socialOverlay/videoOverlay";
import { YouTubeSubscribePopup } from "./components/subscribePoppup/YoutubeSubscribe";
import BigAvatar from "./components/layout/BigAvatar";
import Header from "./components/layout/Header";
import {
  calculateElementStartFrame,
  paginateContent,
} from "./utils/calculate";
import { renderElement } from "./components/RenderElement";
import LogoWatermark from "./components/logoWatermark/LogoWatermark";
import { BackgroundVideo } from "./components/BackgroundVideo";


//
export const MyScene: React.FC<z.infer<typeof videoSchema>> = (props) => {
  const { content } = props;
  const frame = useCurrentFrame();

  let globalStyles = props.globalStyles;
  let pageTransitionDuration = globalStyles.pageTransitionDuration;

  const pages: z.infer<typeof elementSchema>[][] = paginateContent(content);

  const getScreenStyle = (chunkIndex: number): CSSProperties => {
    let startFrame = 0;
    for (let i = 0; i < chunkIndex; i++) {
      startFrame += calculateTotalDuration(pages[i]);
    }
  
    const scale = interpolate(
      frame,
      [startFrame, startFrame + 40],
      [0.80, 0.78],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.5, 1, 0.5, 1),
      }
    );
  
    return {
      backgroundColor:
        globalStyles.appLayout.style === "whatsapp"
          ? "transparent" 
          : globalStyles.appLayout.theme === "dark"
          ? "#000"
          : "#fff",
      backgroundImage:
        globalStyles.appLayout.style === "whatsapp"
          ? `url(${
              globalStyles.appLayout.theme === "dark"
                ? "https://i.ibb.co/R6nLDPm/Whatsapp-ios-bg-dark.webp"
                : "https://i.ibb.co/23fV3KJ/Whatsapp-ios-bg-light.webp"
            })`
          : "none", 
      backgroundAttachment: "fixed", 
      backgroundPosition: "top center", 
      backgroundRepeat: "no-repeat", 
      backgroundSize: "100% auto", 
      height: globalStyles.videoBackground ? "fit-content" : "100%",
      position: "absolute",
      top: globalStyles.videoBackground ? "30%" : 0,
      borderRadius: globalStyles.videoBackground ? 40 : 0,
      marginLeft: "auto",
      marginRight: "auto",
      transformOrigin: "50% 0%",
      transform: globalStyles.videoBackground ? `scale(${scale})` : "",
      overflow: "hidden",
      boxShadow: "10px 10px 40px rgba(0, 0, 0, 0.5)",
      transition: "height 0.5s ease-in-out",
    };
    
    
  };

  
  

  const calculateTotalDuration = (
    elements: z.infer<typeof elementSchema>[], i: number
  ) => {
    let totalDuration = 0;

    for (const element of elements ?? []) {
      if (element.type == "text_message") {
        totalDuration += element.text_message.durationInSeconds ?? 0;
      } else if (element.type == "comment") {
        totalDuration += element.comment.durationInSeconds ?? 0;
      } else if (element.type == "image") {
        totalDuration += element.image.durationInSeconds ?? props.inheritableStyles.imageDuration;
      }
    }
    // totalDuration += pageTransitionDuration;
    return totalDuration * 30;
  };

  return (
  <AbsoluteFill style={{ backgroundColor: "black" }}>
  <Series>
      {pages.map((page, pageIndex) => (
  <Series.Sequence
    name={`Screen ${pageIndex + 1}`}
    key={pageIndex}
    durationInFrames={calculateTotalDuration(page, pageIndex)}
  >
    <AbsoluteFill style={getScreenStyle(pageIndex)}>
      <Header
        appLayout={globalStyles.appLayout}
        chunkIndex={pageIndex}
      />
      {pageIndex === 0 && globalStyles.appLayout.showBigAvatar && (
        <BigAvatar {...globalStyles.appLayout} />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          padding: 40,
          paddingBottom: 20,
        }}
      >
        {page.map((element, index) => {
          // Determine if this is the last element in the current page
          const isLastElementInPage = index === page.length - 1;

          // Determine the next speaker
          const nextSpeaker = isLastElementInPage
            ? pages[pageIndex + 1]?.[0]?.speaker || null
            : page[index + 1]?.speaker || null; 

          return (
            <Sequence
              key={index}
              name={`Element ${index + 1}`}
              layout="none"
              from={calculateElementStartFrame(page, index)}
            >
              {renderElement(
                element,
                props.globalStyles,
                props.inheritableStyles,
                nextSpeaker
              )}
            </Sequence>
          );
        })}
      </div>         
    </AbsoluteFill>
  </Series.Sequence>
))}

      </Series>
      <LogoWatermark logo={globalStyles.logo} />
      <Overlay {...globalStyles.overlays} />
      {/* <OffthreadVideo src={globalStyles.videoBackgroundSrc}/> */}
      <BackgroundVideo src={globalStyles.videoBackgroundSrc} />
      <BackgroundMusic {...globalStyles.backgroundMusic} />
      <YouTubeSubscribePopup {...globalStyles.subscribePoppup} />
    </AbsoluteFill>
  );
};
