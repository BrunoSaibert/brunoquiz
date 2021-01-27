import * as S from './styles';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const WidgetComponent: React.FC<Props> = ({ children, header }) => {
  return (
    <S.Widget>
      {header && <S.Header>{header}</S.Header>}

      {children && <S.Content>{children}</S.Content>}
    </S.Widget>
  );
};

export default WidgetComponent;
