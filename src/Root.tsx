import { Composition } from "remotion";
import { videoSchema } from "./schema";
import { MyScene } from "./Video";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { defaultProps } from "./NewSampleProps";
import { paginateContent } from "./utils/calculate";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  return (
    <>
      <Composition
        id="MyScene"
        component={MyScene}
        durationInFrames={fps}
        fps={fps}
        width={1080}
        height={1920}
        schema={videoSchema}
        defaultProps={defaultProps}
        calculateMetadata={async ({ props }) => {
       

            // Fetching audio duration if missing and considering playback speed
            for (const element of props.content) {
            if (
              element.type === "text_message" &&
              !element.text_message.durationInSeconds
            ) {
              const audioDuration = await getAudioDurationInSeconds(element.text_message.url);
              const playbackSpeed = element.text_message.speed || 1;
              element.text_message.durationInSeconds = (audioDuration + (element.delay ? element.delay : 0)) / playbackSpeed;
            } else if (
              element.type === "comment" &&
              !element.comment.durationInSeconds
            ) {
              const audioDuration = await getAudioDurationInSeconds(element.comment.url);
              const playbackSpeed = element.comment.speed || 1;
              element.comment.durationInSeconds = (audioDuration + (element.delay ? element.delay : 0)) / playbackSpeed;
            }
            }

          let videoDurationInFrames = 0;

          // getting total duration of the video
          for (const element of props.content) {
            if (element.type === "text_message") {
              videoDurationInFrames +=
                element.text_message.durationInSeconds * 30;
            } else if (element.type === "comment") {
              videoDurationInFrames += element.comment.durationInSeconds * 30;
            } else if (element.type === "image") {
              videoDurationInFrames += (element.image.durationInSeconds ?? props.inheritableStyles.imageDuration) * 30;                            
            }
          }

          // videoDurationInFrames +=
          //   props.globalStyles.pageTransitionDuration *
          //   Math.ceil(paginateContent(props.content).length);

          
          return {
            durationInFrames: Math.ceil(videoDurationInFrames),
            props, // Props with all elements duration updated
          };
        }}
      />
    </>
  );
};
