import ResumeHeader from "../components/ResumeHeader.jsx";
import ResumeData from '../../assets/content/resume.json';

const HomePage = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col gap-2 w-[60%] h-full bg-white p-6">
                <div className="flex h-fit px-2">
                    <ResumeHeader/>
                </div>
                <div className="h-[1px] bg-primary-600 mb-2"/>
                <div className="flex gap-2 h-fit px-2">
                    <Heading value="References :"/>
                    <Text value={ResumeData.references}/>
                </div>
                <div className="flex h-fit px-2">
                    <CompanyHeader companyData={ResumeData.companies.byteswan}/>
                </div>
            </div>
        </div>
    );
};

const CompanyHeader = ({companyData}) => {
    return (
        <div className="flex gap-1 w-full">
            <Heading value={`${companyData.name}, ${companyData.location} - `}/>
            <Designation titles={companyData.titles}/>
            <div className="ml-auto">
                <Duration value={companyData.duration}/>
            </div>
        </div>
    )
}


export default HomePage;

const Text = ({value}) => {
    return <p>
        {value}
    </p>
}

const Heading = ({value}) => {
    return <p className="text-primary-600 font-semibold">
        {value}
    </p>
}

const Designation = ({titles}) => {
    return <p className="font-semibold">
        {titles.length > 1 ? `${titles[0]} → ${titles[1]}` : `${titles[0]}`}
    </p>
}

const Duration = ({value}) => {
    return <p className="font-light italic">
        {value}
    </p>
}

const ListItem = ({icon, text}) => {
    return (
        <div
            className="flex flex-col md:w-48 gap-2 p-4 items-center bg-primary-600 rounded-md">
            {icon}
            <p className="flex text-sm font-normal text-white text-center">{text}</p>
        </div>
    );
}
