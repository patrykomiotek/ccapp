import React, { createContext, useState, useContext } from 'react';

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = (defaultTheme = Theme.LIGHT) => {
  const [theme, setTheme] = useState(defaultTheme);
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

export const ThemeProvider = (
  { children, currentTheme }: { children: React.ReactNode, currentTheme?: Theme}
  ) => {
  const { theme, toggle } = useTheme(currentTheme ?? Theme.LIGHT);
  return (
    <ThemeContext.Provider value={{
      theme,
      toggle
    }}>
      {children}
    </ThemeContext.Provider>
  );
}