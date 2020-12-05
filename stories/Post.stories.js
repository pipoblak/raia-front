import React from 'react';
import Post from '../components/Post';
import themes from '../styles/themes';
import Provider from './ThemeProvider';

export default {
  title: 'Components/Post',
  component: Post,
  args: {
    theme: 'default',
    color: '#646464',
    src: 'https://via.placeholder.com/350x150',
    title: 'title',
    description: 'description',
    button: 'action'
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
      <Post {...{ ...args, theme: undefined }} />
    </div>
  </Provider>
);

export const DefaultPost = Template.bind({});

DefaultPost.storyName = 'Post';
