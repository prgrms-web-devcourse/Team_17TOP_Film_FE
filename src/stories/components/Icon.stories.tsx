import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '../../components/refactor/atoms/Icon';
import { iconTypes } from '../../components/refactor/atoms/Icon/type';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} icon="markerOpen" size={48}></Icon>;
};
export const reactIcons: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} icon="BiChevronLeft" size={48} color={'blue'}></Icon>;
};
export const IconList: ComponentStory<typeof Icon> = (args) => {
  return (
    <ul>
      {iconTypes.map((icon) => (
        <li key={icon} style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
          <Icon {...args} icon={icon} size={36} color={'red'}></Icon>
          {icon}
        </li>
      ))}
    </ul>
  );
};
