import { InputHTMLAttributes } from 'react';

import * as S from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  ...props
}) => {
  return <S.Container type={type} {...props} />;
};

export default Input;
