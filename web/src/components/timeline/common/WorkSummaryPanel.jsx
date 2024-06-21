import {GetBgByThemeColor, GetTextByThemeColor} from '../CompanyThemeHelpers.jsx';
import {AiFillAccountBook} from "react-icons/ai";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

export default function WorkSummaryPanel(props) {
    return (
        <div className="flex flex-col w-full py-1 gap-2">
            {props.works.map((work, index) => <WorkCard work={work} theme={props.theme} key={`work-${index}`}/>)}
        </div>
    );
}

function WorkCard({work, theme}) {
    const bgColor = GetBgByThemeColor(theme.color);
    const textColor = GetTextByThemeColor(theme.color);
    return (
        <div className={`flex gap-1 p-1 items-start ${bgColor} rounded-md`}>
            <div className="flex w-6 h-full pt-1 items-start ">
                <HiOutlineArrowRightCircle className="stroke-neutral-500"/>
            </div>
            <p className="flex w-full font-light items-start">{work.text}</p>
        </div>
    );
}
