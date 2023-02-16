import { lazy } from "react";

import { dealy } from "shared/lib/dealy";

export const MainPageAsync = lazy(
    async () => await dealy().then(async () => await import("./MainPage"))
);
