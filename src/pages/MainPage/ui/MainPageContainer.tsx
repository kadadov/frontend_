import { Suspense, type FC } from "react";

import { Loader } from "shared/ui/Loader";
import { Navbar } from "widgets/Navbar";
import { SwitcherLanguage } from "widgets/SwitcherLanguage";
import { SwitcherTheme } from "widgets/SwitcherTheme";

import { MainPageAsync } from "./MainPage.async";

export const MainPageContainer: FC = () => {
    return (
        <>
            <Navbar />
            <SwitcherLanguage />
            <SwitcherTheme />
            <Suspense fallback={<Loader />}>
                <MainPageAsync />
            </Suspense>
        </>
    );
};
