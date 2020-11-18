import React from 'react';
import Notification from './notification';

export default {
  title: 'Components/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const UsageWarning = Template.bind({});
UsageWarning.args = { message: 'Notification warning' };
UsageWarning.storyName = 'Variation warning';
