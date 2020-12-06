import React from 'react';
import Footer from '../components/Footer';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components/Footer',
  component: Footer,
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
      <Footer {...{ ...args, theme: undefined }} />
    </div>
  </Provider>
);

export const DefaultFooter = Template.bind({});

DefaultFooter.storyName = 'Footer';
