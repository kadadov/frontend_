import { AppRouter } from "./providers/RouterProvider"
import { ThemeProvider } from "app/providers/ThemeProvider"

export const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
