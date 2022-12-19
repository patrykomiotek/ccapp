import { ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'App/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = <Counter />
