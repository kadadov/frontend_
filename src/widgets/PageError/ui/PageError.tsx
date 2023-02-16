import { type FC } from "react";
import { useTranslation } from "react-i18next";

import cls from "./PageError.module.scss";

export const PageError: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.wrap}>
            <div className={cls.title}>{t("Опа, еще артефактик!")}</div>
        </div>
    );
};
