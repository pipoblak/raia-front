import React from 'react';
import { Wrapper, ImageBackground, InfoContent, Image, Title, Description, Button } from './styles';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import themes from '../../styles/themes';
import TranslateInstance from '../../i18n';
import ReactHtmlParser from 'react-html-parser';

export const Post = ({ t, color, src, title, description, button, onClick }) => {
  return (
    <Wrapper t={t}>
      <ImageBackground bgColor={color}>
        <Image src={src} />
        <Title>{title}</Title>
      </ImageBackground>
      <InfoContent>
        <Description>{ReactHtmlParser(description)}</Description>
        <Button onClick={onClick} bgColor={color}>
          {button}
        </Button>
      </InfoContent>
    </Wrapper>
  );
};

Post.propTypes = {
  theme: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export const defaultOnClick = () => {};

Post.defaultProps = {
  theme: themes.default,
  onClick: defaultOnClick
};

Post.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default TranslateInstance.withTranslation('common')(withTheme(Post));
