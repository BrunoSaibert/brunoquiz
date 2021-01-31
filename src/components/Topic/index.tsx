import * as S from './styles';

interface TopicProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  htmlFor?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  animate?: any;
  whileHover?: any;
  whileTap?: any;
}

const Topic: React.FC<TopicProps> = ({
  children,
  as,
  htmlFor,
  href,
  ...props
}) => {
  return (
    <S.Topic as={as} htmlFor={htmlFor} href={href} {...props}>
      {children}
    </S.Topic>
  );
};

export default Topic;
