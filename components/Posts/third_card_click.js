export default (themeContext, setTheme, themes) => {
  themeContext === themes.custom ? setTheme(themes.default) : setTheme(themes.custom);
};
