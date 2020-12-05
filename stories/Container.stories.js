import React from 'react';
import Container from '../components/Container';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components',
  component: Container,
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
    <Container {...{ ...args, theme: undefined }} />
  </Provider>
);

export const Default = Template.bind({});

Default.storyName = 'Container';
