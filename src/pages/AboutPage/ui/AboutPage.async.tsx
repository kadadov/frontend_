import { lazy } from "react"
import { dealy } from "shared/lib/dealy"

export const AboutPageAsync = lazy(async () =>
    dealy().then(() => import("./AboutPage")),
)
