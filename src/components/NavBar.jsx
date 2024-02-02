import OHuskyLogo from '../assets/ohusky_logo.png';
import {NavbarButton} from "./SmallCommons.jsx";
import {DefaultIcon} from "./Icons.jsx";
import {AppName, AppSubHeading, AppVersion} from '../config/AppConfig.js';

const NavBar = () => {

    return (
            <div className="flex gap-2 w-full p-2 items-center bg-primary text-white border-b-2 border-accent">
                <img src={OHuskyLogo} alt="" className="w-[40px] h-[40px]" />
                <div className="flex flex-col justify-center">
                    <p className="font-semibold">{AppName}</p>
                    <p className="">{AppSubHeading}</p>
                </div>
                {/*<div className="flex ml-10 gap-4 items-center ">*/}
                {/*    <NavbarButton*/}
                {/*        title="Home"*/}
                {/*        icon={<DefaultIcon size={15} />}*/}
                {/*        onClick={() => navigate('/')}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="flex justify-center items-center gap-4 ml-auto">
                    <p className="font-extralight">{'v' + AppVersion}</p>
                </div>
            </div>
    );
};

export function sanitizeQueryResult(queryResult) {
    return queryResult ? queryResult.data : {};
}

export default NavBar;
