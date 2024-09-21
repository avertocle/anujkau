import {Link} from "react-router-dom";
import ResumeData from '../../assets/content/resume.json';

const ResumeHeader = () => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1 justify-end">
                <h1 className="text-2xl text-primary-600">{ResumeData.name}</h1>
                <p className="font-semibold">
                    {ResumeData.college},
                    <span className="pl-2 font-normal">{ResumeData.course}</span>
                </p>
            </div>
            <div className="flex flex-col gap-1 items-end justify-end">
                <p>{ResumeData.contact.email}</p>
                <p>{ResumeData.contact.phone}</p>
                <p className="flex gap-2">
                    <Link className="text-blue-600" to={ResumeData.contact.linkedin}>LinkedIn</Link>
                    <Link className="text-blue-600" to={ResumeData.contact.github}>Github</Link>
                </p>
            </div>
        </div>
    )
}

export default ResumeHeader;
