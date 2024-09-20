import {AppVersion} from '../config/AppConfig.js';

const NavBar = () => {
    return (
        <div className="flex gap-4 w-full p-2 items-center">
            <div className="flex gap-1 ml-auto">
                <p className="font-extralight">{'v' + AppVersion}</p>
            </div>
        </div>
    );
};


export default NavBar;
