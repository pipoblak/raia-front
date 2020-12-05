import React, { useContext, useRef, useState, useEffect } from 'react';
import { Wrapper, AdditionalInfoPopup, AdditionalInfoScrollDown } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import themes, { ThemeContext } from '../../styles/themes';
import TranslateInstance from '../../i18n';
import Post from '../Post';
import { firstCardOnClick, firstCardEffect } from './first_card_click';
import secondCardOnClick from './second_card_click';
import thirdCardOnClick from './third_card_click';

export const Posts = ({ t, theme }) => {
  const [themeContext, setTheme] = useContext(ThemeContext);
  const AdditionalInfoScrollDownRef = useRef();
  const [scrollDownInfo, setScrollDownInfo] = useState('');

  useEffect(() => firstCardEffect(scrollDownInfo, AdditionalInfoScrollDownRef), [scrollDownInfo]);

  return (
    <>
      <Wrapper t={t}>
        <Post
          color={theme.first_card}
          src={require('../../public/images/desktop.png')}
          title={t('first_card.title')}
          description={t('first_card.description')}
          button={t('first_card.button')}
          onClick={() =>
            firstCardOnClick(scrollDownInfo, setScrollDownInfo, t('first_card.add_info'))
          }
        />
        <Post
          color={theme.second_card}
          src={require('../../public/images/tablet.png')}
          title={t('second_card.title')}
          description={t('second_card.description')}
          button={t('second_card.button')}
          onClick={() =>
            secondCardOnClick(
              <AdditionalInfoPopup>{t('second_card.add_info')}</AdditionalInfoPopup>
            )
          }
        />
        <Post
          color={theme.third_card}
          src={require('../../public/images/mobile.png')}
          title={t('third_card.title')}
          description={t('third_card.description')}
          button={t('third_card.button')}
          onClick={() => thirdCardOnClick(themeContext, setTheme, themes)}
        />
      </Wrapper>
      <AdditionalInfoScrollDown ref={AdditionalInfoScrollDownRef}>
        {scrollDownInfo}
      </AdditionalInfoScrollDown>
    </>
  );
};

Posts.propTypes = {
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

Posts.defaultProps = {
  theme: themes.default
};

Posts.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default TranslateInstance.withTranslation('common')(withTheme(Posts));
