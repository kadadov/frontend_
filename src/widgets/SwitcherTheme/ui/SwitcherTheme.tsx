import { useTheme } from "app/providers/ThemeProvider"
import { type ReactElement } from "react"
import { Icon } from "./Icon"
import cls from "./SwitcherTheme.module.scss"

export const SwitcherTheme = (): ReactElement => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            <Icon theme={theme} className={cls.icon} />
        </button>
    )
}
