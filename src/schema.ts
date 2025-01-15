import { zColor } from "@remotion/zod-types";
import { z } from "zod";
import { logoSchema } from "./components/logoWatermark/logoSchema";
import { BackgroundMusicSchema } from "./components/backgroundMusic/schema";
import { overlaySchema } from "./components/socialOverlay/schema";
import { subscribePoppupSchema } from "./components/subscribePoppup/schema";

export const aspectRatioSchema = z.enum(["9:16", "16:9"]);

export const fontWeightSchema = z.enum([
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
]);

export const audioParamsSchema = z.object({
  volume: z.number().min(0).max(100),
  mute: z.boolean(),
});

export const messageEnterAudioSchema = z.object({
  src: z.string(),
  params: audioParamsSchema,
});


export const headerSchema = z.object({
  username: z.string(),
  avatar: z.string(),
  font: z.enum(["ArchivoBlack", "NotoSerif", "Poppins", "Inter"]),
  fontSize: z.number(),
  showOnAllPages: z.boolean(),
});

// export const messageStyleSchema = z.object({
//   font: z.enum(["ArchivoBlack", "NotoSerif", "Poppins", "Inter"]),
//   fontSize: z.number(),
//   fontWeight: fontWeightSchema,
// });

export const appLayoutSchema = z.object({
  style: z.enum(["imessage", "messenger", "whatsapp"]),
  showMessageAvatar: z.boolean(),
  showBigAvatar: z.boolean(),
  header: headerSchema,
  theme: z.enum(["light", "dark"]),
  aspectRatio: aspectRatioSchema.default("9:16"),
});

export const messageStyleSchema = z.object({
  font: z.enum(["ArchivoBlack", "NotoSerif", "Poppins", "Inter"]),
  fontSize: z.number(),
  fontWeight: fontWeightSchema,
});


export const globalStyleSchema = z.object({
  appLayout: appLayoutSchema,
  messageStyle: messageStyleSchema,
  messageEnterAudio: messageEnterAudioSchema,
  pageTransitionDuration: z.number(),
  typingDotsBaseDuration: z.number(),
  videoBackground: z.boolean(),
  videoBackgroundSrc: z.string(),
  logo: logoSchema,
  overlays: overlaySchema,
  subscribePoppup: subscribePoppupSchema,
  backgroundMusic: BackgroundMusicSchema,
  aspectRatio: aspectRatioSchema.default("9:16"),
});

export const volumeSchema = z.number().min(0).max(1);
export const speedSchema = z.number().min(0).max(2);

export const inheritableStylesSchema = z.object({
  textMessageVolume: volumeSchema,
  textMessageSpeed: speedSchema,
  commentVolume: volumeSchema,
  commentSpeed: speedSchema,
  soundEffectVolume: volumeSchema,
  soundEffectTiming: z.number().min(0).max(1),
  imageDuration: z.number(),
});


export const textMessageSchema = z.object({
  text: z.string(),
  url: z.string(),
  durationInSeconds: z.number().optional(),
  volume: volumeSchema.optional(),
  speed: speedSchema.optional(),
})

export const imageSchema = z.object({
  url: z.string(),
  durationInSeconds: z.number().optional(),
});

export const soundEffectSchema = z.object({
  url: z.string(),
  durationInSeconds: z.number().optional(),
  volume: volumeSchema.optional(),
  speed: speedSchema.optional(),
  timing: z.number().min(0).max(1).optional(),
})

export const commentSchema = z.object({
  url: z.string(),
  durationInSeconds: z.number().optional(),
  volume: volumeSchema.optional(),
  speed: speedSchema.optional(),
})

export const elementSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('comment'),
    comment: commentSchema,
    delay: z.number().min(0).optional(),
    sound_effect: soundEffectSchema.optional(),
  }),
  z.object({
    type: z.literal('text_message'),
    speaker: z.enum(["A", "B"]),
    text_message: textMessageSchema,
    delay: z.number().min(0).optional(),
    sound_effect: soundEffectSchema.optional(),
  }),
  z.object({
    type: z.literal('image'),
    speaker: z.enum(["A", "B"]),
    image: imageSchema,
    delay: z.number().min(0).optional(),
    sound_effect: soundEffectSchema.optional(),
  }),
]);

export const videoSchema = z.object({
  content: z.array(elementSchema),
  globalStyles: globalStyleSchema,
  inheritableStyles: inheritableStylesSchema,
});
