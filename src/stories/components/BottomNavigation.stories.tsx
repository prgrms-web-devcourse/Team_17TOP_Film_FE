import styled from '@emotion/styled';
import { Icon } from '@refactors/atoms';
import { BNItem, BottomNavigation } from '@refactors/organism';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/BottomNavigation',
  component: BottomNavigation,
} as ComponentMeta<typeof BottomNavigation>;

export const Default: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation {...args}>
        <BNItem href="/asdf" icon="markerOpen" text="footer1" />
        <BNItem href="/asdf" icon="markerClose" text="footer1" />
      </BottomNavigation>
    </div>
  );
};

export const ChildrenWrong: ComponentStory<typeof BottomNavigation> = (args) => {
  return <BottomNavigation {...args}>asdf</BottomNavigation>;
};

export const NoIcon: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation {...args}>
        <BNItem href="/asdf" text="footer1" />
        <BNItem href="/asdf" text="footer1" />
      </BottomNavigation>
    </div>
  );
};

export const IconSizeUp: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </BottomNavigation>
    </div>
  );
};
export const DisplayColumn: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};

export const hasDivider: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};
export const DividerColorChange: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};
export const Hover: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation
        direction="column"
        divider
        dividerColor="red"
        itemHoverColor="red"
        {...args}
      >
        <BNItem
          style={{ background: 'red' }}
          href="/asdf"
          icon="markerOpen"
          iconSize={40}
          text="footer1"
        />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </BottomNavigation>
    </div>
  );
};
