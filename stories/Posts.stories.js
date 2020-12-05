import React from 'react';
import Posts from '../components/Posts';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components/Posts',
  component: Posts,
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
      <Posts {...{ ...args, theme: undefined }} />
    </div>
  </Provider>
);

export const DefaultPosts = Template.bind({});

DefaultPosts.storyName = 'Posts';
