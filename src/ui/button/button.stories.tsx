import { Button } from './button';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './button.module.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'negative'],
      control: {
        type: 'radio'
      }
    },
    size: {
      type: 'string',
      description: 'Размер кнопки',
      defaultValue: 'large',
      options: ['large', 'small'],
      control: {
        type: 'radio'
      }
    },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
}

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  type: 'primary',
  size: 'large',
  children: 'Начать смену',
}

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  type: 'secondary',
  size: 'large',
  children: 'Начать смену',
}

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  type: 'primary',
  size: 'small',
  children: 'Выбрать',
}

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  type: 'secondary',
  size: 'small',
  children: 'Выбрать дату',
}

export const Negative = Template.bind({});
Negative.args = {
  type: 'negative',
  size: 'small',
  children: 'Завершить смену',
}

// export const Default = () => <Button onClick={() => {}}>Click me</Button>;
