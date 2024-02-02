import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col w-[70%] h-[calc(100vh-10px)]">
            <div className="flex w-full">
                <NavBar />
            </div>
            <main className="flex ">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
