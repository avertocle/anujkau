import {Outlet} from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col lg:w-[60%] h-[calc(100vh)] bg-opacity-0 text-sm">
            <div className="flex w-full h-[80px] pt-2">
                <NavBar/>
            </div>
            <main className="flex w-full mt-10 pr-4 h-[calc(100vh-180px)] overflow-y-scroll bg-">
                <Outlet/>
            </main>
            <div className="flex w-full h-[80px] mt-5 pb-4">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
