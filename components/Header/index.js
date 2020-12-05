import React from 'react';
import { Wrapper, Logo, Links, Link } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';
import TranslateInstance from '../../i18n';

export const Header = ({ t }) => {
  return (
    <Wrapper t={t}>
      <Logo src={require('../../public/images/rd.png')} />
      <Links>
        <Link href="#">{t('header.links.html5')}</Link>
        <Link href="#">{t('header.links.css3')}</Link>
        <Link href="#">{t('header.links.javascript')}</Link>
        <Link href="#">{t('header.links.react')}</Link>
        <Link href="#">{t('header.links.redux')}</Link>
      </Links>
    </Wrapper>
  );
};

Header.propTypes = {
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

Header.defaultProps = {
  theme: themes.default
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default TranslateInstance.withTranslation('common')(withTheme(Header));
