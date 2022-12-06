import { useThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { toggle } = useThemeContext();
  return (
    <button onClick={() => toggle()}>Toggle theme</button>
  );
}

export { ThemeSwitcher };
