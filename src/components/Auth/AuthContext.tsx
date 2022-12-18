import { createContext, useState, useContext } from 'react';
import { User } from '@apptypes/User';

// const defaultValues: User = {
//   email: '',
//   authorized: false,
//   password: '',
//   language: '',
// }

type SuperUser = {
  email: '',
  authorized: boolean,
  toggle: () => void,
}

// const defaultValues: SuperUser = {
//   email: '',
//   authorized: false,
//   toggle: () => null,
// };

// export const AuthContext = createContext<SuperUser>(defaultValues);
export const AuthContext = createContext<SuperUser | null>(null);

AuthContext.displayName = 'AuthContext';

const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);

  const setIsLoggedIn = (value: boolean) => setAuthorized(value);
  const logOut = () => setAuthorized(false);
  const logIn = () => setAuthorized(true);
  const toggle = () => setAuthorized((value) => !value);

  return { authorized, setIsLoggedIn, logOut, logIn, toggle };
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  console.log('context: ', context);
  if (!context) {
    throw new Error('Hook useAuthContext should be placed in AuthProvider component');
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { authorized, toggle } = useAuth();
  return (
    <AuthContext.Provider value={{
      email: '',
      authorized,
      toggle,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
// AuthContext.