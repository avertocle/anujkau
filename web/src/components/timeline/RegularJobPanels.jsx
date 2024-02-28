import {BaseJobPanelLayout, JobPanelHeader, JobSectionLayout, ReferencesPanel} from "./BaseJobPanels.jsx";
import {SiBuffer, SiLinkedin} from "react-icons/si";
import {GetBgByThemeColor, GetTextByThemeColor} from "../CompanyThemeHelpers.jsx";

export function RegularJobPanelExpanded(props) {
    let data = props.data
    let content = props.data.content
    return (
        <BaseJobPanelLayout data={data} theme={content.theme}>
            <div className="flex flex-col gap-8">
                <JobPanelHeader content={content} companyTheme={content.theme}/>
                <p className="flex w-full text-start text-content mt-2">{content.long_desc.text}</p>
                <JobSectionLayout title="Highlights" theme={content.theme}>
                    <WorksPanel works={content.works} theme={content.theme}/>
                </JobSectionLayout>
                <JobSectionLayout title="References" theme={content.theme}>
                    <ReferencesPanel references={content.references} theme={content.theme}/>
                </JobSectionLayout>
            </div>
        </BaseJobPanelLayout>
    )
}


function WorksPanel(props) {
    return (
        <div className='flex flex-col w-full py-4 gap-4'>
            {props.works.map((work, index) => {
                return <WorkCard data={work} theme={props.theme} key={`work-${index}`}/>
            })}
        </div>
    )
}

function WorkCard(props) {
    let work = props.data
    let bgColor = GetBgByThemeColor(props.theme.color)
    let textColor = GetTextByThemeColor(props.theme.color)
    return (
        <div className={`flex gap-2 p-2 items-center ${bgColor}`}>
            <p className="flex p-0.5 items-center font-light text-sm">{work.text.repeat(3) }</p>
        </div>
    )

}

