import styled from "styled-components";

const LogoContainer = styled.div`
  margin: auto;
  display: block;
  width: 50%;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default LogoContainer;
