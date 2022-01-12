import React from 'react';
import Input from '../../components/refactor/atoms/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'date'],
      control: { type: 'radio' },
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'Placeholder',
      control: { type: 'text' },
    },
    invalid: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    disabled: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    width: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    borderRadius: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
  },
};

export const Default = (args: any) => {
  return <Input {...args}></Input>;
};
