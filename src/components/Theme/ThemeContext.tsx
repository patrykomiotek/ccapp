import React, { createContext, useState, useContext } from 'react';

enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const toggle = () => setTheme(
    theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
  );
  return { theme, toggle };
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Component should be placed in ThemeProvider component');
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
  const { theme, toggle } = useTheme();
  return (
    <ThemeContext.Provider value={{
      theme,
      toggle,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}