import { Link, useRouteError } from 'react-router-dom';
import errorFixingImg from '../assets/error_fixing.png';
import error404Img from '../assets/error_404.png';
import MainLayout from "../layouts/MainLayout.jsx";

function ErrorPage() {
    const error = useRouteError();

    let title = 'Unknown Error';
    let message = "An unknown error occurred! We're fixing it.";
    let image = errorFixingImg;

    if (error.status === 500) {
        title = 'Something went wrong';
        message = 'Please try again later';
    }

    if (error.status === 404) {
        title = 'Not found !';
        message = 'Sorry, we could not find what you are looking for.';
        image = error404Img;
    }

    return (
        <div className="flex flex-col w-full h-[100vh] py-20 gap-6 bg-primary bg-opacity-20 text-primary justify-start items-center">
            <h2 className="font-bold text-6xl ">{title}</h2>
            <img src={image} alt="error" className="w-48 h-48" />
            <p className="text-base font-extralight">{message}</p>
            <div>
                <Link to={'/'} className="bg-primary text-white text-lg px-3 py-2 rounded-md active:scale-95">
                    Home Page
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
