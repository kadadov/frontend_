import { type ReactElement } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "../config/router"

export const AppRouter = (): ReactElement => {
    return <RouterProvider router={router} />
}
