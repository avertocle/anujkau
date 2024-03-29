import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import PlaceholderPanel from '../components/PlaceholderPanel.jsx';
import ContactData from '../assets/content/contact.json';
import { SectionLayout } from '../components/common/SectionLayout.jsx';

function HomePage() {
  return (
    <div className="flex flex-col gap-10 w-full pt-2 px-4">
      <HomeIntro />
      <div className="flex gap-6">
        <HomeIntro />
        <HomeIntro />
      </div>
      <div className="flex w-full">
        <SocialsPanel />
      </div>
    </div>
  );
}

export default HomePage;

function HomeIntro() {
  return (
    <PlaceholderPanel
      heading="Home Page Intro"
      message="this is a placeholder for Home page intro"
    />
  );
}

function SocialsPanel() {
  return (
    <SectionLayout title="Socials">
      <div className="flex gap-10 w-full justify-center text-primary py-4">
        <SocialCard
          icon={<SiLinkedin className="flex h-full w-full" />}
          text={ContactData.linkedin.username}
          link={ContactData.linkedin.url}
        />
        <SocialCard
          icon={<SiGmail className="flex h-full w-full" />}
          text={ContactData.email.display}
          link={`mailto:${ContactData.email.url}`}
        />
        <SocialCard
          icon={<SiGithub className="flex h-full w-full" />}
          text={ContactData.github.username}
          link={ContactData.github.url}
        />
      </div>
    </SectionLayout>
  );
}

function SocialCard({ icon, text, link }) {
  return (
    <div
      className="flex flex-col items-center gap-0.5 lg:gap-2 p-1 lg:p-2 cursor-pointer hover:bg-accent hover:bg-opacity-20 rounded-md"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex w-10 h-8 text-accent">
        {icon}
      </div>
      <p className="flex items-end pb-0.5 text-xs">{text}</p>
    </div>
  );
}
