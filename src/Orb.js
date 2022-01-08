
import React, { useState, useEffect } from 'react';

const Orb = ({ colour, percent, size, label }) => {
  const [pct, setPct] = useState(0);

  const r = size / 2 - (size / 10);
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;

  // set to 0 on the first run to animate
  useEffect(() => {
    setPct(percent);
  }, [percent]);

  if(isNaN(size) || percent < 0 || percent > 100) return null;

  // check if hex and append a hash
  const color = /^([0-9A-F]{3}){1,2}$/i.test(colour)
    ? `#${colour}`
    : colour;

  return (
    <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between', alignItems: 'center'}}>
      <svg style={{position: 'relative', width: `${size}px`, height: `${size}px`}}>
        <style type="text/css">
          .st0{`{fill:#FFFFFF;stroke:#000000;stroke-width:${Math.max(size / 100, 1.5)};stroke-linejoin:round;stroke-miterlimit:10;}`}
        </style>
        <circle cx={size / 2} cy={size / 2} r={r + size / 20} />
        <image href='resources/bligatory-orb-base.png' width={size} height={size} />
        <text textAnchor='middle' transform={`matrix(1 0 0 1 ${size / 2} ${size / 2 + size / 20})`} fontSize={size / 8.5} className='st0 svg-text'>{percent}%</text>
        <image href='resources/bligatory-orb-tape.png' width={size} height={size} />
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            r={r}
            cx={size / 2}
            cy={size / 2}
            fill='transparent'
            stroke={strokePct !== circ ? color : ''}
            strokeWidth={size / 20}
            strokeDasharray={circ}
            strokeDashoffset={percent ? strokePct : 0}
            strokeLinecap='butt'
            style={{transition: 'all 0.7s ease-in-out'}}
          />
        </g>
      </svg>
      <h1>{label}</h1>
    </div>
  );
}

export default Orb;