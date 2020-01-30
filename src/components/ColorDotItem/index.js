import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ColorDotItem.scss';


const ColorDotItem = ({color, active, colorActive, type}) => (
  <div 
    onClick={colorActive}
    title={color}
    className={classnames('color-dot', {
      'color-dot--gray': color === 'gray',
      'color-dot--green': color === 'green',
      'color-dot--blue': color === 'blue',
      'color-dot--light-pink': color === 'light-pink',
      'color-dot--light-green': color === 'light-green',
      'color-dot--purple': color === 'purple',
      'color-dot--black': color === 'black',
      'color-dot--pink': color === 'pink',
      'color-dot--active': active,
      'color-dot--folder': type === 'folder'
    })}>
  </div>
)

export default ColorDotItem;