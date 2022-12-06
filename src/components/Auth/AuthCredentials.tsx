import { useAuthContext } from '../Auth/AuthContext';

const AuthCredentials = () => {
  const user = useAuthContext();
  // const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Is Logged in: {user.authorized ? 'Yes' : 'No' }, {user.email}</p>
      <button onClick={() => user.toggle()}>Toggle</button>
    </div>
  );
}

export { AuthCredentials };
