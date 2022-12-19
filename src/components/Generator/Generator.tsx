import { MouseEventHandler, useState } from 'react';

import { v4 as uuidv4 } from 'uuid'; // @types/uuid
import { useThemeContext, Theme } from '@components/Theme/ThemeContext';
import { ThemeSwitcher } from '@components/Theme/ThemeSwitcher';
import { Button } from '@atoms/Button';
import './Generator.css';
import { ButtonRow } from '@atoms/ButtonRow';

const Generator = () => {
  // useState -> [var, fn]
  // const [id, setId] = useState<number>(0);
  const [id, setId] = useState<string>(uuidv4());
  const { theme } = useThemeContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setId(uuidv4());
  }

  const className = theme === Theme.DARK ? 'dark' : '';
  return (
    <div className={className}> {/* React.Fragment */}
      {/* <p>Tekst {id}</p> */}
      <p>{id}</p>
      <ButtonRow>
        <Button onClick={handleClick}>Refresh</Button>
      </ButtonRow>
      {/* <AuthInfo /> */}
      <ThemeSwitcher />
    </div>
  )
}

export { Generator };
