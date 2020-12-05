import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Wrapper as HeaderWrapper, Link, Logo } from '../components/Header/styles';
import { Wrapper as BannerWrapper } from '../components/Header/styles';
import TranslateInstance from '../i18n';

describe('Home', () => {
  var I18nApp, TranslatedHeader;
  beforeEach(async () => {
    await Home.getInitialProps();
    await Header.getInitialProps();
    await Banner.getInitialProps();
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
  });
});
