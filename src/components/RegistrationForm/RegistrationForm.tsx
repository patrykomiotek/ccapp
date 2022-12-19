import Confetti from 'react-confetti';
import { FormEventHandler, MouseEventHandler, useRef, useState, useEffect, FocusEventHandler } from 'react';

import { MagicButton } from '@atoms/MagicButton';
import { Button } from '@atoms/Button';
import type { User } from '@apptypes/User';
import { Input } from '@atoms/Input';
import { ButtonRow } from '@atoms/ButtonRow';

interface Props {
  defaultValues?: User;
  onSubmit: (user: User) => void
}

const RegistrationForm = ({ defaultValues, onSubmit }: Props) => {
  const [isSent, setIsSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
      emailFieldRef.current.style.border = '1px solid #c0392b';
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
    onSubmit(user);
    setShowConfetti(true);
    setIsSent(true);
  }

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = 'red';
    }
  }

  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    console.log('event: ', event.target.value);
    if (!event.target.value.includes('@')) {
      setFormErrors({
        email: 'E-mail is invalid',
      });
    } else {
      setFormErrors({
        email: '',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>E-mail: {emailFieldRef.current?.value}, password: {passwordFieldRef.current?.value}</p>
      </div>
      <Input
        ref={emailFieldRef}
        label="E-mail"
        id="email"
        // type="email"
        type="email"
        defaultValue={defaultValues?.email}
        onBlur={handleEmailBlur}
      />
      {formErrors.email && <p>E-mail is invalid</p>}
      <Input
        ref={passwordFieldRef}
        label="Password"
        id="password"
        type="password"
      />
      <Input
        ref={languageFieldRef}
        label="Language"
        id="language"
        type="text"
        defaultValue={defaultValues?.language}
      />
      <ButtonRow>
        <Button type="submit">Send</Button>
        <MagicButton
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}>Hello</MagicButton>
      </ButtonRow>
      {/* {showConfetti && <Confetti width={600} height={400} />} */}
      {/* {showConfetti ? <Confetti width={600} height={400} /> : null} */}
    </form>
  );
}

export { RegistrationForm };
