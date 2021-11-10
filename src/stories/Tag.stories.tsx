import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {},
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  label: 'Tag1',
  themeColor: 'c-tag-berry',
};

export const Example2 = Template.bind({});
Example2.args = {
  label: 'Tag2',
  themeColor: 'c-tag-cornflower'
};

export const Example3 = Template.bind({});
Example3.args = {
  label: 'Long long long long long tag',
  themeColor: 'c-tag-yellow'
};

export const Example5 = Template.bind({});
Example5.args = {
  label: 'This is a Tag',
  themeColor: 'c-tag-pink'
};

export const Example6 = Template.bind({});
Example6.args = {
  label: 'This is a default Tag',
};