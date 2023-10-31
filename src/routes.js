import Home from 'views/landingPage'
const routes = [
    {
        name: 'Wordpress',
        path: '/',
        element: <Home />,
        subRoutes: [
            {
                name: 'Menu Item 1',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 2',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 3',
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        name: 'Magento',
        path: '/',
        element: <Home />,
        subRoutes: [
            {
                name: 'Menu Item 1',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 2',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 3',
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        name: 'NodeJs',
        path: '/',
        element: <Home />,
        subRoutes: [
            {
                name: 'Menu Item 1',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 2',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 3',
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        name: 'Mobile Apps',
        path: '/',
        element: <Home />,
        subRoutes: [
            {
                name: 'Menu Item 1',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 2',
                path: '/',
                element: <Home />
            },
            {
                name: 'Menu Item 3',
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        name: 'Case Studies',
        path: '/',
        element: <Home />
    },
    {
        name: 'Portfolio',
        path: '/',
        element: <Home />
    },
    {
        name: 'Expert Team',
        path: '/',
        element: <Home />
    }
]
export default routes