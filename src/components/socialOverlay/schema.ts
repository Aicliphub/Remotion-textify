import { z } from "zod";

export const overlaySchema = z.object({
  youtube: z.boolean(),
  tiktok: z.boolean(),
});
