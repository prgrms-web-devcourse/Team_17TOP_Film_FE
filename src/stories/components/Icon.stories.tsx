import Icon from '../../components/refactor/atoms/Icon';
import { iconTypes } from '../../components/refactor/atoms/Icon/type';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {},
};

export const Default = (args: any) => {
  return <Icon icon="markerOpen" size={48} {...args}></Icon>;
};
export const reactIcons = (args: any) => {
  return <Icon icon="BiChevronLeft" size={48} color={'blue'} {...args}></Icon>;
};
export const IconList = (args: any) => {
  return (
    <ul>
      {iconTypes.map((icon) => (
        <li key={icon} style={{ margin: '1rem', display: 'flex', alignItems: 'center' }}>
          <Icon icon={icon} size={36} color={'red'} {...args}></Icon>
          {icon}
        </li>
      ))}
    </ul>
  );
};
