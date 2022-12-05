import { ChangeEventHandler, useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form>
      <div>
        <p>E-mail: {email}, password: {password}</p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" type="text" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export { RegistrationForm };
