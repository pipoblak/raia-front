import React from 'react';
import DefaultTheme from './default';
import CustomTheme from './custom';

export default {
  default: DefaultTheme,
  custom: CustomTheme
};

export const ThemeContext = React.createContext([{}, () => {}]);
