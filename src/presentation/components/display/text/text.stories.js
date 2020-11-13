import React from 'react';
import Text from './text';

export default {
  title: 'Components/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = { children: 'Basic usage text' };
BasicUsage.storyName = 'Basic usage';

export const UsageWithFontSize = Template.bind({});
UsageWithFontSize.args = { children: 'Custom font-size', fontSize: '14px' };
UsageWithFontSize.storyName = 'With custom font-size';

export const UsageWithColor = Template.bind({});
UsageWithColor.args = { children: 'Custom color', color: 'green100' };
UsageWithColor.storyName = 'With custom color';

export const UsageWithWeight = Template.bind({});
UsageWithWeight.args = {
  children: 'Custom font-weight',
  fontWeight: 'regular',
};
UsageWithWeight.storyName = 'With custom font-weight';

export const UsageWithOtherElement = Template.bind({});
UsageWithOtherElement.args = {
  children: 'Custom element',
  as: 'h1',
};
UsageWithOtherElement.storyName = 'With configured other element';
