import {BookmarkIcon, CommandLineIcon, HomeIcon} from "@heroicons/react/24/outline/index.js";
import {useLocation, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    const path = useLocation()

    return (
        <div className="flex gap-2 w-full h-fit p-4 text-white bg-primary">
            <div className="flex w-full gap-4 justify-center">
                <NavbarButton
                    title="Bookmarks"
                    icon={<BookmarkIcon className="flex h-5 w-5 text-white"/>}
                    onClick={() => navigate('/bookmarks')}
                    isActive={path.pathname === '/bookmarks'}
                />
                <NavbarButton
                    title="Home"
                    icon={<HomeIcon className="flex h-5 w-5 text-white"/>}
                    onClick={() => navigate('/')}
                    isActive={path.pathname === '/'}
                />
                <NavbarButton
                    title="Timeline"
                    icon={<CommandLineIcon className="flex h-5 w-5 text-white"/>}
                    onClick={() => navigate('/timeline')}
                    isActive={path.pathname === '/timeline'}
                />
            </div>
        </div>
    );
};

export function NavbarButton({title, icon, onClick, isActive}) {
    let style = ""
    if (isActive) {
        style = "text-lg font-semibold"
    } else {
        style = "text-xs"
    }

    return (
        <button
            className={`flex px-4 py-2 gap-1 items-center hover:font-semibold ${style}`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );
}

export default NavBar;
