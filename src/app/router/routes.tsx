 // src/routes/routes.ts
import type { RouteObject } from 'react-router-dom'; // Импорт типа из react-router-dom
import { ROUTE_PATHS } from './routesPath';
import { LoginPage } from '@pages/login/login';
import { Home } from '@pages/homePage/home';
import { SingUpPage } from '@pages/singUp';

// Определяем тип для маршрута с мета-информацией
interface RouteMeta {
    title?: string;
    description?: string;
}

interface AppRoute extends Omit<RouteObject, 'children'> {
    meta?: RouteMeta;
}

// Массив маршрутов
export const routes: AppRoute[] = [
    {
        path: ROUTE_PATHS.HOME,
        element: <Home/>,
        meta: {title: 'home page'}
    },
    {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage/>,
        meta: {title: 'login page'},
    },
    {
        path: ROUTE_PATHS.SINGUP,
        element: <SingUpPage/>,
        meta: {title: 'login page'},
    }
    // Добавь новые маршруты сюда, например:
    // {
    //   path: ROUTE_PATHS.CONTACT,
    //   element: <Contact />,
    //   meta: { title: 'Контакты' },
    // },
];