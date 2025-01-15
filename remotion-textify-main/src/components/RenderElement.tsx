import { Sequence, Audio, useVideoConfig } from "remotion";
import { z } from "zod";
import { elementSchema, globalStyleSchema, inheritableStylesSchema } from "../schema";
import { Message } from "./Message";
import { MessageWithDots } from "./MessageWithDots";
import { ImageMessage } from "./ImageMessage";


export const renderElement = (element: z.infer<typeof elementSchema>, globalStyles: z.infer<typeof globalStyleSchema> , inheritableStyles: z.infer<typeof inheritableStylesSchema>, nextSpeaker: "A" | "B") => {
  const components = [];
  const { fps } = useVideoConfig();

  // Handle text_message
  if (element.type === "text_message") {
    const messageProps = {
      ...element.text_message,
      ...globalStyles.messageStyle,
      appLayout: globalStyles.appLayout,
    };

    // render text_message
    components.push(
      <Sequence name="Text Message Visual" layout="none" key="text_message_visual" from={element.delay ? element.delay*fps : 0}>
        {element.speaker === "B" ? (
          <MessageWithDots
            {...messageProps}
            showTypingDots={false}
            typingDotsDuration={element.delay || 0}
            speaker={element.speaker}
            nextSpeaker={nextSpeaker}
          />
        ) : (
          <Message {...messageProps} speaker={element.speaker} nextSpeaker={nextSpeaker}/>
        )}
      </Sequence>
    );

    // play text_message audio
    if (element.text_message.url) {
      components.push(
        <Sequence name="tText Message Audio" layout="none" key="text_message_audio" from={element.delay ? element.delay*fps : 0}>
          <Audio
            src={element.text_message.url}
            volume={
              element.text_message.volume !== undefined
                ? element.text_message.volume
                : inheritableStyles.textMessageVolume
            }
            playbackRate={
              element.text_message.speed || inheritableStyles.textMessageSpeed
            }
          />
        </Sequence>
      );
    }
  }

  // render image
  if (element.type === "image") {
    components.push(
      <Sequence name="image"  layout="none" key="image" from={0}>
        <ImageMessage
          url={element.image.url}
          appLayout={globalStyles.appLayout}
          speaker={element.speaker}
        />
      </Sequence>
    );
  }

  // play comment audio
  if (element.type === "comment") {
    components.push(
      <Sequence name="comment"  layout="none" key="comment_audio" from={0}>
        <Audio
          src={element.comment.url}
          volume={
            element.comment.volume !== undefined
              ? element.comment.volume
              : inheritableStyles.commentVolume
          }
          playbackRate={
            element.comment.speed || inheritableStyles.commentSpeed
          }
        />
      </Sequence>
    );
  }

  // play sound_effect
  if (element.sound_effect) {
    const timing =
      element.sound_effect.timing !== undefined
        ? element.sound_effect.timing
        : 0;


    let soundEffectFrom: number = 0
    if (element.type === "text_message") {
      soundEffectFrom = (timing * element.text_message.durationInSeconds);
    } else if (element.type === "comment") {
      soundEffectFrom = (timing * element.comment.durationInSeconds);

    }

    components.push(
      <Sequence
      name="sound_effect_audio"
       layout="none"
        key="sound_effect_audio"
        from={soundEffectFrom*fps}
      >
        <Audio
          src={element.sound_effect.url}
          volume={
            element.sound_effect.volume !== undefined
              ? element.sound_effect.volume
              : inheritableStyles.soundEffectVolume
          }
          playbackRate={
            element.sound_effect.speed || 1
          }
        />
      </Sequence>
    );
  }

  return <>{components}</>;
};