import {ConsultingJobPanel} from './timeline/ConsultingJobPanel.jsx';
import {RegularJobPanel} from './timeline/RegularJobPanel.jsx';
import {useState} from "react";

function TimelinePanelSingleCol(props) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    function getListingPanel(index) {
        const content = props.data[index];
        const {type} = content;

        const childData = {
            content: content,
            isCollapsedOrig: !(expandedIndex === index),
            onClickSelect: (() => {
                setExpandedIndex(index)
            }),
            onToggleCollapsed: (() => {
            }),
            canExpandInPlace: false,
            key: `single-col-job-card-${index}`,
        };
        if (type === 'consulting') {
            return <ConsultingJobPanel {...childData} />;
        }
        return <RegularJobPanel {...childData} />;
    }

    return (
        <div className="flex w-full gap-6">
            <div className="flex flex-col w-[40%] gap-6 pr-4 h-[calc(100vh-180px)] overflow-y-scroll">
                {props.data.map((data, index) => getListingPanel(index))}
            </div>
            <div className="flex w-[60%]">
                {getListingPanel(expandedIndex)}
            </div>
        </div>

    );
}

export default TimelinePanelSingleCol;
