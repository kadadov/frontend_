import { LOCAL_STORAGE_THEME_KEY } from "../contants/contants";
import { type Theme } from "../types/types";

export const loadTheme = (): string => {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
};
