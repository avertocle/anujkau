import {useState} from "react";
import {ConsultingJobPanel} from "./timeline/ConsultingJobPanel.jsx";
import {RegularJobPanel} from "./timeline/RegularJobPanel.jsx";
import {JobPanelCollapsed} from "./timeline/BaseJobPanels.jsx";

function TimelinePanelDoubleCol(props) {
    const [expandedIdx, setExpandedIdx] = useState(-1);

    function handleSelectTile(index) {
        if (expandedIdx === index) {
            setExpandedIdx(-1)
        } else {
            setExpandedIdx(index)
        }
    }

    function getPanel(index) {
        let content = props.data[index]
        let isCollapsed = !(expandedIdx === index)
        let type = content.type
        let childData = {
            content: content,
            isCollapsed: isCollapsed,
            onClickSelect: (() => handleSelectTile(index)),
            key: `single-col-job-card-${index}`
        }
        if (isCollapsed) {
            return <JobPanelCollapsed {...childData}/>
        } else if (type === "consulting") {
            return <ConsultingJobPanel {...childData}/>
        } else {
            return <RegularJobPanel {...childData}/>
        }
    }

    return (
        <div className="flex flex-col w-full gap-6">
            {props.data.map((data, index) => {
                return getPanel(index)
            })}
        </div>
    )

}

export default TimelinePanelDoubleCol;





