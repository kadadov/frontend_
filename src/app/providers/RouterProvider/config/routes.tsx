import { type RouteObject } from "react-router-dom"
import { Layout } from "app/layout"
import { AboutPage, MainPage, NotFoundPage } from "pages"
import { RoutePath } from "shared/config/routeConfig"

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: RoutePath.main,
                element: <MainPage />,
            },
            {
                path: RoutePath.about,
                element: <AboutPage />,
            },
        ],
    },
]
