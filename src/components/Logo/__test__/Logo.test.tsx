import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Logo from '../';

const wrapper = () => render(<Logo />);

test('Logo Component', async () => {
  const { container } = wrapper();

  expect(await axe(container)).toHaveNoViolations();
});

test('Verifica os itens', async () => {
  wrapper();

  expect(screen.getByAltText(/Logo Brunoquiz/i)).toBeInTheDocument();
});
