import Text from '../../components/refactor/atoms/Text';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    textType: {
      options: [
        'Heading1',
        'Heading2',
        'Heading3',
        'Heading4',
        'Paragraph1',
        'Paragraph2',
        'smallText',
      ],
      control: { type: 'radio' },
    },
    textColor: {
      options: [
        'gray50',
        'gray100',
        'gray200',
        'gray300',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
        'primary',
        'red900',
      ],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args: any) => {
  return <Text {...args}>예시용 텍스트 입니다.</Text>;
};
