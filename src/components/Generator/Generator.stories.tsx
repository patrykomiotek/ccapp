import { ComponentMeta } from '@storybook/react';

import { Generator } from './Generator';
import { ThemeProvider, Theme } from '@components/Theme/ThemeContext';

export default {
  title: 'App/Generator',
} as ComponentMeta<typeof Generator>;


export const _Generator = () => (
  <ThemeProvider><Generator /></ThemeProvider>
);

export const _GeneratorDark = () => (
  <ThemeProvider currentTheme={Theme.DARK}><Generator /></ThemeProvider>
);
