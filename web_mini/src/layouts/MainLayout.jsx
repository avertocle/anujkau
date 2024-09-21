import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col w-full h-screen
            {/*bg-gradient-to-t from-primary-600/50*/}
            {/*bg-primary-600/20*/}
            text-neutral-700 text-xs font-normal">
            {/*<div className="flex w-full h-0">*/}
            {/*    <NavBar/>*/}
            {/*</div>*/}
            <main className="flex w-full h-full overflow-auto">
                <Outlet/>
            </main>
            {/*<div className="flex w-full h-0">*/}
            {/*    <Footer/>*/}
            {/*</div>*/}
        </div>
    );
};

export default MainLayout;
