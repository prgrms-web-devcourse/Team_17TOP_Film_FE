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
    <Button btnStyle={'primary'} {...args}>
      Button
    </Button>
  );
};
export const SecondaryBtn = (args: any) => {
  return (
    <Button btnStyle={'secondary'} {...args}>
      Button
    </Button>
  );
};
export const CustomBtn = (args: any) => {
  return (
    <Button btnStyle={'default'} width="100%" color="#fff" bgColor="red" border="none" {...args}>
      Button
    </Button>
  );
};
