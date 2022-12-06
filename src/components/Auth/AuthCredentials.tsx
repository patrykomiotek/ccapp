import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const AuthCredentials = () => {
  const user = useContext(AuthContext);
  // const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Is Logged in: {user.authorized ? 'Yes' : 'No' }, {user.email}</p>
      <button onClick={() => {
        if (user.setIsAuthorized) {
          user.setIsAuthorized(!user.authorized);
        }
      }}>Toggle</button>
    </div>
  );
}

export { AuthCredentials };
