import {useState} from "react";
import {SvgIcon} from "./SmallCommons.jsx";
import CompanyLogos from "../assets/companies/CompanyImages.js"
import {GetHeaderStyleByThemeColor} from "./CompanyThemeHelpers.jsx";

function TimelinePanel(props) {
    const [collapsed, setCollapsed] = useState(true)

    function toggleCollapsed() {
        setCollapsed(!collapsed)
    }

    let childData = {
        content: props.data,
        handlers: {
            toggle_collapsed: toggleCollapsed
        }
    }

    return (
        <div className="flex w-full">
            {collapsed ? <TimelineCardCollapsed data={childData}/> : <TimelineCardExpanded data={childData}/>}
        </div>
    )
}

export default TimelinePanel;

function TimelineCardExpanded(props) {
    let data = props.data
    let content = props.data.content
    return (
        <TimelineCardLayout data={data} theme={content.theme}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 w-full">
                    <SvgIcon
                        src={CompanyLogos[content.company.logo]}
                        alt={'logos'}
                        className={`flex p-2 w-24 h-12 rounded-md border border-opacity-20`}/>
                    <div>
                        <p className={`flex text-lg`}>{content.company.name}</p>
                        <div className="flex gap-4 font-extralight italic text-xs">
                            <p>{content.company.location}</p>
                            <p>{content.progression.join(' / ')}</p>
                        </div>
                    </div>
                </div>
                <p className="flex w-full text-start text-content mt-2">{content.long_desc.text}</p>
                <WorksPanel works={content.works} />
                <ReferencesPanel references={content.references} />
            </div>
        </TimelineCardLayout>
    )
}

function ReferencesPanel({references}){
   return (
        <div>
            <p>References</p>
            <div className='flex flex-col gap-2 p-4'>
                {references.map((work, index) => {
                    return <ReferenceCard data={work} key={`work-${index}`}/>
                })}
            </div>
        </div>
    )
}

function ReferenceCard(props){
    let reference = props.data
    return (
        <div className='flex flex-col gap-2 p-4'>
            <p>{reference.name}</p>
            <p>{reference.title}</p>
            <p>{reference.linkedin}</p>
        </div>
    )
}

function WorksPanel({works}) {
    return (
        <div className='flex flex-col gap-2 p-4'>
            {works.map((work, index) => {
                return <WorkCard data={work} key={`work-${index}`}/>
            })}
        </div>
    )
}

function WorkCard(props){
    let work = props.data
    return (
        <div className='flex flex-col gap-2 p-4'>
            <p>{work.text}</p>
        </div>
    )

}


function TimelineCardCollapsed(props) {
    let data = props.data
    let content = props.data.content
    let theme = props.data.content.theme
    let companyTheme = { ...theme}
    return (
        <TimelineCardLayout data={data} theme={companyTheme}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 w-full">
                    <SvgIcon
                        src={CompanyLogos[content.company.logo]}
                        alt={'logos'}
                        className={`flex p-2 w-24 h-12 rounded-md border ${companyTheme.border} border-opacity-20`}/>
                    <div>
                        <p className={`flex ${companyTheme.text} text-lg`}>{content.company.name}</p>
                        <div className="flex gap-4 font-extralight italic text-xs">
                            <p>{content.company.location}</p>
                            <p>{content.progression.join(' / ')}</p>
                        </div>
                    </div>
                </div>
                <p className="flex w-full text-start text-content mt-2">{content.short_desc.text}</p>
            </div>
        </TimelineCardLayout>
    )
}


function TimelineCardLayout(props) {
    return (
        <div
            className="flex flex-col w-full p-4 border-opacity-25 rounded-b-md cursor-pointer"
        >
            <TimelineCardHeader data={props.data} theme={props.theme}/>
            <div
                className={`flex flex-col w-full p-4 gap-4 border 
                        ${props.theme.border} ${props.theme.bg} border-opacity-25 rounded-md cursor-pointer`}
                onClick={props.data.handlers.toggle_collapsed}
            >
                {props.children}
            </div>
        </div>
    )
}


function TimelineCardHeader({data, theme}) {
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


