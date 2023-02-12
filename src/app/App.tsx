import { AppRouter } from "./providers/RouterProvider"
import { ThemeProvider } from "app/providers/ThemeProvider"
import { type ReactElement, type FC } from "react"

export const App: FC = (): ReactElement => {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    )
}
