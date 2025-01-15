import { z } from "zod";

export const positionSchema = z.enum([
  "Top Left",
  "Top Right",
  "Bottom Left",
  "Bottom Right",
  "Center",
  "Top Center",
  "Bottom Center",
  "Left Center",
  "Right Center",
]);

export const marginSchema = z.object({
  marginX: z.number().min(0).max(100),
  marginY: z.number().min(0).max(100),
});

export const logoSchema = z.object({
  url: z.string(),
  position: positionSchema,
  margin: marginSchema,
  maxWidth: z.number().min(0),
  opacity: z.number().min(0).max(100),
  borderRadius: z.number().min(0),
  // shadow: z.number().min(0),
});
