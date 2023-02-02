export type Color = {
  r: number;
  g: number;
  b: number;
};

export type ColorWithOpacity = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type ColorMix = {
  color_1: Color;
  color_2: Color;
  ratio: number;
  res: Color;
};
