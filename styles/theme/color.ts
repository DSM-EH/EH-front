export const color = {
  main01: "#FFACAC",
  main02: "#FFBFA9",
  main03: "#FFEBB4",
  main04: "#FBFFB1",
  main05: "#FFFCF0",
  gray100: "#FDFDFD",
  gray200: "#EDEDED",
  gray300: "#D3D3D3",
  gray400: "#BDBDBD",
  gray500: "#A7A7A7",
  gray600: "#929292",
  gray700: "#7C7C7C",
  gray800: "#505050",
  gray900: "#343434",
  gray000: "#141414",
  background: "#FFFBFB",
  error: "#DC3035",
  check: "#04DF00",
  focus: "#006EFF",
  white: "#FFFFFF",
  black: "#000000",

} as const;

export type keyOfColorType = keyof typeof color;