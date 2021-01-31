import { Variants } from 'framer-motion';

import BackLinkArrow from '../BackLinkArrow';

import * as S from './styles';

interface WidgetProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  variants?: Variants;
  header?: React.ReactNode;
  href?: string;
  image?: string;
}

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const WidgetComponent: React.FC<WidgetProps> = ({
  children,
  as,
  header,
  href,
  image,
  ...props
}) => {
  return (
    <S.Widget as={as} {...props}>
      {header && (
        <S.Header>
          {href && <BackLinkArrow href={href} />}
          {header}
        </S.Header>
      )}

      {image && (
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '190px',
            objectFit: 'cover',
          }}
          src={image}
        />
      )}

      {children && <S.Content>{children}</S.Content>}
    </S.Widget>
  );
};

export default WidgetComponent;
