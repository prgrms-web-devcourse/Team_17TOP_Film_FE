import styled from '@emotion/styled';
import { Icon } from '@refactors/atoms';
import { BNItem, BottomNavigation } from '@refactors/organism';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/BottomNavigation',
  component: BottomNavigation,
  argTypes: {
    name: { control: { type: 'text' } },
    bgColor: { control: { type: 'text' } },
    direction: {
      control: { type: 'radio' },
      options: ['column', null],
    },
    dividerColor: {
      control: { type: 'text' },
    },
    itemHoverColor: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof BottomNavigation>;

export const Default: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation {...args}>
      <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};

export const ChildrenWrong: ComponentStory<typeof BottomNavigation> = (args) => {
  return <BottomNavigation {...args}>asdf</BottomNavigation>;
};

export const NoIcon: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation {...args}>
      <BNItem href="/asdf" text="footer1" />
      <BNItem href="/asdf" text="footer1" />
    </BottomNavigation>
  );
};

export const IconSizeUp: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation {...args}>
      <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};
export const DisplayColumn: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation direction="column" {...args}>
      <BNItem
        style={{ background: 'red' }}
        href="/asdf"
        icon="markerOpen"
        iconSize={40}
        text="footer1"
      />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};

export const hasDivider: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation direction="column" divider {...args}>
      <BNItem
        style={{ background: 'red' }}
        href="/asdf"
        icon="markerOpen"
        iconSize={40}
        text="footer1"
      />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};
export const DividerColorChange: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation direction="column" divider dividerColor="red" {...args}>
      <BNItem
        style={{ background: 'red' }}
        href="/asdf"
        icon="markerOpen"
        iconSize={40}
        text="footer1"
      />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};
export const Hover: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <BottomNavigation direction="column" divider dividerColor="red" itemHoverColor="red" {...args}>
      <BNItem
        style={{ background: 'red' }}
        href="/asdf"
        icon="markerOpen"
        iconSize={40}
        text="footer1"
      />
      <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
    </BottomNavigation>
  );
};
