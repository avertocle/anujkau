import { useState } from 'react';
import { JobIntroSection } from './common/JobComponents';
import WorkSummaryPanel from './common/WorkSummaryPanel';
import ReferencesPanel from './common/ReferencesPanel';
import { JobPanelLayout, JobSectionLayout } from './common/JobLayouts';
import { LayoutTypes } from './common/props';

function RegularJobCard(props) {
    const { data } = props;
    const [cardLayout, setCardLayout] = useState(data.layout);

    function handleCardSelected() {
        if (cardLayout === LayoutTypes.EXPANDED) {
            setCardLayout(LayoutTypes.COLLAPSED);
        } else {
            setCardLayout(LayoutTypes.EXPANDED);
        }
        data.handlers.onClickSelect();
    }

    const childData = {
        content: data.content,
        layout: cardLayout,
        handlers: {
            onClickSelect: handleCardSelected,
        },
    };

    if (cardLayout === LayoutTypes.EXPANDED) {
        return <RegularJobCardExpanded data={childData} />;
    }
    return <RegularJobCardCollapsed data={childData} />;
}

export default RegularJobCard;

function RegularJobCardExpanded(props) {
    const { data } = props;
    const { theme, references, works } = data.content;
    return (
        <JobPanelLayout
            content={data.content}
            onClickSelect={data.handlers.onClickSelect}
        >
            <div className="flex flex-col w-full gap-4">
                <JobIntroSection content={data.content} isCollapsed={false} />
                <JobSectionLayout title="Work Summary" theme={theme}>
                    <WorkSummaryPanel works={works} theme={theme} />
                </JobSectionLayout>
                <JobSectionLayout title="References" theme={theme}>
                    <ReferencesPanel references={references} theme={theme} />
                </JobSectionLayout>
            </div>
        </JobPanelLayout>
    );
}

export function RegularJobCardCollapsed(props) {
    const { data } = props;
    return (
        <JobPanelLayout
            content={data.content}
            onClickSelect={data.handlers.onClickSelect}
        >
            <JobIntroSection content={data.content} isCollapsed />
        </JobPanelLayout>
    );
}
