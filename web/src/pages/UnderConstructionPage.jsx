import underConsImg from '../assets/under_construction.png';
import { Link } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout.jsx";

const UnderConstructionPage = () => {
    return (
                <div className="flex flex-col gap-6 items-center w-full py-16 text-primary ">
                    <h2 className="font-extrabold text-4xl ">Under Construction</h2>
                    <div className="">
                        <img src={underConsImg} alt="Under Construction" className="w-48 h-48" />
                    </div>
                    <p className="text-lg font-extralight">
                        This page is under construction. Please visit after some time.
                    </p>
                    <div className="">
                        <Link to={'/'} className="bg-accent text-primary px-3 py-2 rounded-md active:scale-95">
                            Home Page
                        </Link>
                    </div>
                </div>
    );
};

export default UnderConstructionPage;
