import {useState} from "react";
import {ConsultingJobPanel} from "./timeline/ConsultingJobPanel.jsx";
import {RegularJobPanel} from "./timeline/RegularJobPanel.jsx";
import {JobPanelCollapsed} from "./timeline/BaseJobPanels.jsx";

function TimelinePanel(props) {
    const [collapsed, setCollapsed] = useState(false)

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

    function getPanelType(collapsed, type) {
        if (collapsed) {
            return <JobPanelCollapsed data={childData}/>
        } else if (type === "consulting") {
            return <ConsultingJobPanel data={childData}/>
        } else {
            return <RegularJobPanel data={childData}/>
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







