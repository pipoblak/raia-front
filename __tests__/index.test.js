import React, { useState } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Home from '../pages/index';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import Post, { defaultOnClick as defaultPostClick } from '../components/Post';
import Footer from '../components/Footer';
import { Wrapper as HeaderWrapper, Link, Logo } from '../components/Header/styles';
import { Wrapper as BannerWrapper, Title, SubTitle, Colors } from '../components/Banner/styles';
import { Wrapper as PostsWrapper, AdditionalInfoScrollDown } from '../components/Posts/styles';
import { Wrapper as PostWrapper } from '../components/Post/styles';
import {
  Wrapper as FooterWrapper,
  Brand,
  Copyright,
  Logo as FooterLogo
} from '../components/Footer/styles';
import TranslateInstance from '../i18n';
import themes, { ThemeContext } from '../styles/themes';
import { firstCardOnClick, firstCardEffect } from '../components/Posts/first_card_click';
import thirdCardOnClick from '../components/Posts/third_card_click';

describe('Home', () => {
  var I18nApp;
  afterEach(async () => {
    await cleanup();
  });
  beforeEach(async () => {
    await Home.getInitialProps();
    await Header.getInitialProps();
    await Banner.getInitialProps();
    await Posts.getInitialProps();
    await Post.getInitialProps();
    await Footer.getInitialProps();
    I18nApp = TranslateInstance.appWithTranslation(
      TranslateInstance.withTranslation('common')(Home)
    );
  });

  it('renders without crashing', () => {
    const { container } = render(<I18nApp />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  describe('Header', () => {
    it('renders', () => {
      render(<I18nApp />);
      const headerClass = HeaderWrapper.styledComponentId;
      const headerRoot = document.getElementsByClassName(headerClass);
      expect(headerRoot.length).toBe(1);
    });
    it('have a logo', () => {
      render(<I18nApp />);
      const logoClass = Logo.styledComponentId;
      const logoRoot = document.getElementsByClassName(logoClass);
      expect(logoRoot.length).toBe(1);
    });
    it('have 5 links', () => {
      render(<I18nApp />);
      const linksClass = Link.styledComponentId;
      const linksRoot = document.getElementsByClassName(linksClass);
      expect(linksRoot.length).toBe(5);
    });
  });

  describe('Banner', () => {
    it('renders', () => {
      render(<I18nApp />);
      const bannerClass = BannerWrapper.styledComponentId;
      const bannerRoot = document.getElementsByClassName(bannerClass);
      expect(bannerRoot.length).toBe(1);
    });
    it('have a Title', () => {
      render(<I18nApp />);
      const titleClass = Title.styledComponentId;
      const titleRoot = document.getElementsByClassName(titleClass);
      expect(titleRoot.length).toBe(1);
    });
    it('have 6 Subtitle', () => {
      render(<I18nApp />);
      const subTitleClass = SubTitle.styledComponentId;
      const subTitleRoot = document.getElementsByClassName(subTitleClass);
      expect(subTitleRoot.length).toBe(6);
    });
    it('have a colors', () => {
      render(<I18nApp />);
      const colorClass = Colors.styledComponentId;
      const colorsRoot = document.getElementsByClassName(colorClass);
      expect(colorsRoot.length).toBe(1);
    });
  });

  describe('Posts', () => {
    it('renders', () => {
      render(<I18nApp />);
      const postsClass = PostsWrapper.styledComponentId;
      const postsRoot = document.getElementsByClassName(postsClass);
      expect(postsRoot.length).toBe(1);
    });
    it('have 3 Posts', () => {
      render(<I18nApp />);
      const postsClass = PostsWrapper.styledComponentId;
      const postsRoot = document.getElementsByClassName(postsClass);
      expect(postsRoot[0].childNodes.length).toBe(3);
    });
    it('Default post Click', () => {
      render(<I18nApp />);
      const postsClass = PostsWrapper.styledComponentId;
      const postsRoot = document.getElementsByClassName(postsClass);
      defaultPostClick();
      expect(postsRoot.length).toBe(1);
    });
    it('First Post click', () => {
      render(<I18nApp />);
      const postClass = PostWrapper.styledComponentId;
      const postRoot = document.getElementsByClassName(postClass);
      const addInfoClass = AdditionalInfoScrollDown.styledComponentId;
      fireEvent.click(postRoot[0].getElementsByTagName('button')[0]);
      const addInfoRoot = document.getElementsByClassName(addInfoClass);
      expect(addInfoRoot[0].textContent).toBe('first_card.add_info');
    });
    it('First Post click Function', () => {
      const func = jest.fn();
      firstCardOnClick('', func, '');
      firstCardOnClick('asds', func, '');
      expect(func).toHaveBeenCalled();
    });
    it('First Post Effect Function', () => {
      const func = jest.fn();
      firstCardEffect('', { current: {} });
      firstCardEffect('asds', { current: { scrollIntoView: func } });
      expect(func).toHaveBeenCalled();
    });
    it('Second Post click', () => {
      render(<I18nApp />);
      const postClass = PostWrapper.styledComponentId;
      const postRoot = document.getElementsByClassName(postClass);
      fireEvent.click(postRoot[1].getElementsByTagName('button')[0]);
      const addInfoRoot = document.getElementsByClassName('swal2-container');
      expect(addInfoRoot.length).toBe(1);
    });
    it('Third Post click', () => {
      const setTheme = jest.fn();
      render(
        <ThemeContext.Provider value={[themes.default, setTheme]}>
          <I18nApp />
        </ThemeContext.Provider>
      );
      const postClass = PostWrapper.styledComponentId;
      const postRoot = document.getElementsByClassName(postClass);
      fireEvent.click(postRoot[2].getElementsByTagName('button')[0]);
      expect(setTheme).toHaveBeenCalled();
    });
    it('Third Post click Function', () => {
      const setTheme = jest.fn();
      thirdCardOnClick(themes.default, setTheme, themes);
      thirdCardOnClick(themes.custom, setTheme, themes);
      expect(setTheme).toHaveBeenCalled();
    });
  });

  describe('Footer', () => {
    it('renders', () => {
      render(<I18nApp />);
      const footerClass = FooterWrapper.styledComponentId;
      const footerRoot = document.getElementsByClassName(footerClass);
      expect(footerRoot.length).toBe(1);
    });
    it('have 5 brands', () => {
      render(<I18nApp />);
      const brandsClass = Brand.styledComponentId;
      const brandsRoot = document.getElementsByClassName(brandsClass);
      expect(brandsRoot.length).toBe(5);
    });
    it('have 1 logo', () => {
      render(<I18nApp />);
      const logoClass = FooterLogo.styledComponentId;
      const logoRoot = document.getElementsByClassName(logoClass);
      expect(logoRoot.length).toBe(1);
    });
    it('have coprryght', () => {
      render(<I18nApp />);
      const copyClass = Copyright.styledComponentId;
      const copyRoot = document.getElementsByClassName(copyClass);
      expect(copyRoot.length).toBe(1);
    });
  });
});
