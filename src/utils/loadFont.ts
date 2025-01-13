import { loadFont as loadArchivoBlack } from "@remotion/google-fonts/ArchivoBlack";
import { loadFont as loadNotoSerif } from "@remotion/google-fonts/NotoSerif";
import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
export const loadFonts = () => {
  const archivoBlackFont = loadArchivoBlack();
  const notoSerifFont = loadNotoSerif();
  const poppinsFont = loadPoppins();
  const interFont = loadInter();

  return {
    ArchivoBlack: archivoBlackFont.fontFamily,
    NotoSerif: notoSerifFont.fontFamily,
    Poppins: poppinsFont.fontFamily,
    Inter: interFont.fontFamily,
  };
};
