import { useState } from 'react';
import RegularJobCard from '../RegularJobCard';
import ConsultingJobCardSm from '../sm/ConsultingJobCardSm';
import { LayoutTypes } from '../../constants';

function TimelinePanelLg(props) {
    const [selectedCardIdx, setSelectedCardIdx] = useState(0);
    const { data } = props;

    function handleCardSelected(index) {
        setSelectedCardIdx(index);
    }

    function getListingPanel(index) {
        const content = data[index];
        const { type } = content;

        const childData = {
            content,
            layout: LayoutTypes.COLLAPSED_FIXED,
            handlers: {
                onClickSelect: () => handleCardSelected(index),
            },
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tplg-cjob-lcard-${index}`} />;
        }
        return <RegularJobCard data={childData} key={`tplg-rjob-lcard-${index}`} />;
    }

    function getDetailsPanel(index) {
        const content = data[index];
        const { type } = content;

        const childData = {
            content,
            layout: LayoutTypes.EXPANDED_FIXED,
            handlers: {
                onClickSelect: () => handleCardSelected(index),
            },
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tplg-cjob-dcard-${index}`} />;
        }
        return <RegularJobCard data={childData} key={`tplg-rjob-dcard-${index}`} />;
    }

    return (
        <div className="flex w-full gap-6">
            <div className="flex flex-col w-[40%] gap-6 pr-2 h-[calc(100vh-180px)] overflow-y-scroll">
                {props.data.map((x, index) => getListingPanel(index))}
            </div>
            <div className="flex w-[60%] pr-2 h-[calc(100vh-180px)] overflow-y-scroll">
                {getDetailsPanel(selectedCardIdx)}
            </div>
        </div>

    );
}

export default TimelinePanelLg;
