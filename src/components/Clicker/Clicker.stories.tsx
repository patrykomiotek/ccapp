import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Clicker } from './Clicker';

export default {
  title: 'App/Clicker',
  component: Clicker,
} as ComponentMeta<typeof Clicker>;

const Template: ComponentStory<typeof Clicker> = () => <Clicker />;

export const _Clicker = Template.bind({});
_Clicker.args = {};
