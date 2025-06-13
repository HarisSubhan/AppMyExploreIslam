// context/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  // add other color properties as needed
}

interface ThemeContextData {
  theme: {
    colors: ThemeColors;
  };
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: {
    colors: {
      primary: '#6200ee',
      background: '#ffffff',
      text: '#000000',
    }
  },
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  
  const theme = {
    colors: isDark 
      ? {
          primary: '#bb86fc',
          background: '#121212',
          text: '#ffffff',
        }
      : {
          primary: '#6200ee',
          background: '#ffffff',
          text: '#000000',
        },
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);