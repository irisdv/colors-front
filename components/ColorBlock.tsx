import React, { FunctionComponent, useEffect, useState } from 'react';
import { Color } from '../types/types';
import styled from 'styled-components';
import { PFive } from './P5';

export type ColorMixProps = {
  color_1: Color;
  color_2: Color;
  ratio: number;
  res: Color;
};

const ColorBlock: FunctionComponent<ColorMixProps> = ({color_1, color_2, ratio, res}: ColorMixProps) => {
  console.log('color_1', color_1)

  if (typeof window == 'undefined') {
    return null;
  }

  return (
    <>
        <ColorBlockStyled>
            <div className="bloc1">
                <div className="color1" style={{backgroundColor: `rgba(${color_1.r}, ${color_1.g}, ${color_1.b}, 1)`}}>({color_1.r}, {color_1.g}, {color_1.b})</div>
                <div className="color2" style={{backgroundColor: `rgba(${color_2.r}, ${color_2.g}, ${color_2.b}, 1)`}}>({color_2.r}, {color_2.g}, {color_2.b})</div>
            </div>
            <div className="bloc2" style={{backgroundColor: `rgba(${res.r}, ${res.g}, ${res.b}, 1)`}}>({res.r}, {res.g}, {res.b})</div>
        </ColorBlockStyled>

        <PFive />
    </>
  );
};

export default ColorBlock;

export const ColorBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #FFF;

    .bloc1 {
        display: flex;
        flex-direction: row;
    }

    .color1, .color2 {
        width: 100px;
        height: 100px;
        padding: 2px 0px;
    }

    .bloc2 {
        width: 200px;
        height: 100px;
        padding: 2px 0px;
    }
`
