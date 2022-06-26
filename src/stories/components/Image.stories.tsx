import { Img } from '@refactors/atoms';
import img_profile from '@assets/images/img_profile.svg';

export default {
  title: 'Example/Image',
  argTypes: {
    lazy: {
      type: { name: 'boolean', required: false },
    },
    threshold: {
      type: { name: 'number', required: false },
    },
    src: {
      type: { name: 'string' },
    },
    alt: {
      type: { name: 'string' },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
    width: {
      type: { name: ['number', 'string'] },
    },
    height: {
      type: { name: ['number', 'string'] },
    },
  },
};
export const Default = (args: any) => {
  return <Img src="https://picsum.photos/200" alt="testImg" width={200} height={200} {...args} />;
};

export const Lazy = (args: any) => {
  return (
    <div style={{ height: '400px' }}>
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.5}
        {...args}
      />
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.5}
        {...args}
      />
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.5}
        {...args}
      />
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.5}
        {...args}
      />
    </div>
  );
};
export const Placeholder = (args: any) => {
  return (
    <div style={{ height: '300px' }}>
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.7}
        placeholder={img_profile}
        {...args}
      />
      <Img
        src="https://picsum.photos/200"
        alt="testImg"
        width={200}
        height={200}
        lazy
        threshold={0.7}
        placeholder={img_profile}
        {...args}
      />
    </div>
  );
};
export const BorderRadius = (args: any) => (
  <Img
    src="https://picsum.photos/200"
    alt="testImg"
    width={200}
    height={200}
    borderRadius="10px"
    {...args}
  />
);
export const Circle = (args: any) => (
  <Img src="https://picsum.photos/200" alt="testImg" width={200} height={200} circle {...args} />
);

export const InlineBlock = (args: any) => (
  <div>
    <Img
      src="https://picsum.photos/200"
      alt="testImg"
      width={200}
      height={200}
      block={false}
      {...args}
    />
    <Img
      src="https://picsum.photos/200"
      alt="testImg"
      width={200}
      height={200}
      block={false}
      {...args}
    />
  </div>
);
