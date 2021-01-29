import styled from 'styled-components';

export const Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.color.contrastText};
  background-color: ${({ theme }) => `${theme.color.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
