import {GetBgByThemeColor, GetBorderByThemeColor, GetHeaderBgByThemeColor} from "../CompanyThemeHelpers.jsx";
import {SvgIcon} from "../../SmallCommons.jsx";
import CompanyLogos from "../../../assets/companies/CompanyImages.js";

function GigJobCardSmCollapsed(props) {
    const data = props.data
    const {time, theme, progression} = data.content;
    const bgColor = GetBgByThemeColor(theme.color);
    const borderColor = GetBorderByThemeColor(theme.color);
    const progColor = GetHeaderBgByThemeColor(theme.color);
    return (
        <div
            className={`flex flex-col w-full p-2 gap-4 text-xs font-light ${bgColor} border border-opacity-20 ${borderColor} rounded-md`}
            onClick={data.handlers.onGigCardSelect}
        >
            <div className="flex w-full">
                <SvgIcon
                    src={CompanyLogos[data.content.company.logo]}
                    alt={data.content.company.name}
                    className="flex max-w-24 max-h-6 rounded-md"
                />
                <div
                    className={`flex px-2 py-0.5 ${progColor} bg-opacity-20 rounded-md ml-auto items-center`}>
                    <p>{progression.join(' -> ')}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex gap-2 w-fit items-center">
                    <p>{time.start}</p>
                    <p>-</p>
                    <p>{time.end}</p>
                    <p className={`px-2 border rounded-lg ${borderColor} border-opacity-50`}>{`${time.duration}`}</p>
                </div>
            </div>
        </div>
    );
}

export default GigJobCardSmCollapsed;
