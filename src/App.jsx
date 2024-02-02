import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import {authCheckLoader} from "./utils/UserData.js";
import ListingPage from "./pages/ListingPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {

    return (
        <RouterProvider router={router} />
    )
}

function Logout() {
    return null;
}

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate replace to="/auth/login" />,
            },
            {
                path: '/auth/login',
                element: <LoginPage />,
            },
            {
                path: '/auth/logout',
                element: <Logout />,
            },
        ],
    },
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        id: 'rootRoute',
        loader: authCheckLoader,
        children: [
            {
                index: true,
                element: <Navigate replace to="/questions" />,
            },
            {
                path: '/questions',
                element: <ListingPage />,
            },
            {
                path: '/question/:questionSlug',
                element: <DetailsPage />,
            },
        ],
    },
]);


export default App
