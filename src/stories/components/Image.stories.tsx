import styled from '@emotion/styled';
import { Image } from '../../components/atoms';

export default {
  title: 'Example/Image',
  component: Image,
  argType: {
    lazy: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    threshold: {
      type: { name: 'string' },
      defaultValue: 0,
      control: { type: 'radio', min: 0, max: 1 },
    },
    placeholder: {
      type: { name: 'string', require: true },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    alt: {
      type: { name: 'string' },
      defaultValue: 'test image',
      control: { type: 'text' },
    },
    width: {
      type: { name: 'number' },
      defaultValue: 200,
      control: { type: 'number' },
    },
    height: {
      type: { name: 'number' },
      defaultValue: 200,
      control: { type: 'number' },
    },
  },
};

export const Default = (args: any) => {
  return (
    <div>
      <Image
        {...args}
        lazy={true}
        src="https://picsum.photos/200"
        placeholder="https://via.placeholder.com/200"
        threshold={0.5}
      />
      <Image
        {...args}
        lazy={true}
        src="https://picsum.photos/200"
        placeholder="https://via.placeholder.com/200"
        threshold={0.5}
      />
      <Image
        {...args}
        lazy={true}
        src="https://picsum.photos/200"
        placeholder="https://via.placeholder.com/200"
        threshold={0.5}
      />
    </div>
  );
};
