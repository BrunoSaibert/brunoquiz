import styled from 'styled-components';

const Container = styled.button`
  width: 100%;

  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  cursor: pointer;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem;
  outline: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};

  transition: all 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Container;
