import { useState } from 'react';
import RegularJobCard from '../RegularJobCard';
import ConsultingJobCardSm from './ConsultingJobCardSm';
import { LayoutTypes } from '../../constants';

function TimelinePanelSm(props) {
    const [selectedCardIdx, setSelectedCardIdx] = useState(-1);
    const { data } = props;

    function handleCardSelected(index) {
        if (selectedCardIdx === index) {
            setSelectedCardIdx(-1);
        } else {
            setSelectedCardIdx(index);
        }
    }

    function getLayoutByIndex(index) {
        return index === selectedCardIdx ? LayoutTypes.EXPANDED : LayoutTypes.COLLAPSED;
    }

    function getCard(index) {
        const content = data[index];
        const { type } = content;
        const childData = {
            content,
            layout: getLayoutByIndex(index),
            handlers: {
                onClickSelect: () => handleCardSelected(index),
            },
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tpsm-cjob-card-${index}`} />;
        }
        return <RegularJobCard data={childData} key={`tpsm-rjob-card-${index}`} />;
    }

    return (
        <div
            className="flex flex-col w-full gap-6 pr-2 h-[calc(100vh-180px)] overflow-y-scroll"
        >
            {props.data.map((x, index) => getCard(index))}
        </div>
    );
}

export default TimelinePanelSm;
