import React from 'react';
import { Wrapper, Logo, Links, Link } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';

const Header = () => {
  return (
    <Wrapper data-testid="header">
      <Logo src={require('../../public/images/rd.png')} />
      <Links>
        <Link href="#">HTML5</Link>
        <Link href="#">CSS3</Link>
        <Link href="#">JAVASCRIPT</Link>
        <Link href="#">REACT</Link>
        <Link href="#">REDUX</Link>
      </Links>
    </Wrapper>
  );
};

Header.propTypes = {
  theme: PropTypes.object.isRequired
};

Header.defaultProps = {
  theme: themes.default
};

export default withTheme(Header);
