import React from "react";
import { Sequence, Audio, useVideoConfig } from "remotion";
import { z } from "zod";
import { messageAudioSchema, videoSchema } from "../schema";

export const MessageAudio: React.FC<z.infer<typeof messageAudioSchema>> = (
  props,
) => {
  const globalProps = useVideoConfig().props as z.infer<typeof videoSchema>;
  const messageEnterAudio = globalProps.globalStyles.messageEnterAudio;
  const narratorAudioParams =
    props.authorVoiceParams ??
    globalProps.inheritableStyles.narratorAudioParams;
  const soundEffectAudioParams =
    // props.soundEffectAudio?.params ??
    globalProps.inheritableStyles.soundEffectAudioParams;
  return (
    <>
      <Sequence name="Pop Effect" from={0}>
        {/* Sound when message appears */}
        <Audio
          src={messageEnterAudio.src}
          volume={messageEnterAudio.params.volume / 100}
          muted={messageEnterAudio.params.mute}
        />
      </Sequence>
      <Sequence name="Author Voice" from={15}>
        {/* Narrator reading message sound */}
        <Audio
          src={props.authorVoiceUrl}
          volume={narratorAudioParams.volume / 100}
          muted={narratorAudioParams.mute}
        />
      </Sequence>
      <Sequence name="SFX" from={30}>
        {/* Optional Sound Effect */}
        {props.soundEffectUrl ? (
          <Audio
            src={props.soundEffectUrl}
            volume={soundEffectAudioParams.volume / 100}
            muted={soundEffectAudioParams.mute}
          />
        ) : null}
      </Sequence>
    </>
  );
};
