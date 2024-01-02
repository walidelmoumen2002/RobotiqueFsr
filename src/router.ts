import 'react';
import {
    createBrowserRouter,
} from 'react-router-dom';
import Root from '@routes/root';
import Home from '@routes/home';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home,
            }
        ],
    }
])

export default router
