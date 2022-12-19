import { ComponentMeta } from '@storybook/react';

import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from '@components/Auth';

export default {
  title: 'App/Auth/AuthCredentials',
} as ComponentMeta<typeof AuthCredentials>;


export const _AuthCredentials = () => (
  <AuthProvider><AuthCredentials /></AuthProvider>
);
