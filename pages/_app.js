import React, { useState } from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from '../i18n';
import GlobalStyle from '../styles/global';
import themes from '../styles/themes';

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(themes.default);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default appWithTranslation(MyApp);
