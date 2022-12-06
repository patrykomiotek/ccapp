interface User {
  email: string;
  authorized?: boolean;
  password?: string;
  language?: string;
}

export type { User };
