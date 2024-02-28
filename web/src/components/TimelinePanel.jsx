import {useState} from "react";
import {ConsultingPanelExpanded} from "./timeline/ConsultingJobPanels.jsx";
import {RegularJobPanelExpanded} from "./timeline/RegularJobPanels.jsx";
import {JobPanelCollapsed} from "./timeline/BaseJobPanels.jsx";

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

    function getPanelType(collapsed, type) {
        if (collapsed) {
            return <JobPanelCollapsed data={childData}/>
        }else if (type === "consulting") {
            return <ConsultingPanelExpanded data={childData}/>
        } else {
            return <RegularJobPanelExpanded data={childData}/>
        }
    }

    return (
        <div className="flex w-full">
            {getPanelType(collapsed, props.data.type)}
        </div>
    )
}

export default TimelinePanel;


function TimelineGigPanel(props) {

}







