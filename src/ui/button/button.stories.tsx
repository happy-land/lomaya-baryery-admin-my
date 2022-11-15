import { Button } from './button';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './button.module.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'primary',
      options: ['primary', 'square', 'link'],
      control: {
        type: 'radio'
      }
    }
  },
} as ComponentMeta<typeof Button>;

type TTemplate = {
  children: string;
  onClick: () => void;
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
}

export const Primary = Template.bind({});
Primary.args = {
  children: 'Начать смену',
  type: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Начать смену',
  type: 'secondary'
}


// export const Default = () => <Button onClick={() => {}}>Click me</Button>;
