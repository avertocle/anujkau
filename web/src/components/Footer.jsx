import {AppVersion} from '../config/AppConfig.js';
import {SiCloudflare, SiGithub, SiReact, SiTailwindcss, SiVite} from "react-icons/si";
import ContactData from "../assets/content/contact.json";


const Footer = () => {
    return (
        <div className="flex gap-4 w-full p-2 items-center text-white bg-primary">
            <MadeWithPanel/>
            <VersionPanel/>
        </div>
    );
};

export default Footer;

function MadeWithPanel() {
    return (
        <div className="flex gap-2 w-full justify-center items-center text-white text-xs">
            <div className="flex gap-2">
                <p className="">{'Cooked with'}</p>
                <SiReact className=""/>
                <SiTailwindcss className=""/>
                <SiVite className=""/>
            </div>
            <div className="flex mx-4 px-4 gap-2 border-x">
                <p className="">{'Served with'}</p>
                <SiCloudflare className=""/>
                <p>Cloudflare</p>
            </div>
            <div className="flex gap-2">
                <p className="">{'Recipe at'}</p>
                <a href={ContactData.repo.url} target={"_blank"}>
                    <SiGithub className=""/>
                </a>
            </div>
        </div>
    );
}

function VersionPanel() {
    return (
        <div className="flex gap-2 w-fit justify-center items-center text-white text-xs">
            <p className="">{'v' + AppVersion}</p>
        </div>
    );
}