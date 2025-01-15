import { Composition } from "remotion";
import { videoSchema } from "./schema";
import { MyScene } from "./Video";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { defaultProps } from "./NewSampleProps";
import { paginateContent } from "./utils/calculate";
import { AspectRatio } from "./components/AspectRatio";

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  return (
    <>
      <Composition
        id="MyScene"
        component={MyScene}
        durationInFrames={fps}
        fps={fps}
        schema={videoSchema}
        defaultProps={defaultProps}
        calculateMetadata={async ({ props }) => {
          const width = props.globalStyles.aspectRatio === "9:16" ? 1080 : 1920;
          const height = props.globalStyles.aspectRatio === "9:16" ? 1920 : 1080;

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
                (element.text_message.durationInSeconds ?? 0) * 30;
            } else if (element.type === "comment") {
              videoDurationInFrames += (element.comment.durationInSeconds ?? 0) * 30;
            } else if (element.type === "image") {
              videoDurationInFrames += (element.image.durationInSeconds ?? props.inheritableStyles.imageDuration) * 30;                            
            }
          }

          return {
            durationInFrames: Math.ceil(videoDurationInFrames),
            props,
            width,
            height,
          };
        }}
      />
    </>
  );
};
