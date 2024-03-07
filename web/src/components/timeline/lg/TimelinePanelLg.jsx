import RegularJobCard from '../RegularJobCard.jsx';
import {useState} from "react";
import ConsultingJobCardSm from "../sm/ConsultingJobCardSm.jsx";
import {LayoutTypes} from "../common/props.js";

function TimelinePanelLg(props) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    function getListingPanel(index, canExpandInPlace) {
        const content = props.data[index];
        const {type} = content;

        const childData = {
            content: content,
            default_layout: LayoutTypes.COLLAPSED,
            canExpandInPlace: canExpandInPlace,
            isCollapsedOrig: !(expandedIndex === index),
            onClickSelect: (() => {
                setExpandedIndex(index)
            }),
            onToggleCollapsed: (() => {
            }),
            key: `single-col-job-card-${index}`,
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={content.gigs} key={`double-col-con-card-${index}`}/>;
        } else {
            return <RegularJobCard {...childData} />;
        }
    }

    return (
        <div className="flex w-full gap-6">
            <div className="flex flex-col w-[40%] gap-6 pr-4 h-[calc(100vh-180px)] overflow-y-scroll">
                {props.data.map((data, index) => getListingPanel(index, false))}
            </div>
            <div className="flex w-[60%]">
                {getListingPanel(expandedIndex, true)}
            </div>
        </div>

    );
}

export default TimelinePanelLg;
