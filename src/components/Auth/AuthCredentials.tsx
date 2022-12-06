import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const AuthCredentials = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <p>Is Logged in: {user.authorized ? 'Yes' : 'No' }</p>
    </div>
  );
}

export { AuthCredentials };
