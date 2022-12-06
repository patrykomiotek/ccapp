import Confetti from 'react-confetti';
import { FormEventHandler, useRef, useState, useEffect } from 'react';
import { MagicButton } from '../ui/atoms/MagicButton'; // @atoms/MagicButton
// import type { User } from '../types';
import type { User } from '../types/User';

interface Props {
  defaultValues: User;
  onSubmitXYZ: (user: User) => void
}

const RegistrationForm = ({ defaultValues, onSubmitXYZ }: Props) => {
  const [isSent, setIsSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
      emailFieldRef.current.style.border = '6px solid #f00'
    }

    return () => {
      // Unmount
    }
  }, []); // [] - Mount
  // [user] - Update
  // [user.email] - Update

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const user: User = {
      email: emailFieldRef.current?.value || '',
      password: passwordFieldRef.current?.value || '',
      language: languageFieldRef.current?.value || '',
    }
    console.log('handleSubmit:user: ', user);
    onSubmitXYZ(user);
    setShowConfetti(true);
    setIsSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>E-mail: {emailFieldRef.current?.value}, password: {passwordFieldRef.current?.value}</p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          ref={emailFieldRef}
          id="email"
          type="email"
          defaultValue={defaultValues.email} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordFieldRef} defaultValue={defaultValues.password} id="password" type="password" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input ref={languageFieldRef} defaultValue={defaultValues.language} id="language" type="text" />
      </div>
      <input type="submit" value="Send" />
      <MagicButton>Hello</MagicButton>
      {showConfetti && <Confetti width={600} height={400} />}
    </form>
  );
}

export { RegistrationForm };
