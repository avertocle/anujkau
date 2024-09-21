import ResumeHeader from "../components/ResumeHeader.jsx";
import ResumeData from '../../assets/content/resume.json';
import {Designation, Duration, filterByKeys, Heading, ListItem, Text} from '../components/Commons.jsx';

const HomePage = () => {
    return (
        <div
            className="flex flex-col w-full h-full items-center justify-center text-justify">
            <div className="flex flex-col gap-2 w-full max-w-[900px] h-[calc(100vh-20px)] bg-white p-6
                overflow-auto scrollbar scrollbar-thumb-primary-600/30">
                <div className="flex h-fit px-2">
                    <ResumeHeader/>
                </div>
                <div className="min-h-[1px] bg-primary-600 mb-2"/>
                <div className="flex flex-col gap-1 h-fit px-2 mb-1">
                    <Heading value="References"/>
                    <Text value={ResumeData.references}/>
                </div>
                <div className="flex flex-col gap-4 h-fit px-2">
                    <div className="flex flex-col gap-2">
                        <CompanyHeader companyData={ResumeData.companies.byteswan}/>
                        <Text value={ResumeData.companies.byteswan.description}/>
                        {Object.values(ResumeData.companies.byteswan.sub_companies)
                            .map((sc, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <SubCompanyHeader companyData={sc}/>
                                    <Text value={sc.description}/>
                                </div>))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {filterByKeys(ResumeData.companies, ['moonfrog', 'proptiger'])
                            .map((c, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <CompanyHeader companyData={c}/>
                                    <p className="font-light italic">{`Stack : ${c.stack}`}</p>
                                    <div className="flex flex-col gap-1">
                                        {c.descriptions.map((d, i) => <ListItem key={i}
                                                                                value={d}/>)}
                                    </div>
                                </div>))}
                        {filterByKeys(ResumeData.companies, ['exarb', 'citrix'])
                            .map((c, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <CompanyHeader companyData={c}/>
                                    <p className="font-light italic">{`Stack : ${c.stack}`}</p>
                                    <Text value={c.description}/>
                                </div>))}
                    </div>
                </div>
                <div className="min-h-[1px] bg-primary-600 my-2"/>
            </div>
        </div>
    );
};

const CompanyHeader = ({companyData}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-1 w-full">
            <div className="flex gap-1">
                <Heading value={`${companyData.name}, ${companyData.location} - `}/>
                <Designation titles={companyData.titles}/>
            </div>
            <div className="sm:ml-auto">
                <Duration value={companyData.duration}/>
            </div>
        </div>
    )
}

const SubCompanyHeader = ({companyData}) => {
    return (
        <div className="flex gap-1 w-full">
            <p className="font-semibold">{`${companyData.name}`}
                <span className="font-normal">{` | ${companyData.domain}`}</span>
            </p>
            <div className="ml-auto">
                <Duration value={companyData.duration}/>
            </div>
        </div>
    )
}


export default HomePage;
