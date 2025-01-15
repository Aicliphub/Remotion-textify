import { z } from "zod";

export const subscribePoppupSchema = z.object({
  url: z.string(),
  channelName: z.string(),
  enterTime: z.number(),
  marginBottom: z.number().min(0).max(90),
});
