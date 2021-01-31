import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  margin-bottom: 1rem;
  padding: 0.75rem;
  color: ${props => props.theme.colors.contrastText};
  background-color: transparent;
`;
