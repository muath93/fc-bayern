import React, { useState } from 'react';

import { easePolyOut } from 'd3-ease';
import { Animate } from 'react-move';

const Stripes = () => {
  const [stripes, setStripes] = useState([
    { background: '#98c5e9', left: 120, rotate: 25, top: -260, delay: 0 },
    { background: '#fff', left: 360, rotate: 25, top: -397, delay: 200 },
    { background: '#98c5e9', left: 600, rotate: 25, top: -498, delay: 400 }
  ]);
  const showStripes = () =>
    stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: '#fff',
          top: 0,
          left: 0,
          rotate: 0,
          opacity: 0
        }}
        enter={{
          background: [stripe.background],
          top: [stripe.top],
          left: [stripe.left],
          rotate: [stripe.rotate],
          opacity: 1,
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            end() {
              console.log('animatiom finished');
            }
          }
        }}
      >
        {({ background, top, left, rotate, opacity }) => {
          return (
            <div
              className='stripe'
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
              }}
            ></div>
          );
        }}
      </Animate>
    ));

  return <div className='featured_stripes'>{showStripes()}</div>;
};

export default Stripes;
