import PlaceholderPanel from "../components/PlaceholderPanel.jsx";

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <HomeIntro/>
            <SocialsPanel/>
        </div>
    );
};

export default HomePage;


function HomeIntro() {
    return <PlaceholderPanel heading="Home Page Intro"
                             message="this is a placeholder for Home page intro"/>
}

function SocialsPanel() {
    return <PlaceholderPanel heading="Socials Panel"
                             message="this is a placeholder for Socials Panel"/>
}

