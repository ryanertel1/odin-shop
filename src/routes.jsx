import App from './App';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home />},
            { path: 'shop', element: <Shop />},
        ],
    },
];

export default routes;