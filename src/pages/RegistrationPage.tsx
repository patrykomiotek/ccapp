import { RegistrationForm } from '@components/RegistrationForm';
import type { User } from '@apptypes/User';

const defaultUser: User = {
  email: 'ala@wp.pl',
  password: '1232',
  language: '',
}

const RegistrationPage = () => {
  const foo = (user: User) => {
    console.log('user in RegistrationPage: ', user);
    // api.post
  }
  return (
    <RegistrationForm
      defaultValues={defaultUser}
      onSubmitXYZ={foo}
    />
  );
}

export { RegistrationPage }