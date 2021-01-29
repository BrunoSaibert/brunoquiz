import * as S from './styles';

interface TopicProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  htmlFor?: string;
}

const Topic: React.FC<TopicProps> = ({ children, as, htmlFor }) => {
  return (
    <S.Topic as={as} htmlFor={htmlFor}>
      {children}
    </S.Topic>
  );
};

export default Topic;
