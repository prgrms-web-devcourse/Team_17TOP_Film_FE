import { Button, Icon } from '@refactors/atoms';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    btnStyle: {
      options: ['primary', 'secondary', 'default'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'full'],
      control: { type: 'radio' },
    },
    width: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    height: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    color: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    bgColor: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    border: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    borderRadius: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    hover: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Style: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle={'primary'} size="medium">
        primary
      </Button>
      <Button {...args} btnStyle={'secondary'} size="medium">
        secondary
      </Button>
      <Button {...args} btnStyle={'default'} size="medium">
        default
      </Button>
    </>
  );
};
export const Sizes: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle={'default'} size={'full'}>
        full
      </Button>
      <Button {...args} btnStyle={'default'} size={'medium'}>
        medium
      </Button>
      <Button {...args} btnStyle={'default'} size={'small'}>
        small
      </Button>
    </>
  );
};
export const Disabled: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle="primary" size={'medium'} disabled>
        primary
      </Button>
      <Button {...args} btnStyle="secondary" size={'medium'} disabled>
        secondary
      </Button>
    </>
  );
};
export const Hover: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle="primary" size={'medium'} hover={true}>
        primary
      </Button>
      <Button {...args} btnStyle="secondary" size={'medium'} hover={true}>
        secondary
      </Button>
      <Button {...args} btnStyle="default" size={'medium'} hover={true}>
        default
      </Button>
    </>
  );
};
export const IconBtn: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle="primary" size="small">
        <Icon icon="calender"></Icon>
        <p>텍스트</p>
      </Button>
      <Button {...args} btnStyle="secondary" size="medium">
        <Icon icon="calender"></Icon>
        <span>Text</span>
      </Button>
      <Button {...args} btnStyle="default" size="medium">
        <Icon icon="calender"></Icon> 텍스트
      </Button>
    </>
  );
};
export const Custom: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args} btnStyle="primary" size={'medium'} width={300}>
        width
      </Button>
      <Button {...args} btnStyle="primary" size={'medium'} height={100}>
        height
      </Button>
      <Button {...args} btnStyle="primary" size={'medium'} color="#000">
        color
      </Button>
      <Button {...args} btnStyle="default" size={'medium'} bgColor="#ff6f6f">
        bgColor
      </Button>
      <Button
        {...args}
        btnStyle="default"
        size={'medium'}
        bgColor="#ff6f6f"
        border="3px solid #000"
      >
        border
      </Button>
      <Button {...args} btnStyle="default" size={'medium'} bgColor="#ff6f6f" borderRadius={false}>
        borderRadius
      </Button>
    </>
  );
};
