import React from 'react';

import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = { children: 'With icon', label: 'Buyer name' };
BasicUsage.storyName = 'Basic usage';
