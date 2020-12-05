import React from 'react';
import { Container, Wrapper } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';

const Element = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

Element.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.object
};

Element.defaultProps = {
  theme: themes.default,
  children: undefined
};

export default withTheme(Element);
