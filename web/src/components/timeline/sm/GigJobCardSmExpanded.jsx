import {GetBgByThemeColor, GetBorderByThemeColor, GetHeaderBgByThemeColor} from "../CompanyThemeHelpers.jsx";
import {JobSectionLayout} from "../common/JobLayouts.jsx";
import WorkSummaryPanel from "../common/WorkSummaryPanel.jsx";
import ReferencesPanel from "../common/ReferencesPanel.jsx";
import {SvgIcon} from "../../SmallCommons.jsx";
import CompanyLogos from "../../../assets/companies/CompanyImages.js";

function GigJobCardSmExpanded(props) {
    const data = props.data
    const {time, theme, progression, works, references, long_desc} = data.content;
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
                <div className="flex gap-2 w-fit">
                    <p>{time.start}</p>
                    <p>-</p>
                    <p>{time.end}</p>
                    <p className="px-2 border rounded-lg border-neutral-600">{`${time.duration}`}</p>
                </div>
            </div>
            <div className={`flex flex-col w-full gap-2`}>
                <p className="flex w-full text-justify mb-2">{long_desc.text}</p>
                {!!works.length && <JobSectionLayout title="Work Summary" theme={theme}>
                        <WorkSummaryPanel works={works} theme={theme}/>
                    </JobSectionLayout>
                }
                <JobSectionLayout title="References" theme={theme}>
                    <ReferencesPanel references={references} theme={theme}/>
                </JobSectionLayout>
            </div>
        </div>
    )
        ;
}

export default GigJobCardSmExpanded;
