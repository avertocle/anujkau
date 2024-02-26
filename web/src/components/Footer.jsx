import {AppVersion} from '../config/AppConfig.js';
import {SiCloudflare, SiGithub, SiReact, SiTailwindcss, SiVite} from "react-icons/si";
import ContactData from "../assets/content/contact.json";


const Footer = () => {
    return (
        <div
            className="flex gap-4 w-full p-2 items-center text-content text-opacity-70 text-xs border-t border-content border-opacity-30">
            <MadeWithPanel/>
        </div>
    );
};

export default Footer;

function MadeWithPanel() {
    return (
        <div className="grid grid-cols-4 w-full divide-x divide-content">
            <MadeWithPanelTile title="Cooked with">
                <SiReact className=""/>
                <SiTailwindcss className=""/>
                <SiVite className=""/>
            </MadeWithPanelTile>
            <MadeWithPanelTile title="Served with">
                <SiCloudflare className=""/>
            </MadeWithPanelTile>
            <MadeWithPanelTile title="Recipe at">
                <a href={ContactData.repo.url} target={"_blank"}>
                    <SiGithub className=""/>
                </a>
            </MadeWithPanelTile>
            <MadeWithPanelTile title="Version">
                <p className="">{AppVersion}</p>
            </MadeWithPanelTile>
        </div>
    );
}

function MadeWithPanelTile({title, children}) {
    return (<div className="flex flex-col gap-1 items-center">
        <p className="">{title}</p>
        <div className="flex gap-2 justify-center">
            {children}
        </div>
    </div>)
}

