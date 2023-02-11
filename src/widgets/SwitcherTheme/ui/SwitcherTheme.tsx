import { useTheme } from "app/providers/ThemeProvider"
import { Icon } from "./Icon"
import cls from "./SwitcherTheme.module.scss"

export const SwitcherTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      <Icon theme={theme} className={cls.icon} />
    </button>
  )
}
