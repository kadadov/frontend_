import { useTranslation } from "react-i18next"
import IconRussia from "shared/assets/icons/flag-russia.svg"
import IconUSA from "shared/assets/icons/flag-usa.svg"
import cls from "./SwitcherLanguage.module.scss"

export const SwitcherLanguage = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <button onClick={toggleLanguage}>
      {i18n.language !== "ru"
        ? (
          <IconRussia className={cls.icon} />
          )
        : (
          <IconUSA className={cls.icon} />
          )}
    </button>
  )
}
