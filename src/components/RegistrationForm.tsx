import { ChangeEventHandler, FormEventHandler, useState } from 'react';

interface User {
  email: string;
  password: string;
  language: string;
}

const defaultUser: User = {
  email: 'ala@wp.pl',
  password: '',
  language: '',
}

const RegistrationForm = () => {
  const [user, setUser] = useState<User>(defaultUser);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
    // 1. copy all user object to new one
    // 2. set new value password: 'value'
    console.log('handleChange:user: ', user);
  }

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('handleSubmit:user: ', user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>E-mail: {user.email}, password: {user.password}</p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={user.email}
          // onChange={(event) => handleEmailChange(event, setEmail)} />
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="language2">Language</label>
        <input id="language2" type="text" onChange={handleChange} />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export { RegistrationForm };
