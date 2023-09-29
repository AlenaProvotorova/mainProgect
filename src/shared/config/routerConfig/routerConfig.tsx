import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const RouterPaths: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    // last route
    [AppRouters.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RouterPaths['not-found'],
        element: <NotFoundPage />,
    },
};
