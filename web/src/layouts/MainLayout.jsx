import {Outlet} from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col w-[70%] h-[calc(100vh-10px)] bg-white">
            <div className="flex w-full">
                <NavBar/>
            </div>
            <main className="flex h-full">
                <Outlet/>
            </main>
            <div className="flex w-full mt-auto">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
