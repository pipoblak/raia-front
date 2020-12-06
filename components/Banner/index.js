import React from 'react';
import { Wrapper, Title, SubTitle, Colors, ColorDot, Color } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';
import TranslateInstance from '../../i18n';
import ReactHtmlParser from 'react-html-parser';

export const Banner = ({ t, theme }) => {
  return (
    <Wrapper t={t}>
      <Title>{ReactHtmlParser(t('banner.title'))}</Title>
      <SubTitle>{ReactHtmlParser(t('banner.subtitle'))}</SubTitle>
      <Colors>
        <Color>
          <ColorDot color={theme.primary} />
          <SubTitle>{theme.primary},</SubTitle>
        </Color>
        <Color>
          <ColorDot color={theme.secondary} />
          <SubTitle>{theme.secondary},</SubTitle>
        </Color>
        <Color>
          <ColorDot color={theme.first_card} />
          <SubTitle>{theme.first_card},</SubTitle>
        </Color>
        <Color>
          <ColorDot color={theme.second_card} />
          <SubTitle>{theme.second_card},</SubTitle>
        </Color>
        <Color>
          <ColorDot color={theme.third_card} />
          <SubTitle>{theme.third_card}</SubTitle>
        </Color>
      </Colors>
    </Wrapper>
  );
};

Banner.propTypes = {
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

Banner.defaultProps = {
  theme: themes.default
};

Banner.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default TranslateInstance.withTranslation('common')(withTheme(Banner));
