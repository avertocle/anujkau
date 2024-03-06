import {JobIntroSection, JobPanelCollapsed, JobPanelLayout, JobSectionLayout,} from './BaseJobPanels.jsx';
import WorkSummaryPanel from './WorkSummaryPanel.jsx';
import ReferencesPanel from './ReferencesPanel.jsx';
import {useState} from "react";

export function RegularJobPanel({content, canExpandInPlace, isCollapsedOrig, onClickSelect}) {
    const [isCollapsed, setIsCollapsed] = useState(isCollapsedOrig);

    function handleToggleCollapsed() {
        console.log('toggling collapsed');
        setIsCollapsed(!isCollapsed);
    }

    let childData = {
        content: content,
        isCollapsed: isCollapsed,
        onClickSelect: onClickSelect,
        onToggleCollapsed: handleToggleCollapsed,
        canExpandInPlace: canExpandInPlace,
    }

    return (
        isCollapsed
            ? <JobPanelCollapsed {...childData} />
            : <RegularJobPanelExpanded {...childData} />
    );
}

function RegularJobPanelExpanded({content, onToggleCollapsed, onClickSelect, canExpandInPlace}) {
    return (
        <JobPanelLayout
            content={content}
            isCollapsed={false}
            onClickSelect={onClickSelect}
            onToggleCollapsed={onToggleCollapsed}
            canExpandInPlace={canExpandInPlace}
        >
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
    );
}
