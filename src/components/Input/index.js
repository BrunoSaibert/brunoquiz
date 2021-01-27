import React from 'react';

import Container from './styles';

function Input({ type = 'text', ...props }) {
  return <Container type={type} {...props} />;
}

export default Input;
