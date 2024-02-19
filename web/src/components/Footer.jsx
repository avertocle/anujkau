import {AppVersion} from '../config/AppConfig.js';

const Footer = () => {
    return (
        <div className="flex gap-4 w-full p-2 items-center text-white border-t border-primary">
            <div className="flex gap-1 ml-auto">
                <p className="font-extralight text-xs text-primary">{'v' + AppVersion}</p>
            </div>
        </div>
    );
};


export default Footer;
