import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import TranslateInstance from '../i18n';

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
`;

const Provider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <FlexContainer>{children}</FlexContainer>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default TranslateInstance.appWithTranslation(Provider);
