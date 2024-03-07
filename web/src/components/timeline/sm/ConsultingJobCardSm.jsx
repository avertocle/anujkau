import { useState } from 'react';
import { JobDurationChip, JobIntroSection } from '../common/JobComponents';
import { LayoutTypes } from '../../constants';
import { GetBgByThemeColor } from '../CompanyThemeHelpers';
import GigJobCardSm from './GigJobCardSm';

function ConsultingJobCardSm(props) {
    const { data } = props;
    const [cardLayout, setCardLayout] = useState(data.layout);
    const [selectedCardIdx, setSelectedCardIdx] = useState(-1);

    function handleLayoutToggle() {
        switch (cardLayout) {
        case LayoutTypes.EXPANDED:
            setCardLayout(LayoutTypes.COLLAPSED);
            break;
        case LayoutTypes.COLLAPSED:
            setCardLayout(LayoutTypes.EXPANDED);
            break;
        default:
            break;
        }
        data.handlers.onClickSelect();
    }

    function handleGigCardSelect(idx) {
        if (selectedCardIdx === idx) {
            setSelectedCardIdx(-1);
        } else {
            setSelectedCardIdx(idx);
        }
    }

    function getCardByLayout(layout) {
        const childData = {
            content: data.content,
            selectedGigCard: selectedCardIdx,
            handlers: {
                onGigCardSelect: handleGigCardSelect,
                onLayoutToggle: handleLayoutToggle,
            },
        };

        switch (layout) {
        case LayoutTypes.COLLAPSED:
        case LayoutTypes.COLLAPSED_FIXED:
            return <ConsultingJobPanelCollapsed data={childData} />;
        case LayoutTypes.EXPANDED:
        case LayoutTypes.EXPANDED_FIXED:
            return <ConsultingJobPanelExpanded data={childData} />;
        default:
            console.error('ConsultingJobCardSm : getCardByLayout : invalid layout', layout);
            return null;
        }
    }

    return (
        <>
            { getCardByLayout(cardLayout) }
        </>
    );
}

export default ConsultingJobCardSm;

function ConsultingJobPanelExpanded(props) {
    const { data } = props;
    const { theme, time, gigs } = data.content;
    const { selectedGigCard } = data;
    const bgColor = GetBgByThemeColor(theme.color);

    return (
        <div className="flex flex-col gap-2">
            <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
                <JobDurationChip time={time} theme={theme} />
                <div className="flex flex-col pr-4 gap-4 cursor-pointer">
                    <div className="flex w-full " onClick={data.handlers.onLayoutToggle}>
                        <JobIntroSection content={data.content} isCollapsed={false} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[90%] ml-auto">
                {gigs.map((gig, idx) => {
                    const childData = {
                        content: gig,
                        default_layout: selectedGigCard === idx ? LayoutTypes.EXPANDED : LayoutTypes.COLLAPSED,
                        handlers: {
                            onGigCardSelect: (() => data.handlers.onGigCardSelect(idx)),
                        },
                        key: `cjob-gig-card-${idx}`,
                    };
                    return <GigJobCardSm data={childData} key={`cjob-gig-card-${idx}`} />;
                })}
            </div>
        </div>
    );
}

export function ConsultingJobPanelCollapsed(props) {
    const { data } = props;
    const { theme, time } = data.content;
    const bgColor = GetBgByThemeColor(theme.color);
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme} />
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={data.handlers.onLayoutToggle}>
                    <JobIntroSection content={data.content} isCollapsed />
                </div>
            </div>
        </div>
    );
}
