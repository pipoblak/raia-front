import React from 'react';
import { Container, Wrapper } from './styles';
import { withTheme } from 'styled-components';

const Element = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

Element.defaultProps = {
  theme: {}
};

export default withTheme(Element);
