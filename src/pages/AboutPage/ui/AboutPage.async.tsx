import { lazy } from "react";

import { dealy } from "shared/lib/dealy";

export const AboutPageAsync = lazy(
    async () => await dealy().then(async () => await import("./AboutPage"))
);
