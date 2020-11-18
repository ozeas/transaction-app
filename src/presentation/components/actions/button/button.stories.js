import React from 'react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = { children: 'Default button', width: '320px' };
BasicUsage.storyName = 'Basic usage';

export const UsageWithIcon = Template.bind({});
UsageWithIcon.args = {
  children: 'With icon',
  icon: 'add-fill',
  width: '320px',
};
UsageWithIcon.storyName = 'With icon';

export const UsageDisabled = Template.bind({});
UsageDisabled.args = {
  children: 'Disabled button',
  disabled: true,
  width: '320px',
};
UsageDisabled.storyName = 'With disabled';
