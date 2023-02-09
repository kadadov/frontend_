import { LOCAL_STORAGE_THEME_KEY } from "../config/contants"
import { type Theme } from "../ui/ThemeContext"

export const saveTheme = (theme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
}
