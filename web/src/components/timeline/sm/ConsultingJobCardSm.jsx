import {useState} from "react";
import {JobSectionLayout} from "../common/JobLayouts.jsx";
import {JobDurationChip, JobIntroSection} from "../common/JobComponents.jsx";
import WorkSummaryPanel from "../common/WorkSummaryPanel.jsx";
import ReferencesPanel from "../common/ReferencesPanel.jsx";
import {LayoutTypes} from "../common/props.js";

function ConsultingJobCardSm(props) {
    const data = props.data;
    const [currLayout, setCurrLayout] = useState(props.default_layout);
    const [selectedGigCard, setSelectedGigCard] = useState(-1);

    function handleLayoutToggle() {
        let newLayout = LayoutTypes.COLLAPSED;
        if (currLayout === LayoutTypes.COLLAPSED) {
            newLayout = LayoutTypes.EXPANDED;
        }
        setCurrLayout(newLayout);
    }

    function handleGigCardSelect(idx) {
        setSelectedGigCard(idx)
    }

    function getCardByLayout(layout) {
        const childData = {
            content: data.content,
            handlers: {
                onGigCardSelect: handleGigCardSelect,
                onLayoutToggle: handleLayoutToggle,
            }
        };

        switch (layout) {
            case LayoutTypes.COLLAPSED:
                return <ConsultingJobPanelCollapsed data={childData}/>;
            case LayoutTypes.EXPANDED:
                return <ConsultingJobPanelExpanded data={childData}/>;
        }
    }

    return getCardByLayout(currLayout);
}

export default ConsultingJobCardSm;


function ConsultingJobPanelExpanded(props) {
    const data = props.data;
    const {theme, time, references, works} = data.content;
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme}/>
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={data.handlers.onLayoutToggle}>
                    <div className="flex flex-col w-full gap-4">
                        <JobIntroSection content={data.content} isCollapsed={false}/>
                        <JobSectionLayout title="Work Summary" theme={theme}>
                            <WorkSummaryPanel works={works} theme={theme}/>
                        </JobSectionLayout>
                        <JobSectionLayout title="References" theme={theme}>
                            <ReferencesPanel references={references} theme={theme}/>
                        </JobSectionLayout>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ConsultingJobPanelCollapsed(props) {
    const data = props.data;
    const {theme, time} = data.content;
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme}/>
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={data.handlers.onLayoutToggle}>
                    <JobIntroSection content={data.content} isCollapsed={true}/>
                </div>
            </div>
        </div>
    );
}

