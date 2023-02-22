import React from 'react';
import Sketch from 'react-p5';
// import loadable from '@loadable/component';
import dynamic from 'next/dynamic';
import p5Types from 'p5';

// reference: https://p5js.org/examples/interaction-wavemaker.html
export const PFive = () => {
  // initialize a p5 canvas
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.fill('#8D7FE9');
    p5.noStroke();
  };

  // draw on the p5 canvas
  let t = 0; // time variable
  const draw = (p5: p5Types) => {
    p5.background(10, 10); // translucent background (creates trails)

    // make a x and y grid of ellipses
    for (let x = 0; x <= p5.width; x = x + 30) {
      for (let y = 0; y <= p5.height; y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = p5.map(p5.mouseX, 0, 500, -4 * Math.PI, 4 * p5.PI, true);
        const yAngle = p5.map(p5.mouseY, 0, 500, -4 * Math.PI, 4 * p5.PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

        // each particle moves in a circle
        const myX = x + 20 * p5.cos(2 * p5.PI * t + angle);
        const myY = y + 20 * p5.sin(2 * p5.PI * t + angle);

        p5.ellipse(myX, myY, 10); // draw particle
      }
    }

    t = t + 0.01; // update time
  };

  // reference:
  // - https://stackoverflow.com/questions/60419263/react-build-reference-error-window-is-not-defined-how-to-only-run-on-client
  // - https://loadable-components.com/docs/getting-started/
  const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  });

  return <Sketch setup={setup} draw={draw} />;
};

export default PFive;
