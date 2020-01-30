import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const Button = props => (
  <button 
    {...props}
    className={classnames('button', props.className, {
      'button--original': props.type === 'original',
      'button--edit': props.type === 'edit',
      'button--add': props.type === 'add',
      'button--cancel': props.type === 'cancel',
      'button--cancel-folder': props.type === 'cancel-folder',
      'button--delete': props.type === 'delete'
    })}>
    {props.original && <span className='icon icon--button'>+</span>}
    {props.all && <span className="icon icon--all"></span>}
    {props.text}
  </button>
)

Button.propTypes = {
  className: PropTypes.string
}

export default Button;