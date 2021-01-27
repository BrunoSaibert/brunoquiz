import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import db from '../lib/db';

import GlobalStyle from '../styles/global';

const { theme } = db;

export type ThemeType = typeof theme;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
