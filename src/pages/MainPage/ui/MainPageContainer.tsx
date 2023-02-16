import { Suspense, useEffect, useState, type FC } from "react";

import { Loader } from "shared/ui/Loader";
import { Navbar } from "widgets/Navbar";
import { SwitcherLanguage } from "widgets/SwitcherLanguage";
import { SwitcherTheme } from "widgets/SwitcherTheme";

import { MainPageAsync } from "./MainPage.async";

export const MainPageContainer: FC = () => {
    const [count, setCount] = useState(0);

    const onClick = (): void => {
        setCount((count) => count + 1);
    };

    useEffect(() => {
        if (count === 5) {
            throw new Error("Count Error!");
        }
    }, [count]);

    return (
        <>
            <button onClick={onClick}>{count}</button>
            <Navbar />
            <SwitcherLanguage />
            <SwitcherTheme />
            <Suspense fallback={<Loader />}>
                <MainPageAsync />
            </Suspense>
        </>
    );
};
