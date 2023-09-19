import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RouterPaths: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
}

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPage />,
    },
}