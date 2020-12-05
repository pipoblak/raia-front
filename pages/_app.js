/* istanbul ignore file */
import React, { useState, useEffect } from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import TranslateInstance from '../i18n';
import GlobalStyle from '../styles/global';
import themes, { ThemeContext } from '../styles/themes';

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(themes.default);
  useEffect(() => {
    TranslateInstance.i18n.changeLanguage('ptBR');
  });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext))
});

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default TranslateInstance.appWithTranslation(MyApp);
