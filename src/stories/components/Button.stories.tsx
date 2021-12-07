import React from 'react';
import { Button } from '../../components/atoms';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    width: {
      type: { name: 'string' },
      defaultValue: 'auto',
      control: { type: 'text' },
    },
    height: {
      type: { name: 'string' },
      defaultValue: 'auto',
      control: { type: 'text' },
    },
  },
};

export const Default = (args: any) => {
  return <Button {...args}>Button</Button>;
};
export const PrimaryBtn = (args: any) => {
  return (
    <Button buttonType={'PrimaryBtn'} {...args}>
      Button
    </Button>
  );
};
export const SecondaryBtn = (args: any) => {
  return (
    <Button buttonType={'SecondaryBtn'} {...args}>
      Button
    </Button>
  );
};
