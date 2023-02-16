import { type FC, Suspense } from "react";

import { Loader } from "shared/ui/Loader";
import { Navbar } from "widgets/Navbar";
import { SwitcherLanguage } from "widgets/SwitcherLanguage";
import { SwitcherTheme } from "widgets/SwitcherTheme";

import { AboutPageAsync } from "./AboutPage.async";

export const AboutPageContainer: FC = () => {
    return (
        <>
            <Navbar />
            <SwitcherLanguage />
            <SwitcherTheme />
            <Suspense fallback={<Loader />}>
                <AboutPageAsync />
            </Suspense>
        </>
    );
};
