import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../../config/contants";
import { Theme, ThemeContext } from "../../ui/ThemeContext";
import { saveTheme } from "../saveTheme";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const themeNew = Theme.LIGHT === theme ? Theme.DARK : Theme.LIGHT;

    setTheme(themeNew);
    saveTheme(themeNew);
  };

  return {
    theme,
    toggleTheme,
  };
};
