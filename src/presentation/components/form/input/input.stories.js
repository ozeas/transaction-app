import React from 'react';

import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  label: 'Buyer name',
};
BasicUsage.storyName = 'Basic usage';

export const UsageWithInitialValue = Template.bind({});
UsageWithInitialValue.args = {
  label: 'Buyer name',
  initialValue: 'Carolina Sophie Andrea Caldeira',
};
UsageWithInitialValue.storyName = 'With initial value';

export const UsageWithMask = Template.bind({});
UsageWithMask.args = {
  label: 'Credit card',
  mask: '9999 9999 9999 9999',
};
UsageWithMask.storyName = 'With mask';
