import { createContext } from 'react';
import { User } from '../../types';

const defaultValues: User = {
  email: '',
  authorized: false,
  password: '',
  language: '',
}

export const AuthContext = createContext(defaultValues);

AuthContext.displayName = 'AuthContext';

// AuthContext.