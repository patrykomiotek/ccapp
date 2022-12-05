import { ChangeEventHandler, useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('ala@wp.pl');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // not do this!
    // const { id, value } = event.target;
    // switch (id) {
    //   case 'email':
    //     setEmail(value);
    //     break;
    //   case 
    // }

    setEmail(event.currentTarget.value);
  }

  return (
    <form>
      <div>
        <p>E-mail: {email}, password: {password}</p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
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
      <input type="submit" value="Send" />
    </form>
  );
}

export { RegistrationForm };
