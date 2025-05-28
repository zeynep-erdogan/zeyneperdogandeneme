import {createContext, useContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
  );
  

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  
  return (
  <ThemeContext.Provider value={{theme, changeTheme}}>
    {children}
  </ThemeContext.Provider>
);
}

export const useTheme = () =>  useContext(ThemeContext);

