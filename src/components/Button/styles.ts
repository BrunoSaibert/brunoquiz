import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  cursor: pointer;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.75rem;
  outline: none;
  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.secondary};

  transition: all 0.3s;

  &:disabled {
    background-color: ${props => props.theme.color.gray};
    cursor: not-allowed;
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.8;
  }
`;
