import {Outlet} from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col lg:w-[70%] h-[calc(100vh)] bg-opacity-0 text-sm">
            <div className="flex w-full h-[100px]">
                <NavBar/>
            </div>
            <main className="flex w-full h-[calc(100vh-150px)] overflow-scroll">
                <Outlet/>
            </main>
            <div className="flex w-full h-[50px] mt-auto">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
