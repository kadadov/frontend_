import { createContext } from "react";

import { type Theme } from "widgets/SwitcherTheme/types/types";

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
