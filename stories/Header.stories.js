import React from 'react';
import Header from '../components/Header';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    theme: 'default'
  },
  argTypes: {
    theme: {
      control: { type: 'select', options: ['default', 'custom'] },
      description: 'Select Theme'
    }
  }
};

const Template = (args) => (
  <Provider theme={themes[args.theme]}>
    <div>
      <Header {...{ ...args, theme: undefined }} />
    </div>
  </Provider>
);

export const Default = Template.bind({});

Default.storyName = 'Header';
