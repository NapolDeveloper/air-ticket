import React from 'react';
import * as S from './Sign.style';

const InputBox = ({ name, placeholder, type, value, onChange }) => {
  return <S.SignInput name={name} placeholder={placeholder} type={type} value={value} onChange={onChange}></S.SignInput>;
};

export default React.memo(InputBox);
