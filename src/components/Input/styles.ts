import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.gray};
  outline: none;
  margin-bottom: 1rem;
  padding: 0.75rem;
  color: ${props => props.theme.color.contrastText};
  background-color: transparent;
`;
