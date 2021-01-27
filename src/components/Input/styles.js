import styled from 'styled-components';

const Container = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  outline: none;
  margin-bottom: 1rem;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
`;

export default Container;
