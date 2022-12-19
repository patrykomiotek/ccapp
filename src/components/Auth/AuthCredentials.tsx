import { useAuthContext } from '@components/Auth/AuthContext';
import { Button } from '@atoms/Button';

const AuthCredentials = () => {
  const user = useAuthContext();
  // const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Is Logged in: {user.authorized ? 'Yes' : 'No' }, {user.email}</p>
      <Button onClick={() => user.toggle()}>Toggle</Button>
    </div>
  );
}

export { AuthCredentials };
