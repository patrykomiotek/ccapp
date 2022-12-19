import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { RegistrationForm } from './RegistrationForm';
import { RegistrationPage } from '@pages/RegistrationPage';

export default {
  title: 'App/RegistrationPage',
} as ComponentMeta<typeof RegistrationPage>;

// const Template: ComponentStory<typeof RegistrationForm> =
//   (args) => <RegistrationForm {...args} />;

// export const Primary = () => Template.bind({});
// Primary.args = {
//   defaultValues: null,
//   onSubmitXYZ: () => null,
// }

export const _RegistrationPage = () => <RegistrationPage />
