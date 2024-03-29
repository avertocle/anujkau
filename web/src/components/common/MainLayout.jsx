import {Outlet} from 'react-router-dom';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

function MainLayout() {
    return (
        <div
            className="flex flex-col lg:w-[85%] xl:w-[75%] 2xl:w-[70%] h-[calc(100vh)] bg-opacity-0 text-sm">
            <div className="flex w-full h-[80px] pt-2">
                <NavBar/>
            </div>
            <main className="flex w-full mt-10 h-[calc(100vh-180px)]">
                <Outlet/>
            </main>
            <div className="flex w-full h-[80px] mt-5 pb-4">
                <Footer/>
            </div>
        </div>
    );
}

export default MainLayout;
