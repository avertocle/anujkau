import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Navigate replace to="/"/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
        ],
    },
]);


export default App
