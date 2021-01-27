import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type Button = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <S.Container type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
