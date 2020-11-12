import React from 'react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = { children: 'Default button' };
BasicUsage.storyName = 'Basic usage';

export const UsageWithIcon = Template.bind({});
UsageWithIcon.args = { children: 'Create transaction', icon: 'add-fill' };
UsageWithIcon.storyName = 'With icon';
