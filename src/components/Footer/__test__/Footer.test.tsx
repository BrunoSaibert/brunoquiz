import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Footer from '../';

const wrapper = () => render(<Footer />);

test('Footer Component', async () => {
  const { container } = wrapper();

  expect(await axe(container)).toHaveNoViolations();
});

test('Verifica os itens', async () => {
  wrapper();

  expect(screen.getByAltText(/Logo Alura/i)).toBeInTheDocument();
  expect(screen.getByText(/Orgulhosamente criado durante a/i)).toBeInTheDocument();
});
