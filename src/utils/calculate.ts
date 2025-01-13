import { z } from "zod";
import { elementSchema, globalStyleSchema, inheritableStylesSchema as inheritableStylesSchema } from "../schema";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { useVideoConfig } from "remotion";


export const calculateElementDuration = async ( url : string ) => {
  let durationInSeconds;
  durationInSeconds = await getAudioDurationInSeconds(url);
  return durationInSeconds;
};

export const estimateElementHeight = (element : z.infer<typeof elementSchema> ) => {
  const basePadding = 20; // Padding between elements

  if (element.type === 'text_message') {
    const textLength = element.text_message.text.length;
    const fontSize = 45;
    const estimatedLines = Math.ceil(textLength / 30); // 30 chars per line
    const estimatedHeight = estimatedLines * fontSize + basePadding;
    return estimatedHeight;
  }

  if (element.type === 'image') {
    const maxImageHeight = 400; // Max height of an image
    return maxImageHeight + basePadding;
  }

  return 0;
};


export const paginateContent = (content : z.infer<typeof elementSchema>[]) => {
  const pages : z.infer<typeof elementSchema>[][] = [];
  const availableHeight = 400; // Height of the mobile app
  let currentPage : z.infer<typeof elementSchema>[] = [];
  let currentHeight = 0;

  content.forEach((element) => {
    const elementHeight = estimateElementHeight(element);
    if (currentHeight + elementHeight > availableHeight) {
      pages.push(currentPage);
      currentPage = [element];
      currentHeight = elementHeight;
    } else {
      currentPage.push(element);
      currentHeight += elementHeight;
    }
  });

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages;
};

export const calculateElementStartFrame = (page: z.infer<typeof elementSchema>[], index: number) => {
  const { props, fps } = useVideoConfig();
  const inheritableStyles = props.inheritableStyles as z.infer<typeof inheritableStylesSchema>

  let frame = page.slice(0, index).reduce((total, element) => {
    switch (element.type) {
      case 'text_message':
        return total + (element.text_message.durationInSeconds || 0); 
      case 'comment':
        return total + (element.comment.durationInSeconds || 0); 
      case 'image':
        return total + (element.image.durationInSeconds || inheritableStyles.imageDuration); 
    }
  }, 0) * fps; // seconds to frames
  return frame; 
};