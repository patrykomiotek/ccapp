import { useThemeContext } from './ThemeContext';

import { Button } from '@atoms/Button';

const ThemeSwitcher = () => {
  const { toggle } = useThemeContext();
  return (
    <Button onClick={() => toggle()}>Toggle theme</Button>
  );
}

export { ThemeSwitcher };
