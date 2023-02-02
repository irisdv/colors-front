import { useMixingContract } from './contracts';
import { to64x61, from64x61 } from '../utils/helpers';
import { RgbColor } from '@hello-pangea/color-picker';
import { ColorMix } from '../types/types';
const BN = require('bignumber.js');

export async function useMixingTwoColors(color1: RgbColor, color2: RgbColor, ratio: number): Promise<ColorMix> {
  const mixContract = useMixingContract();
  const _color1 = [
    Number(to64x61(color1.r)).toString(),
    Number(to64x61(color1.g)).toString(),
    Number(to64x61(color1.b)).toString(),
  ];
  const _color2 = [
    Number(to64x61(color2.r)).toString(),
    Number(to64x61(color2.g)).toString(),
    Number(to64x61(color2.b)).toString(),
  ];
  const _ratio = Number(to64x61(ratio)).toString();

  const data = await mixContract.call('mix', [_color1, _color2, _ratio]);
  console.log('data', data);
  return {
    color_1: { r: color1.r, g: color1.g, b: color1.b },
    color_2: { r: color2.r, g: color2.g, b: color2.b },
    ratio: ratio,
    res: { r: from64x61(Number(data[0].r)), g: from64x61(Number(data[0].g)), b: from64x61(Number(data[0].b)) },
  };
}
