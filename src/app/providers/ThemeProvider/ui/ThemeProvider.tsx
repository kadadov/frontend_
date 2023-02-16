import { type FC, type ReactNode, useMemo, useState } from "react";

import { INITIAL_THEME } from "widgets/SwitcherTheme/contants/contants";
import { ThemeContext } from "widgets/SwitcherTheme/context/ThemeContext";
import { type Theme } from "widgets/SwitcherTheme/types/types";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(INITIAL_THEME);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
