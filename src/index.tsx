import { createRoot } from "react-dom/client"
import { App } from "app/App"
import "shared/config/i18n/i18n"
import "app/styles/index.css"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App />)
