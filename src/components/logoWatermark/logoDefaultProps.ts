import { z } from "zod";
import { logoSchema } from "./logoSchema";

export const logoDefaultProps: z.infer<typeof logoSchema> = {
  url: "https://cdn.prod.website-files.com/65782dcbdec1e48240575850/65df1e53446a3348bcc3ecac_webclip.png",
  position: "Bottom Right",
  margin: {
    marginX: 2,
    marginY: 1,
  },
  maxWidth: 100,
  opacity: 50,
  borderRadius: 10,
  // shadow: 0,
};
