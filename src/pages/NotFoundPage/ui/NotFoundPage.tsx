import { type FC } from "react";
import { useTranslation } from "react-i18next";

const NotFoundPage: FC = () => {
    const { t } = useTranslation("NotFountPage");

    return <div>{t("404 страница не найдена")}</div>;
};

export default NotFoundPage;
