const fontCss = (weight: number, size: number) =>
  `
    font-weight: ${weight};
    font-size: ${size}px;
`;

export const font = {
  title1: fontCss(700, 30),
  title2: fontCss(700, 28),
  title3: fontCss(700, 24),
  body1: fontCss(400, 24),
  body2: fontCss(400, 20),
  body3: fontCss(700, 20),
  body4: fontCss(400, 18),
  body5: fontCss(400, 16),
  body6: fontCss(400, 14),
  body7: fontCss(400, 12),
};

export type keyOfFontType = keyof typeof font;