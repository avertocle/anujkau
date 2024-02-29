import {GetBgByThemeColor, GetHeaderBgByThemeColor, GetTextByThemeColor} from "../CompanyThemeHelpers.jsx";
import {SvgIcon} from "../SmallCommons.jsx";
import CompanyLogos from "../../assets/companies/CompanyImages.js";

export function JobPanelCollapsed(props) {
    let data = props.data
    let content = props.data.content
    let theme = props.data.content.theme
    return (
        <JobPanelLayout data={data} theme={theme}>
            <JobIntroSection content={content} isCollapsed={true}/>
        </JobPanelLayout>
    )
}

export function JobPanelLayout(props) {
    let isCollapsed = props.data.isCollapsed
    let time = props.data.content.time
    let theme = props.theme
    let bgColor = GetBgByThemeColor(props.theme.color)
    let onClickExpand = props.data.handlers.toggle_collapsed
    return (
        <div className="flex flex-col w-full">
            <JobTimeChip time={time} theme={theme}/>
            <div className={`flex flex-col w-full p-4 gap-4 rounded-md ${bgColor}`}>
                {props.children}
                <JobExpandChip isCollapsed={isCollapsed} theme={theme} onClick={onClickExpand}/>
            </div>
        </div>
    )
}

export function JobIntroSection({content, isCollapsed}) {
    let text = isCollapsed ? content.short_desc.text : content.long_desc.text
    return (
        <div className="flex flex-col gap-2">
            <JobHeaderSection content={content} theme={content.theme}/>
            <p className="flex w-full text-start text-content mt-2">{text}</p>
        </div>
    )
}

export function JobHeaderSection({content, theme}) {
    return (
        <div className="flex gap-4 w-full justify-between">
            <div>
                <p className={`flex ${theme.text} text-lg`}>{content.company.name}</p>
                <div className="flex gap-4 font-extralight italic text-xs">
                    <p>{content.company.location}</p>
                    <p>{content.progression.join(' / ')}</p>
                </div>
            </div>
            <div className="flex items-end">
                <SvgIcon
                    src={CompanyLogos[content.company.logo]}
                    alt={'logos'}
                    className={`flex max-w-30 max-h-8 rounded-md`}/>
            </div>
        </div>
    )
}

export function JobSectionLayout({title, children, theme}) {
    let bgColor = GetBgByThemeColor(theme.color)
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className={`flex flex-col gap-4 py-2 w-full justify-center items-center`}>
            <p className={`w-full text-center px-2 ${textColor}`}>~ {title} ~</p>
            {children}
        </div>
    )
}

function JobExpandChip({isCollapsed, theme, onClick}) {
    let bgColor = GetBgByThemeColor(theme.color)
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className="flex mt-auto w-full justify-center  cursor-pointer"
             onClick={onClick}
        >
            <div className={`flex w-fit px-4 py-1 ${bgColor} ${textColor} rounded-md`}>
                <p>{isCollapsed ? "... More ..." : "... Less ..."}</p>
            </div>
        </div>
    )
}

function JobTimeChip({time, theme}) {
    let bgColor = GetHeaderBgByThemeColor(theme.color)
    return (
        <div className="flex w-full justify-end">
            <div
                className={`flex w-fit px-4 py-1 justify-between ${bgColor} rounded-t-md text-white text-xs`}>
                <div className={"mr-10"}>
                    <p>{time.duration}</p>
                </div>
                <div className="flex gap-2">
                    <p>{time.start}</p>
                    <p>-</p>
                    <p>{time.end}</p>
                </div>
            </div>
        </div>
    )
}

