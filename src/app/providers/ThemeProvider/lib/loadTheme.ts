import { LOCAL_STORAGE_THEME_KEY } from "../config/contants";
import { Theme } from "../ui/ThemeContext";

export const loadTheme = (): Theme | null => {
  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
};
