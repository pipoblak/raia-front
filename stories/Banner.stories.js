import React from 'react';
import Banner from '../components/Banner';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components/Banner',
  component: Banner,
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
      <Banner {...{ ...args, theme: undefined }} />
    </div>
  </Provider>
);

export const DefaultBanner = Template.bind({});

DefaultBanner.storyName = 'Banner';
