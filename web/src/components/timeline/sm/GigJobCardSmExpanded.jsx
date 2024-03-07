import {GetBgByThemeColor, GetTextByThemeColor} from "../../CompanyThemeHelpers.jsx";
import {JobDurationChip, JobExpandChip, JobRoleProgressionChip} from "../common/JobComponents.jsx";
import {JobSectionLayout} from "../common/JobLayouts.jsx";
import WorkSummaryPanel from "../common/WorkSummaryPanel.jsx";
import ReferencesPanel from "../common/ReferencesPanel.jsx";
import {SvgIcon} from "../../SmallCommons.jsx";
import CompanyLogos from "../../../assets/companies/CompanyImages.js";

function GigJobCardSmExpanded(props) {
    const data = props.data
    const {time, theme} = data.content;
    const bgColor = GetBgByThemeColor(theme.color);

    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme}/>
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={data.handlers.onClickSelect}>
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex flex-col gap-2">
                            <GigJobHeaderSectionSmExpanded content={content} theme={content.theme}/>
                            <p className="flex w-full text-start text-content mt-2">{text}</p>
                        </div>
                        <JobSectionLayout title="Work Summary" theme={content.theme}>
                            <WorkSummaryPanel works={content.works} theme={content.theme}/>
                        </JobSectionLayout>
                        <JobSectionLayout title="References" theme={content.theme}>
                            <ReferencesPanel references={content.references} theme={content.theme}/>
                        </JobSectionLayout>
                    </div>
                </div>
                <JobExpandChip
                    isCollapsed={isCollapsed}
                    theme={theme}
                    onClick={onToggleCollapsed}
                />
            </div>
        </div>
    );
}

export default GigJobCardSmExpanded;

function GigJobHeaderSectionSmExpanded({content, theme}) {
    const textColor = GetTextByThemeColor(theme.color);
    return (
        <div className="flex gap-4 w-full justify-between">
            <div className="flex flex-col gap-1">
                <p className={`flex ${textColor} text-lg`}>{content.company.name}</p>
                <div className="flex gap-4 font-extralight text-xs">
                    <JobRoleProgressionChip progression={content.progression} theme={theme}/>
                    <p>{content.company.location}</p>
                </div>
            </div>
            <div className="flex items-end">
                <SvgIcon
                    src={CompanyLogos[content.company.logo]}
                    alt="logos"
                    className="flex max-w-30 max-h-8 rounded-md"
                />
            </div>
        </div>
    );
}
