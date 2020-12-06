import React from 'react';
import { Wrapper, Logo, Copyright, Brands, Brand } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';
import TranslateInstance from '../../i18n';

export const Footer = ({ t }) => {
  return (
    <Wrapper t={t}>
      <Copyright>{t('copyright')}</Copyright>
      <Brands>
        <Brand src={require('../../public/images/drogaraia.png')} />
        <Brand src={require('../../public/images/drogasil.png')} />
        <Brand src={require('../../public/images/farmasil.png')} />
        <Brand src={require('../../public/images/univers.png')} />
        <Brand src={require('../../public/images/4bio.png')} />
      </Brands>
      <Logo src={require('../../public/images/rd-small.png')} />
    </Wrapper>
  );
};

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

Footer.defaultProps = {
  theme: themes.default
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default TranslateInstance.withTranslation('common')(withTheme(Footer));
