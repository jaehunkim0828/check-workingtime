import React from 'react';

import '../../style/input.scss';
import { InputT } from '../../types';



function Input({ value, onChange, placeholder, style }: InputT) {

  return (
    <input style={style} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input;