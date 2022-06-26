import Avatar from '../../components/refactor/atoms/Avatar';
import img_profile from '../../assets/images/img_profile.svg';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    size: { type: { name: 'number' } },
    lazy: { type: { name: 'boolean', required: false } },
    threshold: { type: { name: 'number', required: false } },
    src: { type: { name: 'string' } },
    alt: { type: { name: 'string' } },
    placeholder: { type: { name: 'string' }, required: false },
  },
};
export const Default = (args: any) => (
  <Avatar {...args} src="https://picsum.photos/200" alt="testImg" size={200} />
);
export const Lazy = (args: any) => (
  <div style={{ height: ' 200px' }}>
    <Avatar
      {...args}
      src="https://picsum.photos/200"
      alt="testImg"
      size={200}
      lazy
      threshold={0.7}
    />
    <Avatar
      {...args}
      src="https://picsum.photos/200"
      alt="testImg"
      size={200}
      lazy
      threshold={0.7}
    />
  </div>
);
export const Placeholder = (args: any) => (
  <div style={{ height: ' 200px' }}>
    <Avatar
      {...args}
      src="https://picsum.photos/200"
      alt="testImg"
      size={200}
      lazy
      threshold={0.7}
      placeholder={img_profile}
    />
    <Avatar
      {...args}
      src="https://picsum.photos/200"
      alt="testImg"
      size={200}
      lazy
      threshold={0.7}
      placeholder={img_profile}
    />
  </div>
);
