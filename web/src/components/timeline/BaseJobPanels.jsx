import {GetBgByThemeColor, GetHeaderStyleByThemeColor, GetTextByThemeColor} from "../CompanyThemeHelpers.jsx";
import {SvgIcon} from "../SmallCommons.jsx";
import CompanyLogos from "../../assets/companies/CompanyImages.js";
import {SiLinkedin} from "react-icons/si";

export function JobPanelCollapsed(props) {
    let data = props.data
    let content = props.data.content
    let theme = props.data.content.theme
    let companyTheme = {...theme}
    return (
        <BaseJobPanelLayout data={data} theme={companyTheme}>
            <div className="flex flex-col gap-4">
                <JobPanelHeader content={content} companyTheme={companyTheme}/>
                <p className="flex w-full text-start text-content mt-2">{content.short_desc.text}</p>
            </div>
        </BaseJobPanelLayout>
    )
}

export function JobPanelHeader({content, companyTheme}) {
    return (
        <div className="flex gap-4 w-full justify-between">
            <div>
                <p className={`flex ${companyTheme.text} text-lg`}>{content.company.name}</p>
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

export function BaseJobPanelLayout(props) {
    let cardTheme = GetBgByThemeColor(props.theme.color)
    return (
        <div
            className="flex flex-col w-full p-4 border-opacity-25 rounded-b-md cursor-pointer"
        >
            <BaseJobPanelHeader data={props.data} theme={props.theme}/>
            <div
                className={`flex flex-col w-full p-4 gap-4 rounded-md cursor-pointer ${cardTheme}`}
                onClick={props.data.handlers.toggle_collapsed}
            >
                {props.children}
            </div>
        </div>
    )
}


function BaseJobPanelHeader({data, theme}) {
    let th = GetHeaderStyleByThemeColor(theme.color)
    return (
        <div className="flex w-full justify-end">
            <div
                className={th}>
                <div className={"mr-10"}>
                    <p>{data.content.time.duration}</p>
                </div>
                <div className="flex gap-2">
                    <p>{data.content.time.start}</p>
                    <p>-</p>
                    <p>{data.content.time.end}</p>
                </div>
            </div>
        </div>
    )
}

export function ReferencesPanel({references}) {
    return (
            <div className='flex flex-col w-full items-center lg:flex-row lg:gap-10 lg:justify-center'>
                {references.map((work, index) => {
                    return <ReferenceCard data={work} key={`reference-${index}`}/>
                })}
            </div>
    )
}

function ReferenceCard(props) {
    let reference = props.data
    return (
        <div className='flex flex-col gap-1 p-2 hover:bg-accent/20 rounded-md'
             onClick={() => window.open(link, '_blank')}
        >
            <div className="flex gap-2 items-center justify-center">
                <SiLinkedin className="flex h-4 w-4 text-blue-700"/>
                <p>{reference.name}</p>
            </div>
            <p className="text-xs font-extralight">{reference.title}</p>
        </div>
    )
}

export function JobSectionLayout({title, children, theme}) {
    let bgColor = GetBgByThemeColor(theme.color)
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className={`flex flex-col gap-4 py-2 w-full justify-center items-center ${bgColor}`}>
            <p className={`w-full text-center px-2 ${textColor}`}>{title}</p>
            {children}
        </div>
    )
}
