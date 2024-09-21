import {Link, useNavigate} from "react-router-dom";
import {ContactEmail} from "../config/AppConfig.js";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4 p-4 w-full items-center justify-center">
            <Link
                className="px-4 py-2 rounded-md bg-accent text-white ml-auto"
                to={`mailto:${ContactEmail}`}>
                Contact Us
            </Link>
        </div>
    );
};

export default NavBar;
