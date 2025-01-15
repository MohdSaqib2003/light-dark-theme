import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const setTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    //Add data attribute, data attributes are custom attributes used to store extra information on standard HTML elements
    //document.documentElement refers to the root element of an HTML (i.e. -> <html>)
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
