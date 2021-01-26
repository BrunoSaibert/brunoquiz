import styled from "styled-components";

import db from "../../../db.json";

const QuizBackground = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  background: url(${db.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default QuizBackground;
