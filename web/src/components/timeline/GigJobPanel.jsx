import {
    JobExpandChip,
    ProgressionChip
} from "./BaseJobPanels.jsx";
import {ReferenceCard} from "./ReferencesPanel.jsx";
import {
    GetBgByThemeColor,
    GetHeaderBgByThemeColor,
    GetTextByThemeColor
} from "../CompanyThemeHelpers.jsx";
import {useState} from "react";
import {SvgIcon} from "../SmallCommons.jsx";
import CompanyLogos from "../../assets/companies/CompanyImages.js";

export default function GigJobPanel(props) {
    const [collapsed, setCollapsed] = useState(true)

    function toggleCollapsed() {
        setCollapsed(!collapsed)
    }

    let childData = {
        content: props.data,
        isCollapsed: collapsed,
        handlers: {
            toggle_collapsed: toggleCollapsed
        }
    }

    let content = props.data
    let textColor = GetTextByThemeColor(content.theme.color)
    return (
        <GigPanelLayout data={childData}>
            <div className="flex flex-col gap-6">
                <GigHeaderSection content={content} theme={content.theme}/>
                { !collapsed &&
                    <div className={`flex flex-col w-full gap-2 font-light`}>
                        <p>{content.long_desc.text}</p>
                        <div className='flex flex-col w-full'>
                            {content.works.map((work, index) => {
                                return (<div className={`flex gap-2 items-center rounded-md`} key={`gig-work-${index}`}>
                                    <p className="flex p-0.5 items-center font-light text-sm">{work.text.repeat(3)}</p>
                                </div>)
                            })}
                        </div>
                        <p className={`w-full text-center px-2 ${textColor}`}>References</p>
                        <div className="flex w-full items-center gap-10 justify-center">
                            {content.references.map((reference, index) => {
                                return <ReferenceCard reference={reference} key={`reference-${index}`}/>
                            })}
                        </div>
                    </div>
                }
            </div>
        </GigPanelLayout>
    )
}

function GigPanelLayout(props) {
    let data = props.data
    let content = data.content
    let isCollapsed = data.isCollapsed
    let bgColor = GetBgByThemeColor(content.theme.color)
    let onClickExpand = data.handlers.toggle_collapsed
    return (
        <div className="flex flex-col w-full">
            <GigTimeChip time={content.time} theme={content.theme}/>
            <div className={`flex flex-col w-full p-4 gap-4 rounded-md ${bgColor}`}>
                {props.children}
                <JobExpandChip isCollapsed={isCollapsed} theme={content.theme} onClick={onClickExpand}/>
            </div>
        </div>
    )
}

export function GigSectionLayout({title, children, theme}) {
    let bgColor = GetBgByThemeColor(theme.color)
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className={`flex flex-col gap-4 py-2 w-full justify-center items-center`}>
            {/*<p className={`w-full text-center px-2 ${textColor}`}>~ {title} ~</p>*/}
            {children}
        </div>
    )
}


export function GigIntroSection({content, isCollapsed}) {
    let text = isCollapsed ? content.short_desc.text : content.long_desc.text
    return (
        <div className="flex flex-col gap-2">
        </div>
    )
}

export function GigHeaderSection({content, theme}) {
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className="flex gap-4 w-full justify-between">
            <div className="flex flex-col gap-1">
                <p className={`flex ${textColor} text-lg`}>{content.company.name}</p>
                <div className="flex gap-4 font-extralight italic text-xs">
                    <ProgressionChip progression={content.progression} theme={theme}/>
                    <GigCommitmentChip text={content.company.commitment}/>
                    <p>{content.company.location}</p>
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

function GigCommitmentChip({text}){
    return (
        <div className="">
            <p>{text}</p>
        </div>
    )
}



export function GigTimeChip({time, theme}) {
    let bgColor = GetHeaderBgByThemeColor(theme.color)
    let textColor = GetTextByThemeColor(theme.color)
    return (
        <div className="flex w-full justify-end">
            <div
                className={`flex w-fit px-4 py-1 ${bgColor} ${textColor} bg-opacity-20  rounded-t-md text-xs`}>
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
