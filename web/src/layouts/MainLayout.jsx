import {Outlet} from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col w-[70%] h-[calc(100vh)] bg-white px-20 text-sm">
            <div className="flex w-full h-[100px]">
                <NavBar/>
            </div>
            <main className="flex h-[calc(100vh-150px)] overflow-scroll">
                <Outlet/>
            </main>
            <div className="flex w-full h-[50px] mt-auto">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
