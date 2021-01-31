import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.contrastText};
  text-decoration: none;
  margin-left: -9px !important;

  span {
    height: 22px;
  }

  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const SVG = styled.svg`
  vertical-align: middle;

  path {
    fill: ${props => props.theme.colors.contrastText};
  }
`;
