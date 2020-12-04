import { render, screen } from "@testing-library/react";
import App from "../pages/index";
import { appWithTranslation } from '../i18n';

describe("App", () => {
  const I18nApp = appWithTranslation(App);
  it("renders without crashing", () => {
    render(<I18nApp/>);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});