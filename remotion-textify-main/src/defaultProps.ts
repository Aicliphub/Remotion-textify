import { z } from "zod";
import { logoDefaultProps } from "./components/logoWatermark/logoDefaultProps";
import { videoSchema } from "./schema";

export const defaultProps: z.infer<typeof videoSchema> = {
  inheritableStyles: {
    textMessageVolume: 1.0,
    textMessageSpeed: 1.0,
    commentVolume: 1.0,
    commentSpeed: 1.0,
    soundEffectVolume: 0.3,
    soundEffectTiming: 0,
    imageDuration: 1,
  },
  content: [
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Hey 👋",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/1_i8ble7.mp3",
        durationInSeconds: 1,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Hey!!!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/1_i8ble7.mp3",
      },
    },
    {
      type: "image",
      speaker: "A",
      image: {
        url: "https://astrotowing.ca/wp-content/uploads/2020/08/Vertical-Placeholder-Image.jpg",
        durationInSeconds: 3,

      },
      sound_effect: {
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "image",
      speaker: "B",
      image: {
        url: "https://www.shutterstock.com/image-photo/long-filmstrip-on-white-picture-260nw-1255702963.jpg",
      },
      sound_effect: {
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Hello! How can I help you today?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/2_vev0sm.mp3",
        speed: 1.5,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      delay: 2,
      text_message: {
        text: "I need help with my order",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/3_pv73vu.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Sure, what's your order number?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/4_njsbrs.mp3",
        speed: 2,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "123456",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721561/5_txjdbj.mp3",
      },
      sound_effect: {
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "image",
      speaker: "B",
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      sound_effect: {
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Thank you, let me check that for you",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/6_u6lq6k.mp3",
        speed: 0.5,
      }, 
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Sure, take your time",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/7_a8c91i.mp3",
        speed: 2,
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I found your order, it will be delivered tomorrow",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/8_xzqbbw.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Great, thank you!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/9_fbzuvc.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "You're welcome, have a great day!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/10_jrsg1n.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "No thanks!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728721560/11_hjguqw.mp3",
      },
      sound_effect: {
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
  ],
  globalStyles: {
    appLayout: {
      style: "whatsapp",
      showMessageAvatar: true,
      showBigAvatar: false,
      theme: "dark",
      header: {
        username: "ShortX",
        avatar: "https://api.dicebear.com/9.x/initials/svg?seed=ShortX",
        font: "Inter",
        fontSize: 40,
        showOnAllPages: true,
      },
    },
    messageStyle: {
      font: "Inter",
      fontSize: 45,
      fontWeight: "400",
    },
    messageEnterAudio: {
      src: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728724517/pop_xfvf9y.mp3",
      params: {
        volume: 0.25,
        mute: false,
      },
    },
    pageTransitionDuration: 0.2,
    typingDotsBaseDuration: 30,
    videoBackground: true,
    videoBackgroundSrc:
      "https://res.cloudinary.com/dkjeqxdam/video/upload/v1728813174/background_qdoxls.mp4",
    logo: logoDefaultProps,
    overlays: {
      youtube: false,
      tiktok: false,
    },
    subscribePoppup: {
      url: "https://cdn.prod.website-files.com/65782dcbdec1e48240575850/65df1e53446a3348bcc3ecac_webclip.png",
      channelName: "ShortX",
      marginBottom: 20,
      enterTime: 6,
    },
    backgroundMusic: {
      src: "https://short-x-assets.s3.amazonaws.com/assets/music/No%20Indication%20-%20TrackTribe.mp3",
      volume: 0.15,
      startFrom: 0,
      loop: true,
      muted: true,
    },
  },
};
