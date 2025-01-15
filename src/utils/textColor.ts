export const getTextColor = (theme: string, invert?: boolean) => {
  if (theme === "light") {
    return invert ? "#fff" : "#000";
  }
  return invert ? "#000" : "#fff";
};
