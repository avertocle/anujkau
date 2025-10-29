import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col w-full h-screen text-neutral-700 text-xs font-normal">
            <main className="flex w-full h-full">
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;
