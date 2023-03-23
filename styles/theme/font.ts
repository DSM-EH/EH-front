const fontCss = (weight: number, size: number) =>
  `
    font-weight: ${weight};
    font-size: ${size}px;
`;

export const font = {};

export type keyOfFontType = keyof typeof font;
