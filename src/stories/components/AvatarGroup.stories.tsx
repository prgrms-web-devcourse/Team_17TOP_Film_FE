import Avatar from '../../components/refactor/atoms/Avatar';

export default {
  title: 'Example/AvatarGroup',
  component: Avatar,
  argTypes: {
    overlapPx: {
      type: { name: 'number', required: false },
    },
    maxLen: {
      type: { name: 'number', required: false },
    },
  },
};

export const Default = (args: any) => (
  <Avatar.Group {...args}>
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
  </Avatar.Group>
);
export const Overlap = (args: any) => (
  <Avatar.Group {...args} overlapPx={100}>
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
  </Avatar.Group>
);

export const maxLen = (args: any) => (
  <Avatar.Group {...args} overlapPx={100} maxLen={2}>
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
    <Avatar src="https://picsum.photos/200" alt="testImg" size={200} />
  </Avatar.Group>
);

export const Lazy = (args: any) => (
  <div style={{ height: '200px' }}>
    <Avatar.Group {...args} overlapPx={100} maxLen={2}>
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
    </Avatar.Group>
    <Avatar.Group {...args} overlapPx={100} maxLen={2}>
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
      <Avatar src="https://picsum.photos/200" alt="testImg" size={200} lazy threshold={0.7} />
    </Avatar.Group>
  </div>
);
