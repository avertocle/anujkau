import {BookmarkIcon, CommandLineIcon, HomeIcon} from "@heroicons/react/24/outline/index.js";
import {useLocation, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    const path = useLocation()

    return (
        <div className="flex gap-2 w-full h-fit p-4 text-primary border-b border-accent border-opacity-50">
            <div className="flex w-full gap-4 justify-center">
                <NavbarButton
                    title="Bookmarks"
                    icon={<BookmarkIcon className="flex h-6 w-6 text-white fill-primary"/>}
                    onClick={() => navigate('/bookmarks')}
                    isActive={path.pathname === '/bookmarks'}
                />
                <NavbarButton
                    title="Home"
                    icon={<HomeIcon className="flex h-5 w-5 text-primary fill-primary"/>}
                    onClick={() => navigate('/')}
                    isActive={path.pathname === '/'}
                />
                <NavbarButton
                    title="Timeline"
                    icon={<CommandLineIcon className="flex h-6 w-6 text-white fill-primary"/>}
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
        style = "border border-opacity-30 border-primary text-base rounded-lg bg-primary/5"
    } else {
        style = "text-xs opacity-70 hover:opacity-100"
    }

    return (
        <button
            className={`flex px-2 py-1 gap-1 items-center ${style}`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );
}

export default NavBar;
