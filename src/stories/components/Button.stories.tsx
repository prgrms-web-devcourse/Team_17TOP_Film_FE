import { Button } from '@refactors/atoms';
import { ComponentMeta } from '@storybook/react';
export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Default = (args: any) => {
  return <Button {...args}>Button</Button>;
};
export const Style = (args: any) => {
  return (
    <div>
      <Button btnStyle={'primary'} {...args}>
        primary
      </Button>
      <Button btnStyle={'secondary'} {...args}>
        secondary
      </Button>
      <Button btnStyle={'default'} {...args}>
        default
      </Button>
    </div>
  );
};
export const Sizes = (args: any) => {
  return (
    <div>
      <Button size={'full'} {...args}>
        full
      </Button>
      <Button {...args}>medium(Default)</Button>
      <Button size={'small'} {...args}>
        small
      </Button>
    </div>
  );
};
export const Disabled = (args: any) => {
  return (
    <div>
      <Button btnStyle="primary" disabled {...args}>
        primary
      </Button>
      <Button btnStyle="secondary" disabled {...args}>
        secondary
      </Button>
    </div>
  );
};
export const Hover = (args: any) => {
  return (
    <div>
      <Button btnStyle="primary" hover={true} {...args}>
        primary
      </Button>
      <Button btnStyle="secondary" hover={true} {...args}>
        secondary
      </Button>
      <Button hover={true} {...args}>
        default
      </Button>
    </div>
  );
};
export const Custom = (args: any) => {
  return (
    <div>
      <Button btnStyle="primary" width={300} {...args}>
        width
      </Button>
      <Button btnStyle="primary" height={100} {...args}>
        height
      </Button>
      <Button btnStyle="primary" color="#000" {...args}>
        color
      </Button>
      <Button bgColor="#ff6f6f" {...args}>
        bgColor
      </Button>
      <Button bgColor="#ff6f6f" border="3px solid #000" {...args}>
        border
      </Button>
      <Button bgColor="#ff6f6f" borderRadius={false} {...args}>
        borderRadius
      </Button>
    </div>
  );
};
