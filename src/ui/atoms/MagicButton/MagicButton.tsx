import { MouseEventHandler, useRef } from 'react';

interface Props {
  children: string;
}

const MagicButton = ({ children }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = 'red';
    }
  }
  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      style={{ backgroundColor: 'blue' }}
    >{children}</button>
  );
}

export { MagicButton };
