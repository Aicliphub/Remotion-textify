import { z } from "zod";

export const BackgroundMusicSchema = z.object({
  src: z.string(),
  volume: z.number().min(0).max(100),
  startFrom: z.number(),
  muted: z.boolean(),
  loop: z.boolean(),
});
