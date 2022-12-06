import { Dispatch, SetStateAction } from 'react';

interface User {
  email: string;
  authorized?: boolean;
  password?: string;
  language?: string;
  setIsAuthorized?: Dispatch<SetStateAction<boolean>>
}

export type { User };
