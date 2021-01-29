import * as S from './styles';

interface WidgetProps {
  header?: React.ReactNode;
  image?: string;
}

const WidgetComponent: React.FC<WidgetProps> = ({
  children,
  header,
  image,
}) => {
  return (
    <S.Widget>
      {header && <S.Header>{header}</S.Header>}

      {image && (
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
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
