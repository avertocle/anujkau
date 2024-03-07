import {JobIntroSection,} from './common/JobComponents.jsx';
import WorkSummaryPanel from './common/WorkSummaryPanel.jsx';
import ReferencesPanel from './common/ReferencesPanel.jsx';
import {useState} from "react";
import {JobPanelLayout, JobSectionLayout} from "./common/JobLayouts.jsx";

function RegularJobCard({content, canExpandInPlace, isCollapsedOrig, onClickSelect}) {
    const [isCollapsed, setIsCollapsed] = useState(isCollapsedOrig);

    function handleToggleCollapsed() {
        console.log('toggling collapsed');
        setIsCollapsed(!isCollapsed);
        onClickSelect();
    }

    let childData = {
        content: content,
        isCollapsed: isCollapsed,
        onClickSelect: handleToggleCollapsed,
        canExpandInPlace: canExpandInPlace,
    }

    if (!isCollapsed && canExpandInPlace) {
        return <RegularJobCardExpanded {...childData} />
    } else {
        return <RegularJobCardCollapsed {...childData} />
    }
}

export default RegularJobCard;

function RegularJobCardExpanded({content, onToggleCollapsed, onClickSelect, canExpandInPlace}) {
    return (
        <JobPanelLayout
            content={content}
            onClickSelect={onClickSelect}
            isCollapsed={false}
            onToggleCollapsed={onToggleCollapsed}
            canExpandInPlace={true}
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

export function RegularJobCardCollapsed({content, onClickSelect, onToggleCollapsed, canExpandInPlace}) {
    return (
        <JobPanelLayout
            content={content}
            isCollapsed={true}
            onClickSelect={onClickSelect}
            onToggleCollapsed={onToggleCollapsed}
            canExpandInPlace={canExpandInPlace}>
            <JobIntroSection content={content} isCollapsed={true}/>
        </JobPanelLayout>
    );
}
