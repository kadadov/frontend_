import React, { type FC } from "react";

import { BoundaryProvider } from "app/providers/BoundaryProvider";
import { AppRouter } from "app/providers/RouterProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const AppProvider: FC = () => {
    return (
        <div>
            <BoundaryProvider>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </BoundaryProvider>
        </div>
    );
};
