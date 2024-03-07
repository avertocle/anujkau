import { useState } from 'react';
import ConsultingJobCardSm from '../sm/ConsultingJobCardSm';
import { LayoutTypes } from '../common/props';
import RegularJobCard from '../RegularJobCard';

function TimelinePanelLg(props) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    function getListingPanel(index, canExpandInPlace) {
        const content = props.data[index];
        const { type } = content;

        const childData = {
            content,
            default_layout: LayoutTypes.COLLAPSED,
            canExpandInPlace,
            isCollapsedOrig: !(expandedIndex === index),
            onClickSelect: (() => {
                setExpandedIndex(index);
            }),
            onToggleCollapsed: (() => {
            }),
            key: `single-col-job-card-${index}`,
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tplg-cjob-card-${index}`} />;
        }
        return <RegularJobCard data={childData} key={`tplg-rjob-card-${index}`} />;
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
