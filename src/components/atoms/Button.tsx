import React from 'react';
import { ButtonT } from '../../types';

const buttonStyle = {};

function Button({name}: ButtonT) {
  return (
    <button style={buttonStyle}>{name}</button>
  )
}

export default Button;