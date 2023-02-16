import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { RoutePath } from "shared/config/routeConfig";

export const Navbar: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <ul>
                <li>
                    <Link to={RoutePath.main}>{t("Главная")}</Link>
                </li>
                <li>
                    <Link to={RoutePath.about}>{t("О нас")}</Link>
                </li>
            </ul>
        </div>
    );
};
