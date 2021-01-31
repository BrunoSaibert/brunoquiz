import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type Button = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  animate?: any;
  whileHover?: any;
  whileTap?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  as,
  type = 'button',
  ...props
}) => {
  return (
    <S.Container as={as} type={type} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
