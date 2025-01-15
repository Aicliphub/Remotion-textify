import { z } from "zod";
import { logoDefaultProps } from "./components/logoWatermark/logoDefaultProps";
import { videoSchema } from "./schema";

export const defaultProps: z.infer<typeof videoSchema> = {
  inheritableStyles: {
    textMessageVolume: 1.0,
    textMessageSpeed: 1.15,
    commentVolume: 1.0,
    commentSpeed: 1.0,
    soundEffectVolume: 1,
    soundEffectTiming: 0,
    imageDuration: 1,
  },
  content: [
    {
      type: "text_message",
      speaker: "B",
      
      text_message: {
        text: "Who is your 5 hall passes?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548858/g1_ultrmi.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "wdym?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548858/b1_mfofwl.mp3",
        speed: 1.1,
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Like if you could do it with 5 other people that's not me, who would it be?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/g2_usgg2z.mp3",
        speed: 1.1,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I wouldn't cheat on you 😊",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548857/b2_wqq4di.mp3",
        speed: 1.15
      },
      sound_effect: {
        volume: 0.4,
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730562087/g6d8rs__rizz-sounds-2-_AudioTrimmer.com_u1lind.mp3",
        speed: 1.3,
        
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Let's just say I allow it",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548854/g3_pyru5w.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Emma Watson",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548856/b3_ydpbos.mp3",
        speed: 1.15,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Madison Beer",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/b4_zjrqfx.mp3",
        speed: 1.15,

      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Big Mom",
        speed: 1.15,
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/b5_swb6xn.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Natalie Portman",
        speed: 1.15,
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/b6_qkqw5y.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Ryan Reynolds",
        speed: 1.15,
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548854/b7_evc0oj.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I have so many questions..",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548854/g4_vfzmtt.mp3",
      },
     
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Big Mom?!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548854/g5_mowtqo.mp3",
      },
      sound_effect: {
        timing: 0.1,
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I am not into being a feeder",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/b8_ogcsjr.mp3",
        speed: 1.2,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "But she is an exception",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730548855/b9_nzb2ue.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Ryan Reynolds?!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571963/g6_rmliib.mp3",
      },
      sound_effect: {
        timing: 0.1,
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I ain't into guys but..",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571946/b10_scafjl.mp3",
        speed: 1.2,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "If he asked I'd be down",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571946/b11_mcig7t.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I'm speechless",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571963/g7_bdu323.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I didn't knnow you had it in you to cheat on me",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571962/g8_elhlek.mp3",
        speed: 1.17, 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "You literally said it's a hypothetical",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571946/b12_aui0xw.mp3",
        speed: 1.15, 
      },
    },
        {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "You could have just said my name 5 times on the list!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571961/g9_zaiqqb.mp3", 
      },
      sound_effect: {
        timing: 0.3,
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I thought the list was for runners up not the champion",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571945/b13_ykegoc.mp3",
        speed: 1.15, 
      },
      sound_effect: {
        volume: 0.4,
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730562087/g6d8rs__rizz-sounds-2-_AudioTrimmer.com_u1lind.mp3",
        speed: 1.3,
        timing: 0.5, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Aww that's cute 🥰",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571961/g10_vp3ivp.mp3", 
        speed: 1.15,
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "You managed to pull it back 😘",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571958/g11_n6vzz5.mp3", 
        speed: 1.15,
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Who's on your list?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571944/b14_qsvthm.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Ryan Gosling",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730572690/g12_mkssjx.mp3", 
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Brad Pitt",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571956/g13_y5rkqv.mp3", 
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Channing Tatum",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571956/g14_hcivi2.mp3", 
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Harry Stlyes",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571955/g15_fnc1zy.mp3", 
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "and Drake",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571954/g16_po3ws4.mp3", 
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Drake!! 😦",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571943/b15_q3lweb.mp3",
        speed: 1.15, 
      },
      sound_effect: {
        timing: 0.1,
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "You've seen the mirror video haven't you! 😮",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571938/b16_o4ibv7.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Uhhh, no?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571952/g17_lngiem.mp3", 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I did..",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571952/g18_fj18rl.mp3", 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Multiple times 😂",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730573825/g19-2_in31ti.mp3", 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I can't blame you",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571937/b17_rudckx.mp3",
        speed: 1, 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Damn why didn't I think of him for my list 😞🤦 ",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571936/b18_sk8kii.mp3",
        speed: 1.15, 
      },
      sound_effect: {
        timing: 0.2,
        url: "https://dk662nfmcs7e6.cloudfront.net/render-assets/z2ocod__vine-boom-2.mp3",
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Can I come over",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571935/b19_s40dbj.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "No",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571951/g19_tzedlb.mp3", 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "Why not?",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571934/b20_dnt0nx.mp3",
        speed: 1.05, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "Cuz you're probably thinking of other girls or even guys apparently when we're together",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571951/g20_wiwdvf.mp3", 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "You cannot be serious!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571934/b21_ijvbhn.mp3",
        speed: 1.15, 
      },
    },
    {
      type: "text_message",
      speaker: "A",
      text_message: {
        text: "I'll let you eat a fruit roll up of it!",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571934/b23_drniza.mp3",
        speed: 1.2, 
      },
    },
    {
      type: "text_message",
      speaker: "B",
      text_message: {
        text: "I fold, come over 😉",
        url: "https://res.cloudinary.com/dkjeqxdam/video/upload/v1730571947/g21_dxwz3z.mp3", 
        speed: 0.95, 
      },
    },


   

  ],
  globalStyles: {
    appLayout: {
      style: "imessage",
      showMessageAvatar: false,
      showBigAvatar: false,
      theme: "light",
      header: {
        username: "Comment '🍒'",
        avatar: "https://wallpapers-clan.com/wp-content/uploads/2023/01/dark-aesthetic-girl-pfp-32.jpg",
        font: "Inter",
        fontSize: 40,
        showOnAllPages: false,
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
      "https://cdn-g2.shortx.ai/assets/mcpk_10_87ebd5_4.mp4",
    logo: logoDefaultProps,
    overlays: {
      youtube: false,
      tiktok: false,
    },
    subscribePoppup: {
      url: "https://cdn.prod.website-files.com/65782dcbdec1e48240575850/65df1e53446a3348bcc3ecac_webclip.png",
      channelName: "ShortYT",
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
