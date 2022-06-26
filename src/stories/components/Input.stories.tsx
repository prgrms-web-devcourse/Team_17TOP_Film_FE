import { Input } from '@refactors/atoms';

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
export const Type = (args: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input type={'text'} {...args}></Input>
      <Input type={'date'} {...args}></Input>
    </div>
  );
};
export const Placeholder = (args: any) => {
  return <Input placeholder={'Placeholder'} {...args}></Input>;
};
export const Invalid = (args: any) => {
  return <Input invalid {...args}></Input>;
};
export const Disabled = (args: any) => {
  return <Input disabled {...args}></Input>;
};
export const Width = (args: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input {...args}></Input>
      <Input width={'50%'} {...args}></Input>
      <Input width={300} {...args}></Input>
    </div>
  );
};
export const BorderRadius = (args: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Input {...args}></Input>
      <Input borderRadius={'50%'} {...args}></Input>
      <Input borderRadius={10} {...args}></Input>
    </div>
  );
};
