import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import Header from '../components/Header';
import { appWithTranslation } from '../i18n';

describe('Home', () => {
  var I18nApp;
  beforeEach(async () => {
    const props = await Home.getInitialProps();
    I18nApp = appWithTranslation(Home);
  });

  it('renders without crashing', () => {
    const { container } = render(<I18nApp />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  describe('Header', () => {
    it('renders', () => {
      const { container, getByTestId } = render(<I18nApp />);
      expect(getByTestId('header').innerHTML).toMatchSnapshot();
    });
  });
});
