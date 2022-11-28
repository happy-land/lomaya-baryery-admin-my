import { Tablr } from '../../components/tablr/tablr';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Tablr - A Customizable React Table Component',
  component: Tablr,
  argTypes: {
    rows: {
      type: 'string[][]',
      description: 'Строки',
      table: {
        disable: true,
      },
    },
    headers: {
      type: 'string[]',
      description: 'Заголовок таблицы',
      table: {
        disable: true,
      },
    },
    cellPadding: {
      type: 'string',
      description: 'Внутренний отступ ячейки',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    borderWidth: {
      type: 'string',
      description: 'Толщина границы ячейки',
      defaultValue: 'medium',
      options: ['none', 'thin', 'medium', 'thick'],
      control: {
        type: 'radio',
      },
    },
    cellTextColor: {
      type: 'string',
      description: 'Цвет ячейки',
      defaultValue: 'black',
      control: {
        type: 'color',
        presetColors: ['yellow', 'green', 'tomato'],
      },
    },
    headerTextColor: {
      type: 'string',
      description: 'Цвет заголовка',
      defaultValue: 'white',
      control: {
        type: 'color',
        presetColors: ['yellow', 'green', 'tomato'],
      },
    },
    cellBorderColor: {
      type: 'string',
      description: 'Цвет границы ячейки',
      defaultValue: '#747381',
      control: {
        type: 'color',
        presetColors: ['#747381', 'green', 'tomato'],
      },
    },
  },
} as unknown as ComponentMeta<typeof Tablr>;

const Template: ComponentStory<typeof Tablr> = ({ ...args }) => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};

export const GreyTable = Template.bind({});
GreyTable.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: 'primary',
// }
