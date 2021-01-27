import React from 'react';

import Container from './styles';

function Buttom({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default Buttom;
