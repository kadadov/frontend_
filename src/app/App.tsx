import { type FC } from "react";

import { ThemeProvider } from "app/providers/ThemeProvider";

import { AppRouter } from "./providers/RouterProvider";

export const App: FC = () => {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    );
};
