import { createContext } from "react";

const ThemeContext = createContext({
  theme: false,
  toggleTheme: () => {},
});

export default ThemeContext;
