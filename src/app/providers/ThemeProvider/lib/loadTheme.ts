import { LOCAL_STORAGE_THEME_KEY } from "../config/contants"
import { type Theme } from "../ui/ThemeContext"

export const loadTheme = (): string => {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
}
