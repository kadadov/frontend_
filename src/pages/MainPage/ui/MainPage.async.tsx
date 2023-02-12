import { lazy } from "react"
import { dealy } from "shared/lib/dealy"

export const MainPageAsync = lazy(async () =>
    dealy().then(() => import("./MainPage")),
)
