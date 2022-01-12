import React from 'react';
import Button from '../../components/refactor/atoms/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
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
