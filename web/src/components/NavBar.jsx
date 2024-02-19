import {BookmarkIcon, CommandLineIcon, HomeIcon} from "@heroicons/react/24/outline/index.js";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="flex gap-2 w-full p-4 text-white border-b border-primary bg-primary">
            <div className="flex w-full gap-4 justify-center ">
                <NavbarButton
                    title="Bookmarks"
                    icon={<BookmarkIcon className="h-5 w-5 text-white"/>}
                    onClick={() => navigate('/bookmarks')}
                />
                <NavbarButton
                    title="Home"
                    icon={<HomeIcon className="h-5 w-5 text-white"/>}
                    onClick={() => navigate('/')}
                />
                <NavbarButton
                    title="Timeline"
                    icon={<CommandLineIcon className="h-5 w-5 text-white"/>}
                    onClick={() => navigate('/timeline')}
                />
            </div>
        </div>
    );
};

export function NavbarButton({title, icon, onClick}) {
    return (
        <button
            className={`px-3 py-1 rounded-md flex items-center gap-1 hover:scale-95`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );
}

export default NavBar;
