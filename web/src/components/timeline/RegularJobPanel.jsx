import {JobIntroSection, JobPanelLayout, JobSectionLayout} from "./BaseJobPanels.jsx";
import WorkSummaryPanel from "./WorkSummaryPanel.jsx";
import ReferencesPanel from "./ReferencesPanel.jsx";

export function RegularJobPanel(props) {
    let data = props.data
    let content = props.data.content
    let isCollapsed = props.data.isCollapsed
    return (
        <JobPanelLayout data={data} theme={content.theme} isCollapsed={isCollapsed}>
            <div className="flex flex-col w-full gap-4">
                <JobIntroSection content={content} isCollapsed={false}/>
                <JobSectionLayout title="Work Summary" theme={content.theme}>
                    <WorkSummaryPanel works={content.works} theme={content.theme}/>
                </JobSectionLayout>
                <JobSectionLayout title="References" theme={content.theme}>
                    <ReferencesPanel references={content.references} theme={content.theme}/>
                </JobSectionLayout>
            </div>
        </JobPanelLayout>
    )
}

