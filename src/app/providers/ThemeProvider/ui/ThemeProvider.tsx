import { type FC, type ReactNode, useMemo, useState } from "react"
import { INITIAL_THEME } from "../config/contants"
import { type Theme, ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
