import styled from '@emotion/styled';
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
  },
} as ComponentMeta<typeof BottomNavigation>;

export const Default: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav {...args}>
        <BNItem href="/asdf" icon="markerOpen" text="footer1" />
        <BNItem href="/asdf" icon="markerClose" text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const ChildrenWrong: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav {...args}>asdf</CuBtnNav>
    </Wrapper>
  );
};

export const NoIcon: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav {...args}>
        <BNItem href="/asdf" text="footer1" />
        <BNItem href="/asdf" text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};

export const IconSizeUp: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={50} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={50} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const DisplayColumn: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav direction="column" {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};

export const hasDivider: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav divider {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const dividerColorRed: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav divider dividerColor="red" {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const DividerColorChange: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav divider dividerColor="red" {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const DefaultActive: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav activeColor="red" {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
export const ActiveSetting: ComponentStory<typeof BottomNavigation> = (args) => {
  return (
    <Wrapper>
      <CuBtnNav activeColor="red" {...args}>
        <BNItem href="/asdf" icon="markerOpen" iconSize={40} text="footer1" />
        <BNItem active href="/asdf" icon="markerClose" iconSize={40} text="footer1" />
      </CuBtnNav>
    </Wrapper>
  );
};
const CuBtnNav = styled(BottomNavigation)`
  position: absolute;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100px;
`;
