import PlaceholderPanel from "../components/PlaceholderPanel.jsx";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si";
import ContactData from "../assets/content/contact.json";

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <HomeIntro/>
            <div className="flex w-full border-t border-primary border-opacity-25 mt-auto">
                <SocialsPanel/>
            </div>
        </div>
    );
};

export default HomePage;


function HomeIntro() {
    return <PlaceholderPanel heading="Home Page Intro"
                             message="this is a placeholder for Home page intro"/>
}

function SocialsPanel() {
    return (
        <div className="flex py-6 gap-10 w-full justify-center text-primary">
            <SocialCard
                icon={<SiLinkedin className="flex h-full w-full"/>}
                text={ContactData.linkedin.username}
                link={ContactData.linkedin.url}
            />
            <SocialCard
                icon={<SiGithub className="flex h-full w-full"/>}
                text={ContactData.github.username}
                link={ContactData.github.url}
            />
            <SocialCard
                icon={<SiGmail className="flex h-full w-full"/>}
                text={ContactData.email.display}
                link={`mailto:${ContactData.email.url}`}
            />
        </div>
    )
}

function SocialCard({icon, text, link}) {
    return (
        <div
            className="flex py-2 px-4 gap-2 cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-md"
            onClick={() => window.open(link, '_blank')}
        >
            <div className="flex w-10 h-8">
                {icon}
            </div>
            <p className="flex items-end text-content">{text}</p>
        </div>
    );
}

