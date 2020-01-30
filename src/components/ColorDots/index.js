import React from 'react';

import ColorDotItem from '../ColorDotItem';
import './ColorDots.scss';

const ColorDots = ({ colorList, colorActive }) => (
  <div className="color-dots">
    {colorList.map((item, index) => (
      <ColorDotItem key={index} color={item.name} colorActive={colorActive} active={item.active} />
    ))}
  </div>
)

export default ColorDots;